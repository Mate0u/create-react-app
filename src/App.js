import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BannerUpper from './components/bannerUpper';
import Home from "./components/homePage";
import Card from './components/cardValidatorComponents/input';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends React.Component {

render() {
return (
<div className="container">
 <BannerUpper />
  <div>
   <Router>
    <div>
     <nav>
      <ul>
       <li>
        <Link to="/">Home</Link>
       </li>
       <li>
        <Link to="/card">Card</Link>
       </li>
      </ul>
     </nav>
     <Route path="/" exact component={Home} />
     <Route path="/card" component={Card} />
    </div>
   </Router>
  </div>
</div>
);
}
}
export default App;
