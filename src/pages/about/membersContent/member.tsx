import React from 'react'
import { MemberPropsType } from '../../../types/memberType'

const Member:React.FC<{member:MemberPropsType}> = ({member}) => {
  return (
    <div className="member1 w-full h-full relative flex-1">
      <div className="member__content"></div>
      <div
        className="member w-full h-full flex z-50 flex-col space-x-5 flex-1 bg-white rounded-md border border-black py-[3.75rem] px-[5.875rem] text-center "
        key={member.id}
      >
        <p className=" whitespace-nowrap text-black text-[60px] font-bold">
          {' '}
          <span className="text-orange-color">{member.count}</span> K
        </p>
        <p className="text-md text-grey-color">{member.title}</p>
      </div>
    </div>
  );
}

export default Member