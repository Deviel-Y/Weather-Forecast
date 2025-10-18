import { Skeleton } from "@mui/material";
import useLanguageStore from "../useLanguageStore";

const HomePageLoading = () => {
 const lang = useLanguageStore((s) => s.currentLang);

 return (
  <div className="p-5 w-full flex flex-col gap-5">
   <div className="grid grid-cols-12 gap-8 w-full">
    <Skeleton
     className={`flex-1 !rounded-4xl ${
      lang === "fa" ? "!col-span-7" : "!col-span-5"
     } `}
     variant="rounded"
     animation="wave"
     height={250}
    />
    <Skeleton
     className={`flex-1 !rounded-4xl ${
      lang === "fa" ? "!col-span-5" : "!col-span-7"
     } `}
     variant="rounded"
     animation="wave"
     height={250}
    />
   </div>

   <Skeleton
    className="!rounded-4xl"
    animation="wave"
    variant="rounded"
    height={500}
   />
  </div>
 );
};

export default HomePageLoading;
