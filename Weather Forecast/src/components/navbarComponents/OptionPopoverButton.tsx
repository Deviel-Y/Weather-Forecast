import { IconButton, Popover } from "@mui/material";
import { useState, type ReactNode } from "react";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import useLanguageStore from "../../useLanguageStore";

interface Props {
 children: ReactNode;
}

const OptionPopoverButton = ({ children }: Props) => {
 const dir = useLanguageStore((s) => s.dir);
 const [buttonElement, setButtonElement] = useState<HTMLButtonElement | null>(
  null
 );

 const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
  setButtonElement(event?.currentTarget);
 };

 const handlePopoverClose = () => {
  setButtonElement(null);
 };

 const id = !!buttonElement ? "simple-popover" : undefined;

 return (
  <>
   <IconButton
    className="!border-[1px] !rounded-[8px] !border-[#BBC1C4]"
    aria-describedby={id}
    onClick={handlePopoverOpen}
   >
    <HiOutlineCog6Tooth />
   </IconButton>
   <Popover
    dir={dir}
    open={!!buttonElement}
    id={id}
    onClose={handlePopoverClose}
    anchorEl={buttonElement}
    anchorOrigin={{
     vertical: "bottom",
     horizontal: "center",
    }}
    transformOrigin={{
     vertical: "top",
     horizontal: "center",
    }}
   >
    {children}
   </Popover>
  </>
 );
};

export default OptionPopoverButton;
