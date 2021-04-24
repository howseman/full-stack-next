import { createMuiTheme } from '@material-ui/core/styles'
import { blue, green } from '@material-ui/core/colors'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Nunito, Ubuntu, \'Segoe UI\'',
  },
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary',
    },
  },
})

export default theme
