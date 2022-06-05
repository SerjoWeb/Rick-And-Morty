import React, { FC } from 'react';
import { GiEmptyMetalBucketHandle } from 'react-icons/gi';

const Loader: FC = () => {
  return (
    <div className="flex justify-start items-center">
      <GiEmptyMetalBucketHandle fontSize={20} className="text-[#474955] fill-[#474955]" />
      <span className="ml-[10px]">There are no characters yet!</span>
    </div>
  );
};

export default Loader;
