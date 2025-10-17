import "@mui/material/styles";

declare module "@mui/material/styles" {
 interface Palette {
  customeBackground: {
   navbarLight: string;
   cardSectionLight: string;
   footerLight: string;
   navbarDark: string;
   cardSectionDark: string;
   footerDark: string;
   weeklyWeatherCardLight: string;
   weeklyWeatherCardDark: string;
   textLight: string;
   textDark: string;
   mainBackgroundLight: string;
   mainBackgroundDark: string;

   loginFormBackgroundLight: string;
   loginFormBackgroundDark: string;
   loginFigureBackgroundLight: string;
   loginFigureBackgroundDark: string;
  };
 }

 interface PaletteOptions {
  customeBackground?: {
   navbarLight?: string;
   cardSectionLight?: string;
   footerLight?: string;
   navbarDark?: string;
   cardSectionDark?: string;
   footerDark?: string;
   weeklyWeatherCardLight?: string;
   weeklyWeatherCardDark?: string;
   textLight?: string;
   textDark?: string;
   mainBackgroundLight?: string;
   mainBackgroundDark?: string;

   loginFormBackgroundLight?: string;
   loginFormBackgroundDark?: string;
   loginFigureBackgroundLight?: string;
   loginFigureBackgroundDark?: string;
  };
 }
}
