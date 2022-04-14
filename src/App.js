import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <Header />
     <Sidebar/>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
