import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {SignUp} from './pages/SignUp'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignUp />
    </ThemeProvider>
  </StrictMode>
)
