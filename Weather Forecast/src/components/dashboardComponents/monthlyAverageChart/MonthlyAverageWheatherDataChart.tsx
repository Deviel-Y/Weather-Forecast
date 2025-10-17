import { LineChart } from "@mui/x-charts/LineChart";
import { useTranslation } from "react-i18next";
import useLanguageStore from "../../../useLanguageStore";
import type { MonthlyAverage } from "../../../utils/getMonthlyAverageTemps";
import CardContainer from "../../CardContainer";

interface Props {
 data: MonthlyAverage[];
}

function MonthlyTemperatureChart({ data }: Props) {
 const dir = useLanguageStore((s) => s.dir);

 const temps =
  dir === "ltr"
   ? data.map((data) => data.averageTemp)
   : data.map((data) => data.averageTemp).reverse();

 const months =
  dir === "ltr"
   ? data.map((data) => data.monthName)
   : data.map((data) => data.monthName).reverse();

 const { t } = useTranslation();

 return (
  <CardContainer additionalStyles="flex flex-col gap-1 col-span-7 p-4 max-sm:p-5 w-full ps-8 rtl:ps-5 max-sm:p-1">
   <div className="w-full bg-transparent h-full">
    <p className="!font-bold !text-lg">{t("averageMonthlyTemp")}</p>

    <svg width="0" height="0">
     <defs>
      <linearGradient id="tempGradient" x1="0" y1="0" x2="1" y2="0">
       <stop offset="0%" stopColor="#4CDFE8" />
       <stop offset="100%" stopColor="#7947F7" />
      </linearGradient>
     </defs>
    </svg>

    <LineChart
     direction={dir}
     xAxis={[
      {
       data: months,
       disableTicks: true,
       scaleType: "point",
       disableLine: true,
       offset: 10,
       labelStyle: {
        fontSize: 12,
        fill: "#000",
       },
      },
     ]}
     yAxis={[
      {
       min: Math.min(...temps) - 3,
       max: Math.max(...temps) + 2,
       tickLabelStyle: {
        fontFamily:
         dir === "rtl"
          ? "var(--font-iran-yekan-reg)"
          : "Roboto, Arial, sans-serif",
       },
       position: dir === "rtl" ? "right" : "left",
       disableTicks: true,
       disableLine: true,
       valueFormatter: (value: number) => `${value}°C`,
       offset: 30,
      },
     ]}
     series={[
      {
       data: temps,
       area: true,
       color: "url(#tempGradient)",
       curve: "linear",
       showMark: false,
      },
     ]}
     grid={{
      horizontal: true,
      vertical: false,
     }}
     sx={{
      "& .MuiLineElement-root": { strokeWidth: 3 },
      "& .MuiAreaElement-root": { fillOpacity: 0.05 },
      "& .MuiChartsGrid-line": {
       strokeDasharray: "5 5",
       stroke: "#999",
       opacity: 0.4,
      },
     }}
     height={170}
    />
   </div>
  </CardContainer>
 );
}

export default MonthlyTemperatureChart;
