import { useTranslation } from "react-i18next";

interface Props {
 date: string;
 figure: string;
 temperature: number;
}

const SingleWeatherCard = ({ date, figure, temperature }: Props) => {
 const { t } = useTranslation();
 return (
  <div className="bg-[#CDD9E0] rounded-3xl pt-11 px-4 w-[104px] h-[266px]">
   <div className="flex flex-col gap-[26px] ">
    <div className="flex flex-col gap-4 justify-between items-center">
     <p className="font-[500] text-sm text-[#003464]">{t(date)}</p>
     <div className="w-[60px] h-[2px] rounded-full bg-gradient-to-r from-[#36363600] via-[#7E7E7E] to-[#36363600]" />
    </div>

    <div className="w-[72px] h-[72px] flex justify-center items-center">
     <img
      draggable={false}
      className="w-full h-full object-contain select-none"
      src={figure}
      alt="Weather figure"
     />
    </div>

    <p className="font-[500] text-lg text-center text-[#003464]">
     {temperature}&#8451;
    </p>
   </div>
  </div>
 );
};

export default SingleWeatherCard;
