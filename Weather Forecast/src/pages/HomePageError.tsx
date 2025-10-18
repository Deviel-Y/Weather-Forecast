import { isRouteErrorResponse, useRouteError } from "react-router";

const HomePageError = () => {
 const error = useRouteError();

 return (
  <div>
   <h1>Opps...</h1>

   <p>
    {isRouteErrorResponse(error) ? "404 Invalid Page" : "Unexpected Error"}
   </p>
  </div>
 );
};

export default HomePageError;
