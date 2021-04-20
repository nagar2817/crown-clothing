import './App.css';
import {Link, Route, Switch} from "react-router-dom"
import HomePage from './pages/homepage/homepage.Components';

// However it use a simple functionlity so for to make it simple just use a function components instead of class components.
function App() {
  return (
    <div>
   <HomePage />
      
    </div>
  );
}

export default App;
