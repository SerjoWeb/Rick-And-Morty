import React, { FC } from 'react';
import { TableListInterface } from '../Common/Interface';

const TableList: FC<TableListInterface> = ({ results, onRowClick }) => {
  return (
    <div className="w-full p-0">
      <table className="table-auto border-collapse border border-[#E3E6EC] border-t-0 w-full">
        <thead className="bg-[#474955] border border-[#474955]">
          <tr>
            <th className="py-[15px] px-[11px] font-semibold">
              <div className="w-full flex justify-start items-center">
                <span className="mr-[10px] text-white">Image</span>
              </div>
            </th>

            <th className="py-[15px] px-[11px] font-semibold">
              <div className="w-full flex justify-start items-center cursor-pointer">
                <span className="mr-[10px] text-white">Name</span>
              </div>
            </th>

            <th className="py-[15px] px-[11px] font-semibold">
              <div className="w-full flex justify-start items-center cursor-pointer">
                <span className="mr-[10px] text-white">Status</span>
              </div>
            </th>

            <th className="py-[15px] px-[11px] font-semibold">
              <div className="w-full flex justify-start items-center cursor-pointer">
                <span className="mr-[10px] text-white">Species</span>
              </div>
            </th>

            <th className="py-[15px] px-[11px] font-semibold">
              <div className="w-full flex justify-start items-center cursor-pointer">
                <span className="mr-[10px] text-white">Type</span>
              </div>
            </th>

            <th className="py-[15px] px-[11px] font-semibold">
              <div className="w-full flex justify-start items-center cursor-pointer">
                <span className="mr-[10px] text-white">Gender</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr
              key={result.id}
              className="hover:bg-[#f0f1f5] hover:cursor-pointer"
              onClick={() => onRowClick(result)}
            >
              <td className="border border-[#E3E6EC] font-medium text-sm py-[15px] px-[11px]">
                <div className="h-[50px] w-[50px]">
                  <img src={result.image} alt={result.name} height="100%" width="100%" />
                </div>
              </td>
              <td className="border border-[#E3E6EC] font-medium text-sm py-[15px] px-[11px]">
                {result.name}
              </td>
              <td className="border border-[#E3E6EC] font-medium text-sm py-[15px] px-[11px]">
                {result.status !== 'unknown' ? result.status : 'Unknown'}
              </td>
              <td className="border border-[#E3E6EC] font-medium text-sm py-[15px] px-[11px]">
                {result.species}
              </td>
              <td className="border border-[#E3E6EC] font-medium text-sm py-[15px] px-[11px]">
                {result.type || 'No Type'}
              </td>
              <td className="border border-[#E3E6EC] font-medium text-sm py-[15px] px-[11px]">
                {result.gender !== 'unknown' ? result.gender : 'Alien'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
