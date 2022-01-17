import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body:"#fff",
    textColor:"#6b6c72",
    textColor2: "#001229", //arai tod
    textColorBlack:"#000",
    hoverBackgroundColor:"#f4f5f8",
    backgroundColor:"#f4f5f8",
    
    tableBorderColor: "rgba(0,0,0,0.1)",
    tableText: "#333333",
    shadowColor:"#000",

    mainModalBackground: "rgba(0,0,0,0.6)"
}

export const darkTheme = {
    body: "#181818",
    textColor: "#AAAAAA",
    textColor2:"#fff", 
    textColorBlack:"#fff",
    hoverBackgroundColor:"#313131",
    backgroundColor:"rgba(255,255,255,0.027)",

    tableBorderColor: "#303030",
    tableText: "#fff",

    shadowColor:"#fff",

    mainModalBackground: "rgba(255,255,255,0.6)"
}

export const GlobalStyles = createGlobalStyle`
    body{
        background-color:${props=>props.theme.body};
    }
`

// export const backgroundColor = "#f4f5f8"

//#303030