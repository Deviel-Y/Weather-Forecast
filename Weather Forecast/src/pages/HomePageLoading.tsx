import { Skeleton } from "@mui/material";

const HomePageLoading = () => {
 return (
  <div className="p-5 w-full flex flex-col gap-5">
   <div className="flex flex-row gap-10 w-full">
    <Skeleton
     className="flex-1 rounded-xl"
     variant="rounded"
     animation="wave"
     height={250}
    />
    <Skeleton
     className="flex-1"
     variant="rounded"
     animation="wave"
     height={250}
    />
   </div>

   <Skeleton animation="wave" variant="rounded" height={500} />
  </div>
 );
};

export default HomePageLoading;
