interface TempratureProps {
  currentTemp: number;
  highTemp: number;
  lowTemp: number;
}

const CurrentTempratureStatus = ({
  currentTemp,
  highTemp,
  lowTemp,
}: TempratureProps) => {
  return (
    <div className="flex flex-col text-[#003464]">
      <p className="font-[500] text-[40px]">{currentTemp}&#8451;</p>

      <div className="flex flex-row gap-x-1 font-sans text-sm -mt-2">
        <p>High: {highTemp}</p>

        <p>Low: {lowTemp}</p>
      </div>
    </div>
  );
};

export default CurrentTempratureStatus;
