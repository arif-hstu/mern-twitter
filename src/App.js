import './App.css';
import Footer from './components/Footer/Footer';

// import components
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import RightSideBar from './components/RightSideBar/RightSideBar';
function App() {
  return (
    <div className="App">
      <Header />
      <LeftSideBar />
      <Home />
      <RightSideBar />
    </div>
  );
}

export default App;
