import React from 'react';
import { Button } from '../../../components/button/button';
import { SponsorPropsType } from '../../../types/sponsorType';

const Sponsor: React.FC<{ sponsor: SponsorPropsType }> = ({ sponsor }) => {
  return (
    <div key={sponsor.id} className="w-full h-[650px] flex flex-col gap-5">
      <div
        className={`px-10 py-[60px] flex flex-col rounded-xl flex-1 justify-between z-10 ${
          sponsor.popular
            ? 'border border-orange-color bg-champagne-color'
            : 'border border-black bg-white'
        }`}
      >
        <div className="flex flex-col gap-5">
          <span className="flex items-center w-full justify-between gap-2">
            <span className="text-[37px] font-bold ">{sponsor.type}</span>
            {sponsor.popular && (
              <span className="uppercase px-[10px] py-[7px] text-[12px] rounded-md text-white bg-orange-color ">
                MOST POPULAR
              </span>
            )}
          </span>
          <p className="text-sm text-grey-color leading-relaxed">
            {sponsor.title}
          </p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Button
            classes="sm:py-5 sm:px-9 bg-black text-white hover:bg-transparent hover:text-black"
            text="subscribe"
          />
          <span className="text-grey-color text-sm leading-relaxed">
            <p className="text-orange-color text-[23px] font-bold">
              {sponsor.cost}
            </p>
            <p>/month</p>
          </span>
        </div>
      </div>
      <div
        className={`p-10 rounded-2xl flex-1 ${
          sponsor.popular
            ? 'border border-orange-color bg-champagne-color'
            : 'border border-black'
        }`}
      >
        <p className="text-grey-color text-sm ">What's included:</p>
        <ul className="flex flex-col gap-[10px] pt-5">
          {sponsor.included.map((include,index) => (
            <li key={index}>{include}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sponsor;
