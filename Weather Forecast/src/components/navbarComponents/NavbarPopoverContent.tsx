import { Button, ButtonGroup, Divider } from "@mui/material";
import { LiaSun } from "react-icons/lia";
import { HiOutlineMoon } from "react-icons/hi2";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router";

const NavbarPopoverContent = () => {
  const navigate = useNavigate();

  return (
    <div className="w-56 h-60 rounded-lg px-4 py-3">
      <div className="flex flex-col items-stretch gap-3 w-full">
        <div className="flex flex-col items-start gap-1.5">
          <p className="font-[400]">Mode</p>

          <ButtonGroup variant="outlined" size="small" fullWidth>
            <Button
              startIcon={<LiaSun />}
              className="!border-gray-400 !text-gray-400"
            >
              Light
            </Button>
            <Button
              startIcon={<HiOutlineMoon size={15} />}
              className="!border-gray-400 !text-gray-400"
            >
              dark
            </Button>
          </ButtonGroup>
        </div>

        <Divider className="mt-1" />

        <div className="flex flex-col items-start gap-1.5">
          <p className="font-[400]">Language</p>

          <ButtonGroup variant="outlined" size="small" fullWidth>
            <Button className="!border-gray-400 !text-gray-400">EN</Button>
            <Button className="!border-gray-400 !text-gray-400">Fa</Button>
          </ButtonGroup>
        </div>

        <Divider className="mt-1" />

        <Button
          onClick={() => {
            localStorage.removeItem("name");
            navigate("/login");
          }}
          variant="text"
          className="!text-black self-start hover:!bg-transparent !mt-2.5"
          startIcon={<RxExit size={20} />}
        >
          Exit
        </Button>
      </div>
    </div>
  );
};

export default NavbarPopoverContent;
