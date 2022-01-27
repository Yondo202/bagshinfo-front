import Router from 'next/router';
import { ThemeProvider } from "styled-components";
import '../public/css/nprogress.css'
import '../public/css/global.css'
import * as theme from "@/miscs/theme";
import { useState } from 'react';
import { ConfigProvider } from 'antd';
import mnMN from 'antd/lib/locale/mn_MN';
import 'moment/locale/mn';
import { MenuProvider } from "@/global/ContextMenuProvider";
import { parseCookies } from "nookies";
import NProgress from 'nprogress';
// import '../public/css/style.css'



// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps, router  }) =>{
  const [ completelyLoaded, setCompletelyLoaded ] = useState(false);
  
  return(
    <ConfigProvider locale={mnMN}>
      <ThemeProvider theme={theme}>
        <MenuProvider value={{ completelyLoaded:completelyLoaded }}>
          <Component {...pageProps} key={router.route} />
        </MenuProvider>
      </ThemeProvider>
    </ConfigProvider>
    
  )
}

export default MyApp

// MyApp.getInitialProps = async ({ ctx }) => {

//   const { jwt } = parseCookies(ctx)

//   if (jwt) {
//     try {
//       let res = await Axios(process.env.serverUrl + '/users/me', { headers: { 'Authorization': 'Bearer ' + jwt } });
//       return { initialAuth: res.data };
//     }
//     catch (e) { return {} }
//   }
//   return {};
// }