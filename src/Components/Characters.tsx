import React, { FC, useState, useEffect } from 'react';
import { CharacterInterface, windowDimenionInterface } from '../Common/Interface';
import CharacterDetails from './CharacterDetails';
import TableList from './TableList';
import MobileList from './MobileList';

const Characters = ({
  results,
  windowDimenion
}: {
  results: CharacterInterface[];
  windowDimenion: windowDimenionInterface;
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [details, setDetails] = useState<any>(null);

  const showDetailsHandler = (result: CharacterInterface) => {
    setShowModal(true);
    setDetails(result);
  };

  return (
    <div className="w-full p-0">
      {windowDimenion.winWidth > 650 ? (
        <TableList results={results} onRowClick={showDetailsHandler} />
      ) : (
        <MobileList results={results} onItemClick={showDetailsHandler} />
      )}

      <CharacterDetails showModal={showModal} setShowModal={setShowModal} details={details} />
    </div>
  );
};

export default Characters;
