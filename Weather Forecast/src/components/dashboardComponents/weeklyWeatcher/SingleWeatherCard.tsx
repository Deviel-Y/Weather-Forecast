interface Props {
  date: string;
  figure: string;
  temperature: number;
}

const SingleWeatherCard = ({ date, figure, temperature }: Props) => {
  return (
    <div className="bg-[#CDD9E0] rounded-3xl px-4 py-11 w-[104px]">
      <div className="flex flex-col gap-[26px] ">
        <div className="flex flex-col gap-4 justify-between items-center">
          <p className="font-[500] text-sm text-[#003464]">{date}</p>
          <div className="w-[60px] h-[2px] rounded-full bg-gradient-to-r from-[#36363600] via-[#7E7E7E] to-[#36363600]" />
        </div>

        <img
          className="object-contain w-[72px] h-[72]"
          src={figure}
          alt="Weather figure"
        />

        <p className="font-[500] text-lg text-center text-[#003464]">
          {temperature}&#8451;
        </p>
      </div>
    </div>
  );
};

export default SingleWeatherCard;
