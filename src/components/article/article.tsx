import React from 'react';
import { ArticlePropsType } from '../../types/articleType';
import { useNavigate } from 'react-router-dom';

const Article: React.FC<{ post: ArticlePropsType }> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/blog/${post.id}`)} className="article1 relative w-full h-full ">
      <div className="article__content "></div>

      <div
        className="article w-full h-full relative z-[10] md:p-4 border-black border-2 cursor-pointer rounded-[12px] bg-white p-0 flex flex-col"
        key={post.id}
      >
        <div className="flex h-full w-full gap-0 flex-col items-center justify-center ">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <img
              className=" w-full md:h-[320px] lg:h-[360px] h-full object-cover"
              src={post.imgUrl}
              alt=""
            />
          </div>
          <div className="w-full h-full p-6 flex items-start justify-center flex-1 flex-col">
            <p className="title pt-10">
              <span className="text-[14px] text-grey-color">{post.type}</span>
              <p className="text-[37px] font-bold">{post.title}</p>
            </p>
            <hr className="mt-[15px] mb-[10px] " />
            <p className="text-[14px] text-grey-color "> {post.subtitle}</p>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between p-6 gap-2">
          <div className="flex gap-1 flex-wrap">
            {post.tag.map((tag: string) => (
              <span
                key={post.id}
                className=" text-[12px] px-[12px] whitespace-nowrap py-[6px] border border-grey-color rounded-md "
              >
                {tag}
              </span>
            ))}
          </div>
          <p className=" whitespace-nowrap text-[12px] ">{post.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
