import React from 'react';

import { Button } from '../button'
import { Container } from './elements'

const Sizes = () => (
    <>
        <h1>Sizes Buttons</h1>
        <Container>
            <Button type='primary' size='xs'>Extra Small</Button>
            <Button type='primary' size='sm'>Small</Button>
            <Button type='primary' size='lg'>Large</Button>
        </Container>
    </>
);

export default Sizes