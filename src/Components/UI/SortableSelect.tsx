import React, { FC, useState } from 'react';
import { SortableSelectInterface } from '../../Common/Interface';

// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

const SortableSelect: FC<SortableSelectInterface> = ({
  id,
  name,
  list,
  dublicates,
  status,
  handleSelect
}) => {
  const [value, setValue] = useState<string>('');

  const removeListRepeats = () => {
    let statuses: any = [];

    if (dublicates) {
      list.filter((item, index) => {
        if (list.indexOf(item) === index) {
          const string = item.charAt(0).toUpperCase() + item.slice(1);
          statuses.push(string);
        }
      });
    } else {
      statuses = list;
    }

    return statuses;
  };

  return (
    <div className="relative m-[10px]">
      <label className="absolute text-xs bg-[#474955] px-[4px] py-[2px] z-50 left-[16px] top-[-10px] text-slate-500">{`Sort by ${name}:`}</label>
      <select
        className="w-full border border-slate-500 py-[7px] px-[14px] text-slate-500 bg-[transparent] focus:outline-0"
        name={name}
        id={id}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleSelect();
        }}
      >
        <option value="">Choose...</option>
        {removeListRepeats().map((item: string) => (
          <option key={uuidv4()} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortableSelect;
