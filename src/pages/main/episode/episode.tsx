import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { EpisodePropsType } from '../../../types/episodeType';

const Episode: React.FC<{ episode: EpisodePropsType }> = ({ episode }) => {
  return (
    <div key={episode.id} className="episode1 relative w-full h-full">
      <div className="episode__content "></div>

      <div className="episode w-full h-full relative z-[10] border-black border-2 cursor-pointer rounded-[12px] bg-white p-0 lg:p-4 flex flex-col">
        <div className="flex h-full w-full lg:gap-5 gap-0 lg:flex-row flex-col items-center justify-center ">
          <div className="flex w-full md:w-auto h-full justify-between flex-col">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full lg:w-[166px] object-cover"
                src={episode.imgUrl}
                alt=""
              />
              <div className="right-0 top-0 flex absolute items-center gap-[6px] text-white [&>a:hover]:text-orange-color p-[10px] text-[12px] ">
                <a href={episode.socials.googlePodcast}>
                  <Icon icon="mdi:google-podcast" />
                </a>
                <a href={episode.socials.spotify}>
                  <Icon icon="mdi:spotify" />
                </a>
                <a href={episode.socials.youtube}>
                  <Icon icon="mdi:youtube" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-full p-8 lg:p-0 flex items-start justify-center flex-1 flex-col">
            <p className="title">
              <span className="text-[16px] font-bold ">Eps.{episode.id}</span>
              <p className="text-[23px] font-bold">{episode.title}</p>
            </p>
            <hr className="mt-[15px] mb-[10px] " />
            <p className="text-sm text-grey-color "> {episode.text}</p>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-[6px] px-8 py-4 lg:px-0 ">
          {episode.tags.map((tag: string,index) => (
            <span key={index} className=" text-[12px] px-[12px] whitespace-nowrap py-[6px] border border-grey-color rounded-md ">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Episode;
