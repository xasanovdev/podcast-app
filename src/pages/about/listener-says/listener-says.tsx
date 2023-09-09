import Title from '../../../components/Title/title';
import Founders from '../founder/founders';

const ListenerSays = () => {
  return (
    <div id='testimonials' className="container pt-5 pb-[140px]">
      <Title
        text="What our listeners say"
        subtitle="Their experience throughout every platform"
      />
      <div className="w-full h-full pt-8 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="./about-images/img.png"
          alt=""
        />
      </div>
      <div className="py-[5rem] space-y-[5rem]">
        <h1 className="text-[37px] font-bold text-center ">
          About and History
        </h1>
        <div className="flex items-start flex-col md:flex-row [&>p]:text-grey-color [&>p]:leading-loose [&>p>b]:text-black justify-between gap-5">
          <p>
            This podcast <b>guide truly demystifies the process</b>. Highly
            recommended for anyone looking to dive into podcasting as a business
            venture. <br />
            I've <b>always enjoyed doodling</b>, but this post elevated my
            skills. The provided tips and tricks are simple to follow, and my
            artwork looks more professional now.
          </p>
          <p>
            I was clueless about podcasting, but this{' '}
            <b>post changed everything</b>. The step-by-step instructions were a
            lifesaver. <br />
            As someone with no formal art training, this post opened up a new
            world for me. The advice was practical, and I'm now confidently
            doodling my <b>way to creativity</b>.
          </p>
        </div>
      </div>
      <Founders />
    </div>
  );
};

export default ListenerSays;
