import { LineChart } from "@mui/x-charts/LineChart";
import type { MonthlyAverage } from "../../../utils/getMonthlyAverageTemps";

interface Props {
 data: MonthlyAverage[];
}

function MonthlyTemperatureChart({ data }: Props) {
 const temps = data.map((data) => data.averageTemp);
 const months = data.map((data) => data.monthName);

 return (
  <div className="w-full bg-transparent h-full">
   <svg width="0" height="0">
    <defs>
     <linearGradient id="tempGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#4CDFE8" />
      <stop offset="100%" stopColor="#7947F7" />
     </linearGradient>
    </defs>
   </svg>

   <LineChart
    xAxis={[
     {
      data: months,
      scaleType: "point",
      tickLabelStyle: { fontSize: 12, fill: "#000" },
      disableLine: true,
     },
    ]}
    yAxis={[
     {
      min: Math.min(...temps) - 3,
      max: Math.max(...temps) + 2,
      labelStyle: { fontSize: 12, fill: "#000" },
      tickLabelStyle: {
       fontSize: 12,
       fill: "#000",
      },
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
 );
}

export default MonthlyTemperatureChart;
