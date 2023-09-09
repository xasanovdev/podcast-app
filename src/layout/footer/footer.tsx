import Title from '../../components/Title/title';
import { Button } from '../../components/button/button';

import googlePodcastImage from '../../../public/svgs/social/googlePodcast.svg';
import spotifyImage from '../../../public/svgs/social/spotify.svg';
import youTubeImage from '../../../public/svgs/social/youTube.svg';
import footerRight from '../../../public/svgs/footer/Home (1).png';
import footerRightMin from '../../../public/svgs/footer/Home.png';
import footerLeftMin from '../../../public/svgs/footer/play.png';
import footerLeft from '../../../public/svgs/footer/play (1).png';
import logo from '../../../public/svgs/hero/logo.svg';
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);

  return (
    <>
      <div className="w-full bg-[#EDF3F7]  ">
        <div className="w-full overflow-hidden py-[50px] md:py-[140px]">
          <div className="container relative flex items-center justify-center flex-col text-center max-w-[1600px]">
            <p className="uppercase text-orange-color font-bold text-[14px] border border-orange-color rounded-lg px-[6px] py-[2px]">
              beta
            </p>
            <div className="max-w-[516px] mt-[23px]">
              <Title
                text="Available now Pod of Cast App"
                subtitle="We just launched our podcast app!"
              />
            </div>
            <Button
              text="download now"
              classes="bg-black text-white mt-[140px] py-[20px] px-[36px]"
            />
            <div>
              <p className="text-[14px] text-grey-color mt-[24px]">
                Content also available on:
              </p>
              <div className="flex items-center justify-center text-[24px] [&>a:hover]:text-orange-color mt-[10px] gap-[20px]">
                <a href="">
                  <Icon icon="mdi:google-podcast" />
                </a>
                <a href="">
                  <Icon icon="mdi:spotify" />
                </a>
                <a href="">
                  <Icon icon="mdi:youtube" />
                </a>
              </div>
            </div>

            <div className="absolute top-[250px] hidden sm:inline-block -left-24 lg:-left-36 sm:-left-24 md:-left-12">
              <picture>
                <source media="(max-width: 1024px)" srcSet={footerRightMin} />
                <source media="(min-width: 1024px)" srcSet={footerRight} />
                <img
                  src={footerRight}
                  alt="Chris standing up holding his daughter Elva"
                />
              </picture>
            </div>
            <div className="footer__hero absolute hidden sm:inline-block -top-[60px] xl:mt-0 lg:mt-[200px] mt-[300px] md:-right-24 lg:-right-96 -right-48 bottom-0">
              <picture>
                <source media="(max-width: 1024px)" srcSet={footerLeftMin} />
                <source media="(min-width: 1024px)" srcSet={footerLeft} />
                <img
                  src={footerLeft}
                  alt="Chris standing up holding his daughter Elva"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className="container relative w-full flex flex-col md:flex-row md:gap-16 justify-between md:py-[140px] py-[50px] border-none border-b-violet-50">
        <div className="">
          <div>
            <Link className="flex items-end gap-6" to="">
              <img src={logo} alt="" />
              <p className="text-grey-color text-sm">2021</p>
            </Link>
            <p className="text-grey-color text-base mt-11">
              Available now Pod of Cast App
            </p>
            <div className="flex items-center gap-6 mt-10 text-[24px] [&>a:hover]:text-orange-color">
              <a href="">
                <Icon icon="mdi:twitter" />
              </a>
              <a href="">
                <Icon icon="mdi:instagram" />
              </a>
              <a href="">
                <Icon icon="ic:baseline-tiktok" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between md:gap-24">
          <div className="flex gap-[93px] lg:gap-16 md:py-0 py-12">
            {path === '/' ? (
              <>
                <div className="flex flex-col items-start gap-5 [&>a:hover]:text-orange-color  ">
                  <Link to="/about">About</Link>
                  <a href="#testimonials">Testimonials</a>
                  <Link to="">Features</Link>
                </div>
                <div className="flex flex-col items-start gap-5">
                  <a href="#recent-episodes">Episodes</a>
                  <a href="#sponsors">Pricing</a>
                  <Link to="/blog">Blog</Link>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-start gap-5 [&>a:hover]:text-orange-color">
                  <Link to="/about">About</Link>
                  <Link to="/#testimonials">Testimonials</Link>
                  <Link to="">Features</Link>
                </div>
                <div className="flex flex-col items-start gap-5">
                  <Link to="/#recent-episodes">Episodes</Link>
                  <Link to="/#sponsors">Pricing</Link>
                  <Link to="/blog">Blog</Link>
                </div>
              </>
            )}
          </div>
          <div className="flex flex-col">
            <p className="text-grey-color text-base">
              Listen to episodes on your fav platform:
            </p>
            <div className="flex items-center mt-[29px] justify-between">
              <a href="">
                <img src={googlePodcastImage} alt="" />
              </a>
              <a href="">
                <img src={spotifyImage} alt="" />
              </a>
              <a href="">
                <img src={youTubeImage} alt="" />
              </a>
            </div>
            <p className="text-grey-color text-base mt-[60px]">
              App available on:
            </p>
            <div className=" mt-5 flex items-center gap-5 ">
              <a href="">
                <Icon icon="logos:apple-app-store" />
              </a>
              <a href="">
                <Icon icon="logos:google-play-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-5 pb-20 border border-t-slate-200">
        <div className="container">
          <div className="flex justify-between">
            <p className="text-grey-color text-sm">
              2022.All Rights Reserved.{' '}
              <span className="text-orange-color">Pod of Cast</span>
            </p>
            <p>Terms Privacy</p>
          </div>
        </div>
      </div>
    </>
  );
}
