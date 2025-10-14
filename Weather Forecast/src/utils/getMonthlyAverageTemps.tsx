type WeatherDataType = {
  data: {
    time: string[];
    temperature_2m_mean: number[];
  };
};

type MonthlyAverage = {
  monthName: string;
  averageTemp: number;
};

export const getMonthlyAverageTemps = (
  weatherData: WeatherDataType
): MonthlyAverage[] => {
  const monthlyMapping = new Map<number, number[]>();

  weatherData.data.time.forEach((timeData, index) => {
    const monthName = new Date(timeData).getMonth();
    const temperature = weatherData.data.temperature_2m_mean[index];

    if (!monthlyMapping.has(monthName)) monthlyMapping.set(monthName, []);
    monthlyMapping.get(monthName)?.push(temperature);
  });

  return Array.from(monthlyMapping).map(([monthIndex, temperature]) => {
    const averageTemp =
      temperature.reduce((acc, sum) => acc + sum, 0) / temperature.length || 1;

    return {
      monthName: monthNames[monthIndex],
      averageTemp: parseFloat(averageTemp.toFixed(1)),
    };
  });
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
