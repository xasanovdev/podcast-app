import React from 'react';
import { ReviewPropsType } from '../../../types/reviewType';

const Review: React.FC<{ review: ReviewPropsType }> = ({ review }) => {
  return (
    <>
      <div className="w-[400px] sm:w-[580px] relative bg-white p-5 sm:p-10 h-full flex flex-col justify-between">
        <svg
          width="42"
          height="34"
          viewBox="0 0 42 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8015 16.0612C15.4007 16.7648 16.648 17.8202 17.5436 19.2275C18.4391 20.6348 18.8869 22.2979 18.8869 24.2169C18.8869 26.9675 18.0233 29.2063 16.2962 30.9334C14.5691 32.5965 12.3623 33.4281 9.67565 33.4281C6.98905 33.4281 4.75022 32.5645 2.95915 30.8374C1.23205 29.1103 0.368501 26.9035 0.368501 24.2169C0.368501 22.9376 0.528418 21.6582 0.848251 20.3789C1.16808 19.0996 1.87172 17.1806 2.95915 14.6219L8.52425 0.805098H18.0233L13.8015 16.0612ZM36.4457 16.0612C38.0449 16.7648 39.2922 17.8202 40.1878 19.2275C41.0833 20.6348 41.5311 22.2979 41.5311 24.2169C41.5311 26.9675 40.6675 29.2063 38.9404 30.9334C37.2133 32.5965 35.0065 33.4281 32.3199 33.4281C29.6333 33.4281 27.3944 32.5645 25.6034 30.8374C23.8763 29.1103 23.0127 26.9035 23.0127 24.2169C23.0127 22.9376 23.1726 21.6582 23.4925 20.3789C23.8123 19.0996 24.5159 17.1806 25.6034 14.6219L31.1685 0.805098H40.6675L36.4457 16.0612Z"
            fill="#CD4631"
          />
        </svg>
        <p className="pt-12 text-[16px] sm:text-[23px]">{review.title}</p>
        <div className="flex items-center justify-start gap-3 pt-12">
          <img className="w-12 h-12 rounded-full" src={review.imgUrl} alt="" />
          <span className="flex items-center gap-2">
            <span>{review.name}</span>
            <img src={review.socialsUrl} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Review;