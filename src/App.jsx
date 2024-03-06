import { Home } from './routes/Home'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/*' element={<Navigate to="/" />}></Route>
      </Routes>    
    </>
  )
}

export default App
