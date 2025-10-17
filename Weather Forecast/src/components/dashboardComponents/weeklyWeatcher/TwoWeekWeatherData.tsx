import { Typography, useTheme } from "@mui/material";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useLanguageStore from "../../../useLanguageStore";
import type { WeeklyDataOutput } from "../../../utils/getWeeklyWeatherData";
import {
 weatherCodeMapping,
 type WeatherCodeType,
} from "../../../utils/weatherCodeMapping";
import CardContainer from "../../CardContainer";
import SingleWeatherCard from "./SingleWeatherCard";

interface Props {
 weeklyWeatherData: WeeklyDataOutput;
}

const TwoWeekWeatherData = ({ weeklyWeatherData }: Props) => {
 const dir = useLanguageStore((s) => s.dir);

 const {
  palette: {
   mode,
   customeBackground: { textDark, textLight },
  },
 } = useTheme();

 const constraintsRef = useRef<HTMLDivElement>(null);
 const [dragWidth, setDragWidth] = useState(0);
 const scrollRef = useRef<HTMLDivElement>(null);

 const { t } = useTranslation();

 useEffect(() => {
  if (!scrollRef.current) return;

  const updateDragWidth = () => {
   const scrollWidth = scrollRef.current!.scrollWidth;
   const offsetWidth = scrollRef.current!.offsetWidth;
   setDragWidth(scrollWidth - offsetWidth);
  };

  requestAnimationFrame(updateDragWidth);
 }, [weeklyWeatherData]);

 return (
  <CardContainer
   dir={dir}
   additionalStyles="flex overflow-hidden select-none no-scrollbar flex-col px-[28px] pb-[26px] pt-[30px] max-sm:p-5 gap-5 items-center justify-center"
  >
   <Typography
    sx={{ color: mode === "dark" ? textDark : textLight }}
    className="!font-bold font-sans self-start !text-2xl "
   >
    {t("twoWeekForecast")}
   </Typography>

   <motion.div
    key={dir}
    dir={dir}
    className="w-full overflow-hidden"
    ref={constraintsRef}
   >
    <motion.div
     ref={scrollRef}
     drag="x"
     dragConstraints={{
      left: dir === "rtl" ? 0 : -dragWidth,
      right: dir === "rtl" ? dragWidth : 0,
     }}
     dragElastic={0.2}
     className="
              flex flex-row justify-start gap-[18px]
              w-full snap-x snap-mandatory
              cursor-grab active:cursor-grabbing select-none
            "
    >
     {weeklyWeatherData.map((weatherData, index) => (
      <div key={index} className="snap-start shrink-0">
       <SingleWeatherCard
        date={index === 0 ? "today" : weatherData.date}
        figure={
         weatherCodeMapping[weatherData.weatherCode as WeatherCodeType]?.figure
        }
        temperature={weatherData.averageTemp}
       />
      </div>
     ))}
    </motion.div>
   </motion.div>
  </CardContainer>
 );
};

export default TwoWeekWeatherData;
