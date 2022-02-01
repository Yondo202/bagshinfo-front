// module.exports = {
//   reactStrictMode: true,
// }


// module.exports = {
//   env: {
//       serverUrl: 'http://192.168.10.88:1357',
//       // serverUrl: 'https://admin-loccitane.tavanbogd.com',
//       frontUrl: 'https://loccitane.tavanbogd.com'
//   }
// }

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase) => {

    const isDev = phase === PHASE_DEVELOPMENT_SERVER;
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
    const isSTaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
    
    const env = {
        reactStrictMode: true,
        // cart:"cart_items",
        // user: "user_info",w
        serverUrl:(()=>{
            if(isDev) return 'http://localhost:1331/api/'
            // if(isProd) return 'https://4708-124-158-107-34.ngrok.io'
            // if(isSTaging) return 'https://4708-124-158-107-34.ngrok.io'
        })(),
        frontUrl:(()=>{
            if(isDev) return 'http://localhost:3000'
            // if(isProd) return 'https://e-shop-front.vercel.app'
            // if(isSTaging) return 'https://e-shop-front.vercel.app'
        })(),
        productUrl:(()=>{
            return '/product/'
        })(),
        newsUrl:(()=>{
            return '/news/'
        })(),
    }
    return{
        env
    }
}