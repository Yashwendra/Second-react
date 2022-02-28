import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Header from "./Header";
import Rej from "../Navgation/Reg";
import Login from "../Navgation/Login";
import Forget from "../Navgation/Forget";
import AddUserList from "../UI/AddUserList";

function MHeader() {
  return (
    <div>
         <BrowserRouter>
        <div>
          <Header />
            <Switch>
             <Route path="/" component={Rej} exact/>
             <Route path="/login" component={Login}/>
             <Route path="/forget" component={Forget}/>
             <Route path="/adduserlist" component={AddUserList}/>
           
           </Switch>
        </div> 
      </BrowserRouter>
    </div>
  );
}

export default MHeader;
