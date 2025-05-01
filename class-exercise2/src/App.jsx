import { useState } from 'react'

import './App.css'
import Mycounter from './components/MyCounter'
import IncreaseDecreaseCount from './components/IncreaseDecreaseCount'
import UseEffectForTitle from './components/UseEffectForTitle'

function App() {
  
  return (
    <>
  <Mycounter />
  <IncreaseDecreaseCount />
  <UseEffectForTitle />
    </>
  )
}

export default App
