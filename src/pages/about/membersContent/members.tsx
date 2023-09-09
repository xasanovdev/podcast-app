import data from "../../../../db"
import Member from "./member"

const Members = () => {
  return (
    <div className="w-full">
      <div className="container -mt-[140px]">
        <div className="flex flex-col lg:flex-row gap-5 z-50">
          {data.members.map((member) => {
            return <Member key={member.id} member={member} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Members