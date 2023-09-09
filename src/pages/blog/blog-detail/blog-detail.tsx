import { useNavigate, useParams } from 'react-router-dom';
import { HeroSection } from '../../../components/heroSection/heroSection';
import data from '../../../../db';
import { Icon } from '@iconify/react/dist/iconify.js';
import Articles from '../../../components/articles/articles';


const BlogDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const blogDetailData = data.posts.filter((post) => {
    const paramId = params.id ? Number(params.id) : undefined;
    return typeof paramId === 'number' && post.id === paramId;
  });

  const blogDetail = blogDetailData[0];

  return (
    <>
      <div className="w-full bg-champagne-color">
        <div className="container">
          <HeroSection>
            <div key={blogDetail.id} className="w-full">
              <div className="relative pt-6 sm:pt-12 md:pt-[80px] pb-[140px]">
                <div className="flex items-center flex-col justify-center text-center">
                  <div className="w-full flex justify-between text-sm text-grey-color">
                    <a
                      className="inline-flex items-center cursor-pointer hover:text-orange-color"
                      onClick={() => navigate(-1)}
                    >
                      <Icon icon="icon-park-outline:left" />
                      <span>Back to articles</span>
                    </a>
                    <p>{blogDetail.date}</p>
                  </div>
                  <div className="flex mt-12 items-center justify-center gap-[0.625rem] flex-col">
                    <p className="text-center text-sm text-orange-color font-bold">
                      {blogDetail.type}
                    </p>
                    <h1 className="font-bold text-black text-[32px] lg:text-[60px] md:text-[46px] sm:text-[40px] leading-none">
                      {blogDetail.title}
                    </h1>
                  </div>
                  <div className="flex gap-1 flex-wrap mt-10">
                    {blogDetail.tag.map((item: string) => (
                      <span
                        key={blogDetail.id}
                        className=" text-[12px] px-[12px] text-grey-color whitespace-nowrap py-[6px] border border-grey-color rounded-md "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
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
            </div>
          </HeroSection>
        </div>
      </div>
      <div className="w-full h-full bg-champagne-color">
        <img
          className="w-full max-h-[960px] object-cover"
          src={blogDetail.imgUrl}
          alt=""
        />
        <Articles />
      </div>
    </>
  );
};

export default BlogDetail;
