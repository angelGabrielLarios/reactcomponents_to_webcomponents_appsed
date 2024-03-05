/* import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css' */
import './index.css'

import r2wc from "@r2wc/react-to-web-component"
import { Counter } from "./components/Counter.tsx";
import { Invitation } from "./components/Invitation.tsx";

const CounterWebComponente = r2wc(Counter)

customElements.define("app-counter", CounterWebComponente)


const InvitationWebComponent = r2wc(Invitation, {
  props: {
    husband: "string",
    wife: "string"
  }
})
customElements.define('app-invitation', InvitationWebComponent)
/* 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) */



