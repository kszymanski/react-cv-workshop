import React from 'react';
import { Header } from 'semantic-ui-react';

import './SectionHeader.scss';

const SectionHeader = ({children}) => (
    <Header as='h3' dividing className='section-header'>
        { children }
    </Header>
);

export default SectionHeader;