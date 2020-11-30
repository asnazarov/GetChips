import React from 'react';
import {Route} from "react-router-dom";

import {Footer, Header} from './components'
import {
  About,
  Api,
  Contacts,
  Delivery,
  Home,
  PersonalAccount,
  Vendor,
  WorkingConditions,
  Cart,
  SearchingResults
} from './pages'

function App() {

  return (
    <>
        <Header/>
        <div className="content">
          <Route exact path="/GetChips" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/vendor" component={Vendor}/>
          <Route path="/delivery" component={Delivery}/>
          <Route path="/uslovija-raboty" component={WorkingConditions}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/api" component={Api}/>
          <Route path="/personalAccount" component={PersonalAccount}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/results" component={SearchingResults}/>
        </div>
      <Footer />
    </>
  );
}

export default App;
