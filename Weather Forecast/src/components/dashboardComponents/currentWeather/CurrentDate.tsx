import { getCurrentDate } from "../../../utils/getCurrentDate";

const CurrentDate = () => {
  const { date, time, weekday } = getCurrentDate();

  return (
    <div className="flex flex-col text-[#003464]">
      <p className="font-[500] text-[32px]">{weekday}</p>

      <div className="flex flex-row gap-x-5 font-sans text-sm">
        <p>{date}</p>

        <p>{time}</p>
      </div>
    </div>
  );
};

export default CurrentDate;
