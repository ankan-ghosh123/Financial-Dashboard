import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Auth0Provider } from "@auth0/auth0-react";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-kn6rvrocj0647mbg.us.auth0.com"
      clientId="Q3bCwIdt1ftmrVP1mXFGu9QzP6AJqpdS"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />

    </Auth0Provider>



  </StrictMode>,
)
