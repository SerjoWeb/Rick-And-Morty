import React, { FC } from 'react';
import { CharacterDetailsInterface } from '../Common/Interface';
import Button from './UI/Button';

const CharacterDetails: FC<CharacterDetailsInterface> = ({ showModal, setShowModal, details }) => {
  return (
    <>
      {showModal ? (
        <div className="w-full h-full fixed z-50 top-0 left-0 overflow-hidden bg-[rgba(0,0,0,0.7)] flex justify-center items-center">
          <div className="w-full max-w-[650px] h-auto bg-white border border-[#E3E6EC]">
            <div className="py-[10px] px-[20px] flex justify-between items-center border-b border-[#E3E6EC]">
              <h1 className="text-lg font-bold">{details.name}</h1>
              <Button
                name="close"
                classProps="border-0 font-bold text-lg px-0 py-0 m-0"
                clickHandler={() => setShowModal(false)}
                content="X"
                disabled={false}
              />
            </div>
            <div className="py-[10px] px-[20px] min-h-[400px] relative overflow-y-auto">
              <div className="flex justify-start items-start media-details">
                <div className="w-[250px] h-auto mr-[30px] media-details-image">
                  <img
                    src={details.image}
                    alt={details.name}
                    height="100%"
                    width="100%"
                    className="w-[250px] h-auto"
                  />
                </div>

                <div className="flex-1 media-details-info">
                  <p className="leading-8">
                    <span className="text-slate-500">Gender:</span>
                    &nbsp;<span>{details.gender}</span>
                  </p>
                  <p className="leading-8">
                    <span className="text-slate-500">Species:</span>
                    &nbsp;<span>{details.species}</span>
                  </p>
                  <p className="leading-8">
                    <span className="text-slate-500">Type:</span>
                    &nbsp;<span>{details.type || 'No Type'}</span>
                  </p>
                  <p className="leading-8">
                    <span className="text-slate-500">Status:</span>
                    &nbsp;<span>{details.status !== 'unknown' ? details.status : 'Unknown'}</span>
                  </p>
                  <p className="leading-8">
                    <span className="text-slate-500">Origin:</span>
                    &nbsp;<span>{details.origin.name}</span>
                  </p>
                  <p className="leading-8">
                    <span className="text-slate-500">Location:</span>
                    &nbsp;<span>{details.location.name}</span>
                  </p>
                  <p className="leading-8">
                    <span className="text-slate-500">Created:</span>
                    &nbsp;<span>{details.created.substring(0, 10)}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CharacterDetails;
