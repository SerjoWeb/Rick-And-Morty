import React, { FC } from 'react';
import { InfoInterface, windowDimenionInterface } from '../Common/Interface';
import useStore from '../Store/useStore';
import Button from './UI/Button';

const Pagination = ({
  info,
  windowDimenion
}: {
  info: InfoInterface;
  windowDimenion: windowDimenionInterface;
}) => {
  const { getPaginationCharacters } = useStore((state) => state);

  const paginationArrowsHandler = (page: boolean) => {
    page ? getPaginationCharacters(info.next) : getPaginationCharacters(info.prev);
  };

  const currentPage = () => {
    if (info.next !== null && info.next !== '') {
      const match: any = info.next.match(/(page=\d+)/);
      const split: string[] = match[1].split('=');
      return Number(split[1]) - 1;
    }

    return 1;
  };

  return (
    <div className="w-full flex justify-center items-center bg-[#474955] p-[10px]">
      <Button
        name="prev"
        classProps="hover:border-white hover:text-white mr-[5px]"
        clickHandler={() => paginationArrowsHandler(false)}
        content="<"
        disabled={info.prev === null ? true : false}
      />

      {windowDimenion.winWidth > 480 ? (
        <Button
          name="page-count"
          classProps="mr-[5px]"
          clickHandler={() => {
            return false;
          }}
          content={`Pages: ${info.pages}`}
          disabled={false}
        />
      ) : null}

      <Button
        name="current-page"
        classProps="mr-[5px]"
        clickHandler={() => {
          return false;
        }}
        content={
          windowDimenion.winWidth > 480
            ? `Current Page: ${currentPage()}`
            : currentPage().toString()
        }
        disabled={false}
      />

      <Button
        name="next"
        classProps="hover:border-white hover:text-white"
        clickHandler={() => paginationArrowsHandler(true)}
        content=">"
        disabled={info.next === null ? true : false}
      />
    </div>
  );
};

export default Pagination;
