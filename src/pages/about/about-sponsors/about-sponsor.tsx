import React from 'react';

const Review: React.FC<{ sponsorsSay: SponsorSayPropsType }> = ({
  sponsorsSay,
}) => {
  return (
    <>
      <div className="w-[320px] sm:w-[360px] md:w-[450px] lg:w-[570px] border border-black relative bg-white pt-10 pb-[30px] px-[17px] flex flex-col gap-6 rounded-xl ">
        <div className='max-w-[354px] m-auto border-b-grey-color border-b pb-5'>
          <img className="" src={sponsorsSay.imgUrl} alt="" />
        </div>
        <p className="pt-12 text-[14px] text-center">{sponsorsSay.title}</p>
      </div>
    </>
  );
};

export interface SponsorSayPropsType {
  id: number;
  title: string;
  imgUrl: string;
}

export default Review;
