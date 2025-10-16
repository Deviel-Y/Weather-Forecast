import type { ReactNode } from "react";
import type { DirType } from "../useLanguageStore";

interface Props {
 children: ReactNode;
 additionalStyles?: string;
 dir?: DirType;
}

const CardContainer = ({ children, additionalStyles, dir }: Props) => {
 return (
  <div dir={dir} className={`${additionalStyles} bg-[#E1E9EE] rounded-3xl`}>
   {children}
  </div>
 );
};

export default CardContainer;
