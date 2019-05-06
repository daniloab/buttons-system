import React from 'react';
import { MdSettings, MdFavorite, MdInfo, MdWarning, MdClose } from "react-icons/md";

import { Button } from '../button'
import { Container, H2 } from './elements'

const Rounded = () => (
    <>
        <h1>Rounded Buttons</h1>
        <div>
            <H2>Standard</H2>
            <Container>
                <Button type='default' size='xs' rounded={true}>Default</Button>
                <Button type='primary' size='xs' rounded={true}>Primary</Button>
                <Button type='info' size='xs' rounded={true}>Information</Button>
                <Button type='warning' size='xs' rounded={true}>Warning</Button>
                <Button type='danger' size='xs' rounded={true}>Danger</Button>
            </Container>

            <H2>With Icons</H2>
            <Container>
                <Button type='default' size='xs' iconSize="18" rounded={true}>
                    <MdSettings />
                    Default
                </Button>
                <Button type='primary' size='xs' iconSize="18" rounded={true}>
                    <MdFavorite />
                    Primary
                </Button>
                <Button type='info' size='xs' iconSize="18" rounded={true}>
                    <MdInfo />
                    Information
                </Button>
                <Button type='warning' size='xs' iconSize="18" rounded={true}>
                    <MdWarning />
                    Warning
                </Button>
                <Button type='danger' size='xs' iconSize="18" rounded={true}>
                    <MdClose />
                    Danger
                </Button>
            </Container>
        </div>
    </>
);

export default Rounded