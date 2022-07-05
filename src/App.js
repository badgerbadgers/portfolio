import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
        <>
        <Layout />
        <Home />
        </>
        } />
        <Route path='/about' element={
          <About />
        }
        />
        {/* <Route index element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
