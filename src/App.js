import './App.css';
import Navbar from './components/navbar/Navbar';
import Foodle from './components/foodle/foodle';
import FoodList from './components/foodList/foodlist';
import Discount from './components/discount/discount';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Foodle/>
      <FoodList/>
      <Discount/>
      <Footer/>
      

    </div>
  );
}

export default App;
