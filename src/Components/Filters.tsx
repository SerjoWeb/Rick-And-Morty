import React, { FC } from 'react';
import { CharacterInterface } from '../Common/Interface';
import useStore from '../Store/useStore';
import SortableSelect from './UI/SortableSelect';

const Filters = ({ results }: { results: CharacterInterface[] }) => {
  const { sortData } = useStore((state) => state);

  const handleSelect = () => {
    const selectCollection = document.getElementsByTagName('select');
    const filterValues: string[] = [];

    for (let select of selectCollection) {
      filterValues.push(select.value);
    }

    sortData(filterValues);
  };

  return (
    <div className="w-full bg-[#474955] border-b border-[#E3E6EC] p-[10px]">
      <div className="w-full flex justify-start items-start mb-[5px] media-filters">
        <div className="flex-1 mr-[5px] media-filter">
          <SortableSelect
            id="name"
            name="name"
            list={results.map(({ name }) => name)}
            dublicates={false}
            status="Name"
            handleSelect={handleSelect}
          />
        </div>

        <div className="flex-1 media-filter">
          <SortableSelect
            id="type"
            name="type"
            list={results.map(({ type }) => type || 'No Type')}
            dublicates={true}
            status="Type"
            handleSelect={handleSelect}
          />
        </div>
      </div>

      <div className="w-full flex justify-start items-start mb-[5px] media-filters">
        <div className="flex-1 mr-[5px] media-filter">
          <SortableSelect
            id="status"
            name="status"
            list={results.map(({ status }) => status)}
            dublicates={true}
            status="Status"
            handleSelect={handleSelect}
          />
        </div>

        <div className="flex-1 mr-[5px] media-filter">
          <SortableSelect
            id="species"
            name="species"
            list={results.map(({ species }) => species)}
            dublicates={true}
            status="Spicies"
            handleSelect={handleSelect}
          />
        </div>

        <div className="flex-1 media-filter">
          <SortableSelect
            id="gender"
            name="gender"
            list={results.map(({ gender }) => gender)}
            dublicates={true}
            status="Gender"
            handleSelect={handleSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
