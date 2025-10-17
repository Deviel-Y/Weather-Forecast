import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props {
 weatherFigure: string;
 weatherSituation: string;
 feelsLike: number;
}

const CurrentWeatherSituaion = ({
 weatherFigure,
 feelsLike,
 weatherSituation,
}: Props) => {
 const { t } = useTranslation();
 const {
  palette: {
   mode,
   customeBackground: { textDark, textLight },
  },
 } = useTheme();

 return (
  <Box
   sx={{ color: mode === "dark" ? textDark : textLight }}
   className="flex flex-col gap-2 text-[#003464]"
  >
   <div className="justify-self-center w-[155px] h-[115px]">
    <img
     className="object-contain w-full h-full"
     src={weatherFigure}
     alt="Weather Figure"
    />
   </div>

   <div>
    <p className="text-[32px]">{t(weatherSituation)}</p>

    <p className="flex ltr:font-sans flex-row rtl:flex-row-reverse gap-1">
     <span>{t("feelsLike")}</span> <span>{feelsLike}</span>
    </p>
   </div>
  </Box>
 );
};

export default CurrentWeatherSituaion;
