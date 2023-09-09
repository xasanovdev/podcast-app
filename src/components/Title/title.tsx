import { TitlePropsType } from '../../types/titleType';

function Title({ text, subtitle }: TitlePropsType) {
  return (
    <div className="flex items-center justify-center flex-col w-full gap-5">
      <h1 className="w-full text-black text-[36px] md:text-[54px] lg:text-[60px]  font-bold leading-none text-center">
        {text}
      </h1>

      <p className="text-sm text-grey-color sm:text-[23px]">{subtitle}</p>
    </div>
  );
}

export default Title;
