import { Parser } from 'html-to-react';
import styled from 'styled-components';

const ContentParser = ({html}) => {
    const instance = new Parser();
    return <Container>{instance.parse(html)}</Container>;
};

export default ContentParser;

const Container = styled.div `
    ul{
        li{
            margin-bottom:10px;
        }
    }
`