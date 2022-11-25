import React from 'react'
import Header from './components/header';
import Footer from './components/footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductScreen from './Screens/ProductScreen';



const App = () => {
  return (
    <>
    <Router>
    <div>
    <Header/>
    <main>
      <Container>
        <Routes>
          <Route path = '/' element = {<HomeScreen/>} exact/>
          <Route path = '/product/:id' element ={<ProductScreen/>} />
        </Routes>
      </Container>
    </main>

    <Footer/>
    </div>
    </Router>
    </>
  )
}

export default App;
