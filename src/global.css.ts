import { globalStyle } from '@vanilla-extract/css'

globalStyle('*,*::before,*::after', {
    boxSizing: 'border-box',
    margin: '0px',
    padding: '0px'
})

globalStyle('html,body', {
    height: '100%'
})

globalStyle('body', {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.5',
    isolation: 'isolate',
    WebkitFontSmoothing: 'antialiased',
    fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
})
