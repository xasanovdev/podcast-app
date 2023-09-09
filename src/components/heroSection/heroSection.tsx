import leftImage from '../../../public/svgs/hero/hero-left.svg';
import rightImage from '../../../public/svgs/hero/hero-right.svg';

export const HeroSection: React.FC<HeroSectionPropsType> = ({ children }) => {
  return (
    <div className='-z-50'>
      <div className="absolute left-0 mt-[200px] md:mt-[70px]">
        <img
          className="w-[50%] lg:w-[100%] md:w-[80%] "
          src={leftImage}
          alt=""
        />
      </div>
      <div className="absolute right-0 mt-[305px] sm:mt-[200px]">
        <img className="w-[80%] sm:w-[100%] " src={rightImage} alt="" />
      </div>
      {children}
    </div>
  );
};

interface HeroSectionPropsType {
  children: React.ReactNode;
}
