import { HeroSection } from '../../components/heroSection/heroSection';
import Posts from './posts/posts';

const Blog = () => {
  return (
    <>
      <div className="w-full bg-champagne-color pb-[140px]">
        <div className="container">
          <HeroSection>
            {
              <div className="w-full">
                <div className="relative pt-[47px]">
                  <div className="flex items-center flex-col justify-center text-center">
                    <h1 className="font-bold text-black text-[48px] lg:text-[96px] md:text-[76px] sm:text-[64px] leading-none">
                      Article and
                      <br /> <span className="text-orange-color">News</span>
                    </h1>
                    <p className="text-grey-color mt-[40px] max-w-[374px]">
                      We cover all kinds of categories and a weekly special
                      guest.
                    </p>
                  </div>
                </div>
              </div>
            }
          </HeroSection>
        </div>
      </div>
      <Posts />
    </>
  );
};

export default Blog;
