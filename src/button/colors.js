import global from '../helpers/global'

const def = {
    primaryColor: `#000`,
    backgroundColor: `#fff`,
    borderColor: `#ccc`,
    hoverColor: `#f3f3f3`
}

const primary = {
    color: `#fff`,
    backgroundColor: global.style.primaryColor,
    borderColor: global.style.primaryColorHover,
    hoverColor: global.style.primaryColorHover,
}

const info = {
    primaryColor: `#fff`,
    backgroundColor: `#58c7ef`,
    borderColor: `#58c7ef`,
    hoverColor: `#67d7ff`
}

const warning = {
    primaryColor: `#fff`,
    backgroundColor: `#fdd835`,
    borderColor: `#fdd835`,
    hoverColor: `#ffe367`
}

const danger = {
    primaryColor: `#fff`,
    backgroundColor: `#dd2c00`,
    borderColor: `#dd2c00`,
    hoverColor: `#f56959`
}

export default {
    default: def,
    primary: primary,
    info: info,
    warning: warning,
    danger: danger
}