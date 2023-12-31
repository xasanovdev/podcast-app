import React from 'react'

const Membership = ({membership}) => {
  return (
    <div className='flex flex-col items-center justify-center p-5 hover:shadow-xl rounded-[24px]'>
      <img src={membership.imgUrl} alt="" />
      <h2 className='mt-5 text-[23px] font-bold '>{membership.title}</h2>
      <p className='mt-1 leading-loose text-center'>{membership.text}</p>
    </div>
  );
}

export default Membership