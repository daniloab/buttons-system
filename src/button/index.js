import React from 'react'
import styled from 'styled-components';

import global from '../helpers/global'
import * as colors from './colors'

const defaultProps = `
    color: ${colors.def.primaryColor};
    background: ${colors.def.backgroundColor};
    border-color: ${colors.def.borderColor};
    
    &:hover {
      background: ${colors.def.hoverColor};
    }
`

const primaryProps = `
    background: ${colors.primary.backgroundColor};
    border-color: ${colors.primary.borderColor};

    &:hover {
        background: ${colors.primary.hoverColor};
    }
`

const infoProps = `
    background: ${colors.info.backgroundColor};
    border-color: ${colors.info.borderColor};
    
    &:hover {
      background: ${colors.info.hoverColor};
    }
`

const warningProps = `
    background: ${colors.warning.backgroundColor};
    border-color: ${colors.warning.borderColor};

    &:hover {
        background: ${colors.warning.hoverColor};
    }   
`

const dangerProps = `
    background: ${colors.danger.backgroundColor};
    border-color: ${colors.danger.borderColor};

    &:hover {
        background: ${colors.danger.hoverColor};
    }   
`

const defaultTextProps = `
    color: ${colors.default.backgroundColor};    
    text-transform: uppercase;
    font-weight: bold;
    background: none;
    border-color: none;
    letter-spacing: 0.0325em;
    
    &:hover {
      background: #f3f3f3;
      transition: 0.3s;
    }
`

const primaryTextProps = `
    color: ${global.style.primaryColor};    
    text-transform: uppercase;
    font-weight: bold;
    background: none;
    border-color: none;
    letter-spacing: 0.0325em;
    
    &:hover {
      background: ${global.style.primaryColor};
      transition: 0.3s;
      color: white;
    }
`

const infoTextProps = `
    color: #58c7ef;    
    text-transform: uppercase;
    font-weight: bold;
    background: none;
    border-color: none;
    letter-spacing: 0.0325em;
    
    &:hover {
      background: #58c7ef;
      color: white;
      transition: 0.3s;
    }
    `

const warningTextProps = `
    color: #FDD835;    
    text-transform: uppercase;
    font-weight: bold;
    background: none;
    border-color: none;
    letter-spacing: 0.0325em;
    
    &:hover {
      background-color: #ffe367;;
      color: white;
      transition: 0.3s;
    }
`

const dangerTextProps = `
    color: #DD2C00;
    text-transform: uppercase;
    font-weight: bold;
    background: none;
    border-color: none;
    letter-spacing: 0.0325em;
    
    &:hover {
      background-color: #DD2C00;
      color: white;
      transition: 0.3s;
    }
`

const extraSmallProps = `
    padding: .9rem .6rem;
    font-size: 1.2rem;
    line-height: 1;
    border-radius: 0;
`

const smallProps = `
    padding: .9rem 1.3rem;
    font-size: 1.4rem;
    line-height: 1;
`

const largeProps = `
    padding: 1.4rem 1.7rem;
    font-size: 1.8rem;
    line-height: 1;
`

const roundedProps = `
    border-radius: 1em;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .81rem .7692rem;
    font-family: ${global.style.fontFamily};
    color: white;
    border: none;
    font-size: 1.6rem;
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
      }
    }

    svg {
        position: relative;
        top: 0.1em;
        line-height: .6;
        vertical-align: middle;
        margin-right: 0.4em;
        width: ${props => props.iconSize}px;
        height: ${props => props.iconSize}px;
    }

    ${props => props.type === 'default' && defaultProps}
    ${props => props.type === 'primary' && primaryProps}
    ${props => props.type === 'info' && infoProps}
    ${props => props.type === 'warning' && warningProps}
    ${props => props.type === 'danger' && dangerProps}

    ${props => props.textLabel === 'default' && defaultTextProps}
    ${props => props.textLabel === 'primary' && primaryTextProps}
    ${props => props.textLabel === 'info' && infoTextProps}
    ${props => props.textLabel === 'warning' && warningTextProps}
    ${props => props.textLabel === 'danger' && dangerTextProps}

    ${props => props.size === 'xs' && extraSmallProps}
    ${props => props.size === 'sm' && smallProps}
    ${props => props.size === 'xl' && largeProps}

    ${props => props.rounded && roundedProps}
`

const PropsButton = ({ type, size, textLabel, rounded, iconSize, children }) => (
    <Button
        type={type}
        size={size}
        textLabel={textLabel}
        rounded={rounded}
        iconSize={iconSize}
    >
        {children}
    </Button>
)

Button.defaultProps = {
    type: 'default',
    size: '',
    iconSize: '32px'
}