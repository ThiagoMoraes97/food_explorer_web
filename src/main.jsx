import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {SignUp} from './pages/SignUp'
import {SignIn} from './pages/SignIn'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignIn />
    </ThemeProvider>
  </StrictMode>
)
