import { Button } from '../../components/button/button';
import { HeroSection } from '../../components/heroSection/heroSection';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Podcast from '../../components/podcast/podcast';
import googlePodcastImage from '../../../public/svgs/social/googlePodcast.svg';
import spotifyImage from '../../../public/svgs/social/spotify.svg';
import youTubeImage from '../../../public/svgs/social/youTube.svg';
import Inspire from './inspire';
import Reviews from './review/reviews';
import data from '../../../db';
import Memberships from './membership/memberships';
import Episodes from './episode/episodes';
import Sponsors from './sponsor/sponsors';
import Articles from '../../components/articles/articles';

function Main() {
  return (
    <>
      <HeroSection>
        {
          <div className="w-full bg-champagne-color">
            <div className="container relative pt-[47px] pb-[140px]">
              <div className="flex items-center flex-col justify-center text-center">
                <h1 className="font-bold text-black text-[48px] lg:text-[96px] md:text-[76px] sm:text-[64px] leading-none">
                  Your Daily <br />{' '}
                  <span className="text-orange-color">Podcast</span>
                </h1>
                <p className="text-grey-color mt-[40px] max-w-[374px]">
                  We cover all kinds of categories and a weekly special guest.
                </p>
                <Button
                  text="Subscribe"
                  classes="mt-[60px] px-[48px] py-[24px] hover:bg-black hover:text-white"
                />
              </div>
              <div className="w-full pt-[170px]">
                <Swiper
                  loop={false}
                  autoplay={{
                    delay: 500,
                  }}
                  modules={[Autoplay]}
                  slidesPerView={'auto'}
                  spaceBetween={30}
                  grabCursor={true}
                  className="w-full overflow-hidden"
                >
                  {data.speakers.length !== 0
                    ? data.speakers.map((podcast) => (
                        <SwiperSlide key={podcast.id}>
                          <Podcast podcast={podcast} />
                        </SwiperSlide>
                      ))
                    : 'loading...'}
                </Swiper>
              </div>
              <div className="mt-[208px] py-[45px] px-4 flex items-center flex-col sm:flex-row justify-between border border-t-grey-color border-b-grey-color">
                <p className="text-[23px] font-bold  ">Supported by:</p>
                <div className="flex items-center flex-col lg:flex-row justify-between pt-12 sm:pt-0 gap-12 md:gap-24 lg:gap-[132px]">
                  <a href="">
                    <img className="w-[128px]" src={spotifyImage} alt="" />
                  </a>
                  <a href="">
                    <img
                      className="w-[198px]"
                      src={googlePodcastImage}
                      alt=""
                    />
                  </a>
                  <a href="">
                    <img className="w-[132px]" src={youTubeImage} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        }
      </HeroSection>
      <Inspire />
      <Reviews />
      <Memberships />
      <Episodes />
      <Sponsors />
      <Articles />
    </>
  );
}

export default Main;
