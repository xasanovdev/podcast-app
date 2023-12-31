import React, { useEffect, useRef, useState } from 'react';
import Title from '../../components/Title/title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import axios, { AxiosResponse } from 'axios';
import Review from './review';
import { ReviewPropsType } from '../../types/reviewType';
import data from '../../../db';

const Reviews: React.FC = () => {
  // const [reviews, setReviews] = useState<ReviewPropsType | undefined>([]);

  // const getReviews = async () => {
  //   try {
  //     const response: AxiosResponse<ReviewPropsType> =
  //       await axios.get<ReviewPropsType>('http://localhost:3000/reviews');
  //     setReviews(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getReviews();
  // }, []);

  // console.log(reviews);

  return (
    <div className="w-full bg-[#EDF3F7]">
      <div className="py-[140px] container relative">
        <div className="absolute left-36 top-16">
          <svg
            width="105"
            height="105"
            viewBox="0 0 105 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M89.9246 62.3434C85.8777 61.3043 79.06 60.1923 76.5443 58.4788C75.5053 57.7679 75.6329 56.984 75.8152 56.4371C75.9975 55.9267 77.0365 55.3981 77.6745 55.4345C79.1147 55.4892 80.5548 55.7991 81.9402 56.1819C85.0209 57.0205 88.0834 57.8955 91.1095 58.8981C92.7136 59.4267 93.224 60.6481 92.2943 61.4319C91.7475 61.8876 91.2371 62.3434 89.9246 62.3434Z"
              fill="#CD4631"
            />
            <path
              d="M26.1224 90.5074C26.3047 89.5413 26.6693 89.0309 27.1979 88.2835C29.2578 85.4033 31.4088 82.5777 33.5234 79.7522C33.651 79.5882 33.7969 79.4059 33.9609 79.2783C34.6901 78.6585 35.5104 77.9293 36.4583 78.6038C37.4062 79.2965 37.0781 80.3173 36.5677 81.1376C34.4531 84.583 32.3021 88.01 30.1146 91.4189C29.7865 91.9475 29.2214 92.4033 28.6562 92.6767C27.2526 93.3512 26.013 92.4215 26.1224 90.5074Z"
              fill="#CD4631"
            />
            <path
              d="M71.6771 89.8701C71.6771 90.6905 71.0391 91.2738 70.5652 91.3649C69.9271 91.4925 69.3803 91.3832 68.4688 90.7634C68.1589 90.5629 67.9766 90.0707 67.7943 89.6879C66.4636 86.8076 65.1146 83.9457 63.8204 81.0472C63.4922 80.3363 63.1641 79.516 63.2188 78.7686C63.2735 78.0941 63.6928 77.1279 64.2396 76.891C64.7683 76.654 65.4792 76.5811 66.3178 77.4014C66.6277 77.6931 66.9193 78.1852 67.1198 78.641C68.4323 81.6852 69.7448 84.7295 71.0209 87.792C71.2579 88.3753 71.4037 89.0134 71.6771 89.8701Z"
              fill="#CD4631"
            />
            <path
              d="M13.8177 64.7502C12.9792 64.5132 12.4323 64.1122 12.3047 63.5653C12.1406 62.8726 12.487 61.9429 12.888 61.2866C13.1979 60.7945 13.9089 60.4846 14.5104 60.284C17.5183 59.2814 20.5443 58.2971 23.5886 57.3674C24.099 57.2033 24.7552 57.1486 25.2474 57.3127C26.0495 57.5861 26.3959 58.2241 25.7396 58.9898C25.375 59.4273 24.9558 59.883 24.4636 60.12C21.6198 61.5419 18.7578 62.909 15.8776 64.258C15.349 64.495 14.638 65.0054 13.8177 64.7502Z"
              fill="#CD4631"
            />
            <path
              d="M75.5781 33.4689C75.1771 33.3049 74.8308 32.6486 74.8125 32.2111C74.7943 31.6095 74.9766 30.8804 75.3412 30.3882C77.0365 28.0549 78.8229 25.758 80.5912 23.4793C80.8464 23.133 81.1927 22.8595 81.5391 22.5861C82.3229 21.9845 83.3438 21.4559 84.0365 22.3674C84.4375 22.896 84.5651 24.245 84.1823 24.7007C81.849 27.5444 79.3334 30.2606 76.836 32.9767C76.6354 33.2137 76.2344 33.5965 75.5781 33.4689Z"
              fill="#CD4631"
            />
            <path
              d="M17.1354 29.5131C18.1562 29.823 18.9401 30.0052 19.6875 30.2787C21.8568 31.0625 24.026 31.8646 26.1771 32.6849C26.7786 32.9219 27.4167 33.1589 27.9088 33.5417C28.2552 33.8151 28.638 34.5078 28.5104 34.7631C28.2917 35.1823 27.9635 35.711 27.2161 35.6563C26.9062 35.6381 26.5052 35.6198 26.1588 35.5287C23.7161 34.8724 21.2734 34.2526 18.8489 33.5235C18.0286 33.2865 17.1719 32.9401 16.5156 32.4115C16.0417 32.0287 15.6042 31.1719 15.7318 30.6615C15.8411 30.1875 16.2422 29.5131 17.1354 29.5131Z"
              fill="#CD4631"
            />
            <path
              d="M50.4949 21.966C50.4767 22.1848 50.4584 22.4035 50.3855 22.6041C50.0756 23.4973 49.8751 24.4999 48.6173 24.4088C47.2866 24.3176 47.2319 23.2239 47.2501 22.3306C47.3048 20.1796 47.5053 18.0285 47.6694 15.8593C47.7423 15.0754 47.8334 14.2733 48.0522 13.5259C48.2709 12.7603 48.5808 11.9765 49.6381 12.1041C50.6225 12.2317 50.9506 12.8879 50.9689 13.7629C50.9689 14.7108 50.6772 20.1796 50.4949 21.966Z"
              fill="#CD4631"
            />
          </svg>
        </div>

        <div className="flex items-center flex-col gap-4 text-center">
          <Title
            text="What our listeners say"
            subtitle="Their experience throughout every platform"
          />
        </div>
        <div className="pt-20 w-full">
          <Swiper
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop={false}
            autoplay={{
              delay: 1500,
            }}
            slidesPerView={'auto'}
            spaceBetween={30}
            grabCursor={true}
            modules={[Navigation, Autoplay]}
            className="w-full overflow-hidden"
          >
            {data
              ? data.reviews.map((review) => (
                  <SwiperSlide>
                    <Review key={review.id} review={review} />
                  </SwiperSlide>
                ))
              : 'loading...'}
          </Swiper>
        </div>
        <div className="pt-[60px] flex items-center gap-5">
          <button className="swiper-button-prev">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 5.50049C13.784 5.50049 5.5 13.7825 5.5 24.0005C5.5 34.2165 13.784 42.5005 24 42.5005C34.216 42.5005 42.5 34.2165 42.5 24.0005C42.5 13.7825 34.216 5.50049 24 5.50049Z"
                stroke="black"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.8847 17.0581L19.9127 24.0001L26.8847 30.9421"
                stroke="black"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="swiper-button-next">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 42.4996C34.216 42.4996 42.5 34.2176 42.5 23.9996C42.5 13.7836 34.216 5.49963 24 5.49963C13.784 5.49963 5.5 13.7836 5.5 23.9996C5.5 34.2176 13.784 42.4996 24 42.4996Z"
                stroke="#CD4631"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.1153 30.942L28.0873 24L21.1153 17.058"
                stroke="#CD4631"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
