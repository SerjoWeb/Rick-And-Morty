import React, { FC } from 'react';
import { MobileListInterface } from '../Common/Interface';

const MobileList: FC<MobileListInterface> = ({ results, onItemClick }) => {
  return (
    <div className="w-full p-0">
      {results.map((result) => (
        <div
          key={result.id}
          className="w-full border border-[#E3E6EC] mb-[10px] p-[10px] last:mb-0 first:mt-[10px]"
          onClick={() => onItemClick(result)}
        >
          <div className="w-auto h-[150px] flex justify-center items-center">
            <img
              src={result.image}
              alt={result.name}
              height="100%"
              width="100%"
              className="object-contain h-[150px] w-auto"
            />
          </div>

          <div className="mt-[10px] px-[10px] text-center">
            <p className="leading-8">
              <span className="text-slate-500">Name:</span>
              &nbsp;<span>{result.name}</span>
            </p>
            <p className="leading-8">
              <span className="text-slate-500">Status:</span>
              &nbsp;<span>{result.status !== 'unknown' ? result.status : 'Unknown'}</span>
            </p>
            <p className="leading-8">
              <span className="text-slate-500">Species:</span>
              &nbsp;<span>{result.species}</span>
            </p>
            <p className="leading-8">
              <span className="text-slate-500">Type:</span>
              &nbsp;<span>{result.type || 'No Type'}</span>
            </p>
            <p className="leading-8">
              <span className="text-slate-500">Gender:</span>
              &nbsp;<span>{result.gender}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileList;
