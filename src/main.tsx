import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import * as Tooltip from '@radix-ui/react-tooltip';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tooltip.Provider delayDuration={50}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Tooltip.Provider>
  </StrictMode>,
)
