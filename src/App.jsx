
import { Suspense } from 'react'
import './App.css'
import Bottles from '../componenes/bottles/bottles'

function App() {
const bottlesPromice=fetch('bottles.json')
.then(res=>res.json())

  return (
    <>
      
      <h1>awesome bottle</h1>
     <Suspense fallback={<h2>Bottles loading...</h2>}>
      <Bottles bottlesPromice={bottlesPromice}></Bottles>
     </Suspense>
      
    </>
  )
}

export default App
