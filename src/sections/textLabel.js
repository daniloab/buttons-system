import React from 'react';

import { Button } from '../button'
import { Container } from './elements'

const TextLabel = () => (
    <>
        <h1>Text Label Buttons</h1>
        <Container>
            <Button textLabel='default' size='xs'>Default</Button>
            <Button textLabel='primary' size='xs'>Primary</Button>
            <Button textLabel='info' size='xs'>Information</Button>
            <Button textLabel='warning' size='xs'>Warning</Button>
            <Button textLabel='danger' size='xs'>Danger</Button>
        </Container>
    </>
);

export default TextLabel