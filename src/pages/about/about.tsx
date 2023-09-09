import { Button } from '../../components/button/button';
import { HeroSection } from '../../components/heroSection/heroSection';
import AboutSponsors from './about-sponsors/about-sponsors';
import AboutForm from './form/about-form';
import ListenerSays from './listener-says/listener-says';
import Members from './membersContent/members';

const About = () => {
  return (
    <>
      <div className="w-full bg-champagne-color pb-[140px]">
        <div className="container">
          <HeroSection>
            {
              <div className="w-full">
                <div className="relative pt-[47px] pb-[140px]">
                  <div className="flex items-center flex-col justify-center text-center">
                    <h1 className="font-bold text-black text-[48px] lg:text-[96px] md:text-[76px] sm:text-[64px] leading-none">
                      About
                      <br />{' '}
                      <span className="text-orange-color">Pod of Cast</span>
                    </h1>
                    <p className="text-grey-color mt-[40px] max-w-[374px]">
                      We cover all kinds of categories and a weekly special
                      guest.
                    </p>
                    <div className="flex flex-col justify-center pt-16 items-center md:flex-row w-full gap-5">
                      <Button
                        text="BECOME SPONSOR"
                        classes="md:mt-[60px] hidden md:inline-block px-[36px] py-[20px] hover:bg-black hover:text-white"
                      />
                      <Button
                        text="Subscribe"
                        classes="md:mt-[60px] px-[36px] py-[20px] bg-black text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            }
          </HeroSection>
        </div>
      </div>
      <Members />
      <ListenerSays />
      <hr />
      <AboutSponsors />
      <AboutForm />
    </>
  );
};

export default About;
