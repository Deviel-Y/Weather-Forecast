import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode, useMemo, type ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { prefixer } from "stylis";
import useLanguageStore from "./useLanguageStore";
import useThemeStore from "./useThemeStore";

interface Props {
 children: ReactNode;
}

const AllProviders = ({ children }: Props) => {
 const queryClient = new QueryClient();
 const currentDir = useLanguageStore((s) => s.dir);
 const { mode } = useThemeStore();

 const lightTheme = createTheme({
  direction: currentDir,
  typography: {
   fontFamily: currentDir === "rtl" ? "IranYekanReg" : "OpenSans-Regular",
  },
  palette: {
   mode: "light",
   primary: { main: "#2196f3" },
   customeBackground: {
    navbarLight: "#F3FAFE",
    cardSectionLight: "#E1E9EE",
    footerLight: "linear-gradient(to right, #F3FAFE, #CCDDDD9E, #F3FAFE)",
    weeklyWeatherCardLight: "#CDD9E0",
    textLight: "#003464",
    mainBackgroundLight: "#F3FAFE",
    loginFormBackgroundLight: "#FFFFFF",
    loginFigureBackgroundLight: "#D3E1E7",
   },
  },
 });

 const darkTheme = createTheme({
  direction: currentDir,
  typography: {
   fontFamily: currentDir === "rtl" ? "IranYekanReg" : "OpenSans-Regular",
  },
  palette: {
   mode: "dark",
   primary: { main: "#2196f3" },
   customeBackground: {
    navbarDark: "#151D32",
    cardSectionDark: "#292F45",
    footerDark: "linear-gradient(to right, #292F45, #3F4861, #151D32)",
    weeklyWeatherCardDark: "#3F4861",
    textDark: "#F3F4F7",
    mainBackgroundDark: "#151D32",
    loginFormBackgroundDark: "#292F45",
    loginFigureBackgroundDark: "#404961",
   },
  },
 });

 const rtlCache = useMemo(
  () =>
   createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
   }),
  [currentDir]
 );

 const ltrCache = useMemo(
  () =>
   createCache({
    key: "mui",
   }),
  [currentDir]
 );

 return (
  <StrictMode>
   <QueryClientProvider client={queryClient}>
    <CacheProvider value={currentDir === "rtl" ? rtlCache : ltrCache}>
     <ThemeProvider
      theme={mode === "light" ? lightTheme : darkTheme}
      defaultMode="system"
     >
      <CssBaseline />
      {children}
     </ThemeProvider>
     <Toaster />
    </CacheProvider>
   </QueryClientProvider>
  </StrictMode>
 );
};

export default AllProviders;
