import React from 'react';

interface IIconEmptyProps {
  size?: number;
  fill?: string;
}

export const IconEmptySearch = ({ fill = '#0D192E', size = 24 }: IIconEmptyProps) => {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <path
        d='M13.1213 7.46449L11 9.58581L8.8787 7.46449C8.69117 7.27696 8.43681 7.1716 8.1716 7.1716C7.90638 7.1716 7.65203 7.27696 7.46449 7.46449C7.27695 7.65203 7.1716 7.90638 7.1716 8.1716C7.1716 8.43682 7.27695 8.69117 7.46449 8.87871L9.58581 11L7.46449 13.1213C7.27695 13.3089 7.1716 13.5632 7.1716 13.8285C7.1716 14.0937 7.27695 14.348 7.46449 14.5356C7.65203 14.7231 7.90638 14.8285 8.1716 14.8285C8.43681 14.8285 8.69117 14.7231 8.8787 14.5356L11 12.4142L13.1213 14.5356C13.3089 14.7231 13.5632 14.8285 13.8285 14.8285C14.0937 14.8285 14.348 14.7231 14.5356 14.5356C14.7231 14.348 14.8284 14.0937 14.8284 13.8285C14.8284 13.5632 14.7231 13.3089 14.5356 13.1213L12.4142 11L14.5356 8.87871C14.7231 8.69117 14.8284 8.43682 14.8284 8.1716C14.8284 7.90638 14.7231 7.65203 14.5356 7.46449C14.348 7.27696 14.0937 7.1716 13.8285 7.1716C13.5632 7.1716 13.3089 7.27696 13.1213 7.46449Z'
        fill={fill}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18 16.61L21.71 20.29C21.8903 20.4765 21.991 20.7257 21.991 20.985C21.991 21.2444 21.8903 21.4936 21.71 21.68C21.6171 21.7738 21.5065 21.8482 21.3846 21.8989C21.2627 21.9497 21.132 21.9758 21 21.9758C20.868 21.9758 20.7373 21.9497 20.6154 21.8989C20.4936 21.8482 20.383 21.7738 20.29 21.68L16.61 18C14.8144 19.4401 12.5353 20.1375 10.2413 19.9488C7.94733 19.7601 5.81281 18.6997 4.27667 16.9855C2.74053 15.2714 1.91954 13.0338 1.9825 10.7329C2.04546 8.43207 2.98759 6.24275 4.61517 4.61517C6.24275 2.98759 8.43207 2.04546 10.7329 1.9825C13.0338 1.91954 15.2714 2.74053 16.9855 4.27667C18.6997 5.81281 19.7601 7.94733 19.9488 10.2413C20.1375 12.5353 19.4401 14.8144 18 16.61ZM7.11103 16.8203C8.26218 17.5895 9.61556 18 11 18C12.8565 18 14.637 17.2625 15.9498 15.9498C17.2625 14.637 18 12.8565 18 11C18 9.61556 17.5895 8.26218 16.8203 7.11103C16.0511 5.95989 14.9579 5.06268 13.6788 4.53287C12.3997 4.00306 10.9923 3.86443 9.63439 4.13453C8.27653 4.40463 7.02925 5.07131 6.05028 6.05028C5.07131 7.02925 4.40463 8.27653 4.13453 9.63439C3.86443 10.9923 4.00306 12.3997 4.53287 13.6788C5.06268 14.9579 5.95989 16.0511 7.11103 16.8203Z'
        fill={fill}
      />
    </svg>
  );
};