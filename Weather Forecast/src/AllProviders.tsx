import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode, useMemo, type ReactNode } from "react";
import { prefixer } from "stylis";
import useLanguageStore from "./useLanguageStore";

interface Props {
 children: ReactNode;
}

const AllProviders = ({ children }: Props) => {
 const queryClient = new QueryClient();
 const currentDir = useLanguageStore((s) => s.dir);

 const theme = useMemo(
  () =>
   createTheme({
    direction: currentDir,
    palette: { primary: { main: "#2196F3" } },
   }),
  [currentDir]
 );

 const rtlCache = useMemo(() => {
  return createCache({
   key: "muirtl",
   stylisPlugins: [prefixer, rtlPlugin],
  });
 }, [currentDir]);

 const ltrCache = useMemo(() => {
  return createCache({
   key: "mui",
  });
 }, [currentDir]);

 return (
  <StrictMode>
   <QueryClientProvider client={queryClient}>
    <CacheProvider value={currentDir === "rtl" ? rtlCache : ltrCache}>
     <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
   </QueryClientProvider>
  </StrictMode>
 );
};

export default AllProviders;
