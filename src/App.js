
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav_footer/nav';
import Main from './components/main/main';
import Footer from './components/nav_footer/footer';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
