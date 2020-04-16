import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6C63FF",
      contrastText: "#fff"
    },
    // secondary: {
    //   // main: "rgb(234,76,137)",
    // },
    action: {
      hover: "#ffffff",
      active:"#ffffff"
    },
    background: {
      default: "#6C63FF"
    }
  },
//   zIndex: {
//     drawer: 1000
//   },
//   typography: {
//     fontFamily: "'Hind',sans-serif",

//     body1: {
//       fontSize: "1.2rem"
//     },
//     body2: {
//       fontSize: "1.1rem"
      
//     },
//     body3: {
//       fontSize: "10px"
//     }

//   }
});

export default theme;
