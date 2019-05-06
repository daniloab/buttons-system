import React from 'react';
import { MdSettings, MdFavorite, MdInfo, MdWarning, MdClose } from "react-icons/md";

import { Button } from '../button'
import { Container } from './elements'

const Icons = () => (
    <>
        <h1>Icons Buttons</h1>
        <Container>
            <Button type='default' size='xs' iconSize="18">
                <MdSettings/>
                Default
            </Button>
            <Button type='primary' size='xs' iconSize="18">
                <MdFavorite/>
                Primary
            </Button>
            <Button type='info' size='xs' iconSize="18">
                <MdInfo/>
                Information
            </Button>
            <Button type='warning' size='xs' iconSize="18">
                <MdWarning/>
                Warning
            </Button>
            <Button type='danger' size='xs' iconSize="18">
                <MdClose/>
                Danger
            </Button>
        </Container>
    </>
);

export default Icons