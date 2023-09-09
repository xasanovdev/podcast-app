import { Icon } from '@iconify/react/dist/iconify.js';

const Founder: React.FC<{ founder: FounderPropsType }> = ({ founder }) => {
  return (
    <div className="founder1 relative bg-white flex-1 flex rounded-lg">
      <div className="founder__content"></div>
      <div className='absolute top-2 right-0 hidden md:inline-block'>
        <img className='w-[80%]' src={founder.iconUrl} alt="" />
      </div>
      <div className=" grid flex-1 grid-cols-1 md:grid-cols-2 gap-5 border border-black items-end rounded-lg overflow-hidden p-4">
        <div className="w-full h-full relative md:-left-[15%]">
          <img
            className="rounded-lg w-full h-full object-cover"
            height={488}
            width={520}
            src={founder.imgUrl}
            alt=""
          />
        </div>
        <div className="relative md:-left-[15%]">
          <p className="">Host {founder.id}</p>
          <h3 className="text-[37px] font-bold">{founder.name}</h3>
          <p className="text-sm text-grey-color py-5">{founder.title}</p>
          <hr />
          <div className="flex items-center justify-end gap-x-5 pt-5">
            <span className="text-[12sm] text-grey-colo ">follow me:</span>
            <span className="flex items-center gap-x-[10px]">
              <a href="">
                <Icon icon="logos:tiktok-icon" />
              </a>
              <a href="">
                <Icon icon="devicon:twitter" />
              </a>
              <a href="">
                <Icon icon="skill-icons:instagram" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface FounderPropsType {
  id: string;
  name: string;
  title: string;
  imgUrl: string;
  iconUrl: string;
  socials: {
    googlePodcast?: string;
    spotify?: string;
    youTube?: string;
  };
}

export default Founder;
