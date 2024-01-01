import Navigation from './components/Navigation';
import Footer from './components/Footer';
import styles from './components/css/styles.css';
import Index from './components/Index';
import About from './components/About'
import Book from './components/Book'
import { FormDataProvider } from './components/FormDataContext';
import Reservations from './components/Reservations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Confirmation from './components/Confirmation';



function App() {
  return  (

     <Router>
      

      <div className = "App">
      

      < Navigation/>
      <FormDataProvider>
      <Routes>

    

      <Route path="/" element={<Index/>} />
      <Route path="/home" element={<Index/>} />
      <Route path="/about" element={<About/>} /> 
     <Route path ="/book" element ={<Book/>}/>
     <Route path ="/reservations" element ={<Reservations/>}/>
     <Route path ="/confirmation" element ={<Confirmation/>}/>

   
    
       

      </Routes>
      </FormDataProvider>
      <Footer/>
      

    </div>
    </Router>
   
  
  )
}

export default App;
