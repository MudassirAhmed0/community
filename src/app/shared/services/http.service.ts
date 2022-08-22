import React from 'react';
import { FetchArgs } from '@reduxjs/toolkit/query';

import { IKeyValue } from 'app/shared/interfaces/key-value.interface';
import ErrorProvider from 'app/shared/providers/errors.provider';
import { IToken } from 'app/shared/interfaces/token.interface';

const isJsonResponse = (res: Response): boolean => {
  return res.headers.get('content-type')?.indexOf('application/json') !== -1;
};

const isResponseOk = (res: Response): boolean => {
  return [200, 201, 204, 205].includes(res.status);
};

export const createHttpService = () => {
  let _errorsSetter: React.Dispatch<React.SetStateAction<any>>;

  const setErrorSetter = (es: React.Dispatch<React.SetStateAction<any>>) => (_errorsSetter = es);

  const buildHeaders = (_token?: IToken): { [key: string]: string } => {
    const token = _token;
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    };
    if (token?.access) {
      headers.Authorization = `Bearer ${token.access}`;
    }
    return headers;
  };

  const handleResponse = (res: Response) => {
    if (!isJsonResponse(res)) {
      return;
    }
    if (!isResponseOk(res)) {
      throw res.json();
    }
    return res.json();
  };

  const handleError = async (err: any) => {
    if (!err.then) {
      return err;
    }

    const e = await err;
    if (e.errors && e.errors.code === 'token_not_valid') {
      console.error(e);
    }

    if (_errorsSetter) {
      ErrorProvider(err, _errorsSetter);
    } else {
      console.error(err);
    }
  };

  const post = async (path: string, body: IKeyValue<any>, _token?: IToken, options: FetchArgs = null): Promise<any> => {
    const url = `${process.env.REACT_APP_API_HOST}${path}`;
    const params = {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
      headers: buildHeaders(_token),
    };
    return fetch(url, params).then(handleResponse).catch(handleError);
  };

  const patch = async (path: string, body: IKeyValue<any>, options: FetchArgs = null): Promise<any> => {
    const url = `${process.env.REACT_APP_API_HOST}${path}`;
    const params: FetchArgs = {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: buildHeaders(),
    };
    return fetch(url, params).then(handleResponse).catch(handleError);
  };

  const put = async (path: string, options: FetchArgs = null): Promise<any> => {
    const url = `${process.env.REACT_APP_API_HOST}${path}`;
    const params: FetchArgs = {
      ...options,
      method: 'PUT',
      headers: buildHeaders(),
    };
    return fetch(url, params).then(handleResponse).catch(handleError);
  };

  const get = async (path: string, options: FetchArgs = null): Promise<any> => {
    const url = `${process.env.REACT_APP_API_HOST}${path}`;
    const params: FetchArgs = {
      ...options,
      method: 'GET',
      headers: buildHeaders(),
    };
    return fetch(url, params).then(handleResponse).catch(handleError);
  };

  const deleteMethod = async (path: string, options: FetchArgs = null): Promise<any> => {
    const url = `${process.env.REACT_APP_API_HOST}${path}`;
    const params: FetchArgs = {
      ...options,
      method: 'DELETE',
      headers: buildHeaders(),
    };
    return fetch(url, params).then(handleResponse).catch(handleError);
  };

  return { post, get, put, patch, deleteMethod, setErrorSetter };
};
