import './App.css'
import Login from './page/Login'
import UserDetail from './page/UserDetail'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageNotFound from './page/PageNotFound'
import Users from './page/Users'

function App() {
  return (
    <Router>
      <div
        className='App pb-6 bg-gradient-to-r
    from-indigo-600
    to-blue-400 min-h-screen h-full'>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<UserDetail />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
