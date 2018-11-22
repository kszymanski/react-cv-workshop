import React from 'react';
import { Container } from 'semantic-ui-react';

const Bio = ({children}) => (
    <Container text>
        { children }
    </Container>
);

export default Bio;