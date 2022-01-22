import React from 'react'
import Root from "@/core/Root"
import Hometop from '@/dynamic/Hometop'
import Categorycards from '@/dynamic/Categorycards'

const Index = () => {
  return (
      <Root>
          <Hometop />
          <Categorycards />
      </Root>
  )
}

export default Index


// export async function getServerSideProps({ params, req }) {
//   const res = await Axios(process.env.serverUrl + '/home')
//   return { props: { data: res.data } }
// }