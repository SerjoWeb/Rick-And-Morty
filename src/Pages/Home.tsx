import React, { FC, useEffect, useState } from 'react';
import { windowDimenionInterface } from '../Common/Interface';

import useStore from '../Store/useStore';
import Loader from '../Components/UI/Loader';
import Characters from '../Components/Characters';
import Pagination from '../Components/Pagination';
import Filters from '../Components/Filters';

const Home: FC = () => {
  const { characters, getAllCharacters } = useStore((state) => state);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [windowDimenion, setWindowDimenion] = useState<windowDimenionInterface>({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight
  });

  const detectSize = () => {
    setWindowDimenion({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    });
  };

  useEffect(() => {
    setIsFetching(true);
    getAllCharacters();
    setIsFetching(false);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimenion]);

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-start m-0 p-[10px]">
      <div className="max-w-[1230px] w-full py-[20px] px-[40px] bg-white shadow-xl">
        {isFetching ? (
          <Loader />
        ) : (
          <div>
            <Filters results={characters.results} />
            <Characters results={characters.results} windowDimenion={windowDimenion} />
            <Pagination info={characters.info} windowDimenion={windowDimenion} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
