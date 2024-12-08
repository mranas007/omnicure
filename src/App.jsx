import React from 'react'
import Home from './pages/Home'
import { ContextProvider } from "./context/Context";
const App = () => {
  return (
    <>
      <ContextProvider>
        <Home />
      </ContextProvider>
    </>
  )
}

export default App