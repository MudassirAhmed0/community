import { RootState } from '../../store';
import { IToken } from 'app/shared/interfaces/token.interface';

export const tokenSelectors = {
  token: (state: RootState): IToken => state.token,
};
