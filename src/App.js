import {Route} from "react-router-dom";

import {Header} from './components'
import {About, Home, Suppliers} from './pages'

function App() {

  return (
    <>
        <Header/>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={About}/>
          <Route path="/suppliers" component={Suppliers}/>
        </div>
    </>
  );
}

export default App;
