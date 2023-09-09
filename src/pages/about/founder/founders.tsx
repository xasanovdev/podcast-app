import data from '../../../../db';
import Founder from './founder';

const Founders = () => {
  return (
    <div className="container pt-[6.25rem]">
      <h1 className="text-[37px] font-bold text-center ">
        Founder and Main Host
      </h1>
      <div className='pt-20 flex flex-col lg:flex-row gap-5'>
        {
          data.founders.map((founder) => {
            return (
              <Founder key={founder.id} founder={founder}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default Founders