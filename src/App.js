import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home/Home';
import Orders from './Pages/Orders/Orders';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation></Navigation>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/order/:id" element={<Orders />} />
                </Routes>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
