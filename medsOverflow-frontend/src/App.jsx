import { useState } from 'react'
import './App.css'
import Layout from './components/Header/Layout';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { userContext } from './context/Context';
import Questions from './components/AddQuestions/Questions';
import ViewQuestion from './components/ViewQuestions/ViewQuestion';

function App() {
  const [isLoginTrue, setIsLoginTrue] = useState(false)

  return (
    <>
      <userContext.Provider value={{isLoginTrue, setIsLoginTrue}}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/signin' element={<SignIn />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/add-question' element={<Questions />} />
            <Route exact path='/all-questions' element={<Home />} />
            <Route exact path='/question' element={<ViewQuestion />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </>
  )
}

export default App
