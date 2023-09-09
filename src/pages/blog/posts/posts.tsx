import { Icon } from '@iconify/react/dist/iconify.js';
import data from '../../../../db';
import Title from '../../../components/Title/title';
import Article from '../../../components/article/article';
import React from 'react';

const filterValues = [
  'All',
  'Business',
  'News',
  'Tips & trick',
  'Podcast',
  'Productivity',
];

const Posts = () => {
  const [filterValue, setFilterValue] = React.useState<FilterValueType>('All');
  const [search, setSearch] = React.useState<string>('');

  const filteredPosts = data.posts.filter((post) =>
    filterValue === 'All'
      ? true
      : post.type.toLocaleLowerCase() === filterValue.toLocaleLowerCase()
  );

  return (
    <>
      <div className="container pb-[140px]">
        <div className="search-posts m-auto relative w-full -translate-y-10 max-w-[570px] flex">
          <div className="z-10 items-center border border-black rounded-[1rem] flex bg-white py-6 px-10 gap-6 w-full">
            <Icon className="text-[1.5rem]" icon="iconamoon:search-thin" />
            <input
              className="w-full text-[1rem] outline-none border-none"
              type="text"
              name="search-posts"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="pt-[140px]">
          <Title text="Latest Posts" subtitle="" />
        </div>

        <div className="w-full mt-20">
          <ul className="w-full flex md:justify-between gap-2 flex-wrap">
            {filterValues.map((filter) => {
              return (
                <li
                  onClick={() => setFilterValue(filter as FilterValueType)}
                  className={`text-[1.5rem] text-center p-3 border flex-1 whitespace-nowrap border-grey-color cursor-pointer ${
                    filterValue === filter
                      ? 'border-orange-color text-orange-color'
                      : ''
                  }`}
                >
                  {filter}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pt-[100px] grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-5">
          {filteredPosts.length > 0 ? (
            filteredPosts
              .filter((post) =>
                post.title
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              )
              .map((post) => {
                return (
                  <>
                    <Article key={post.id} post={post} />
                  </>
                );
              })
          ) : (
            <p className="text-center md:col-span-2 text-[2rem] font-bold">
              There are no posts on this topic yet
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export type FilterValueType =
  | 'All'
  | 'Business'
  | 'News'
  | 'Tips & trick'
  | 'Productivity'
  | 'Podcast';

export default Posts;
