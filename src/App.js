import "./styles/App.scss"
import "./styles/Home.scss"
import "./styles/contact.scss"
import "./styles/footer.scss"
import Header from './components/Header'; 
import Home from './components/Home'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services"

function App() {
  return (
<Router>
<Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
  </Routes>
  <Footer/>
</Router>

  );
}

export default App;
