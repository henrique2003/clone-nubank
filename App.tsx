import React from 'react'
import { StatusBar } from 'expo-status-bar'

import Main from './pages/Main'

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="light" />
      <Main />
    </>
  )
}

export default App
