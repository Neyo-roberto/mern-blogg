import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Signin } from './pages/Signin';
import { SignUp } from './pages/SignUp';
import { Projects } from './pages/Projects';
import { Header } from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Dashboard' element={<Dashboard />}/>
        <Route path='/Signin' element={<Signin />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/Projects' element={<Projects />}/>
      </Routes>
    </BrowserRouter>
  )
}
