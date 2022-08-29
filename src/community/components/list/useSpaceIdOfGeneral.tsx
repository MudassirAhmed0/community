import React from 'react';
import { useSpaces } from '@tribeplatform/react-sdk/hooks';

const useSpaceIdOfGeneral = () => {
  let spaceId = '';
  const { data: spaces, isLoading } = useSpaces({ fields: { image: 'basic' } });
  spaceId = spaces?.pages[0].nodes[0]?.id;
  return spaceId;
};

export default useSpaceIdOfGeneral;
