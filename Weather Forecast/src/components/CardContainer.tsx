import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center px-6 pt-5 pb-[17px] bg-[#E1E9EE] rounded-3xl shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]">
      {children}
    </div>
  );
};

export default CardContainer;
