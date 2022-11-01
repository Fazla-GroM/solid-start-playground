import { style } from '@vanilla-extract/css'

const headerStyle = style({
    padding: '16px'
})

const logoStyle = style({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    fontSize: '20px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black'
})

const logoImgStyle = style({
    width: '40px',
    height: '40px'
})

const mainStyle = style({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
})

const counterStyle = style({
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    padding: '1em 2em',
    color: '#335d92',
    backgroundColor: 'rgba(68, 107, 158, 0.1)',
    borderRadius: '2em',
    border: '2px solid rgba(68, 107, 158, 0)',
    outline: 'none',
    width: '200px',
    fontVariantNumeric: 'tabular-nums',

    ':focus': {
        border: ' 2px solid #335d92'
    },
    ':active': {
        backgroundColor: 'rgba(68, 107, 158, 0.2)'
    }
})

export { counterStyle, headerStyle, logoImgStyle, logoStyle, mainStyle }
