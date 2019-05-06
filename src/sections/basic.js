import React from 'react';

import { Button } from '../button'
import { Container } from './elements'

const Basic = () => (
    <>
        <h1>Basic Buttons</h1>
        <Container>
            <Button type='default' size='xs'>Default</Button>
            <Button type='primary' size='xs'>Primary</Button>
            <Button type='info' size='xs'>Information</Button>
            <Button type='warning' size='xs'>Warning</Button>
            <Button type='danger' size='xs'>Danger</Button>
        </Container>
    </>
);

export default Basic