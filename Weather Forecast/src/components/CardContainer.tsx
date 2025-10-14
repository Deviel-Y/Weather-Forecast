import type { ReactNode } from "react";

interface Props {
 children: ReactNode;
 additionalStyles?: string;
}

const CardContainer = ({ children, additionalStyles }: Props) => {
 return (
  <div className={`${additionalStyles} bg-[#E1E9EE] rounded-3xl`}>
   {children}
  </div>
 );
};

export default CardContainer;
