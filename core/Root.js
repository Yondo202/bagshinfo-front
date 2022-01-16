import React from 'react'
import styled from 'styled-components'
import Header from '@/core/Header'
import Footer from '@/core/Footer'

const Root = () => {
    return (
        <Body>
            <Header />
            <h1>hello</h1>
            <Footer />
        </Body>
    )
}

export default Root

const Body = styled.div`
    background-color:red;
`