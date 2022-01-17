import React from 'react'
import styled from 'styled-components'
import Header from '@/core/Header'
import Footer from '@/core/Footer'

const Root = ({children}) => {
    return (
        <Body>
            <Header />
                {children}
            <Footer />
        </Body>
    )
}

export default Root

const Body = styled.div`
    // background-color:red;
`