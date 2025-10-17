import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import useLanguageStore from "../../../useLanguageStore";

interface Props {
 date: string;
 figure: string;
 temperature: number;
}

const SingleWeatherCard = ({ date, figure, temperature }: Props) => {
 const { t } = useTranslation();
 const dir = useLanguageStore((s) => s.dir);
 const {
  palette: {
   mode,
   customeBackground: {
    weeklyWeatherCardLight,
    weeklyWeatherCardDark,
    textDark,
    textLight,
   },
  },
 } = useTheme();

 return (
  <Box
   sx={{
    background:
     mode === "light" ? weeklyWeatherCardLight : weeklyWeatherCardDark,
    color: mode === "light" ? textLight : textDark,
   }}
   dir={dir}
   className="rounded-3xl pt-11 px-4 w-[104px] h-[266px]"
  >
   <div className="flex flex-col gap-[26px] ">
    <div className="flex flex-col gap-4 justify-between items-center">
     <p className="font-[500] text-sm ">{t(date)}</p>
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

    <p className="font-[500] text-lg text-center flex flex-row rtl:flex-row-reverse items-center justify-center gap-1">
     <span>{temperature}</span>
     <span>&#8451;</span>
    </p>
   </div>
  </Box>
 );
};

export default SingleWeatherCard;
