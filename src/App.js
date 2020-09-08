import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Name,Depot, Carriers, Spots, Jobs, Purge, Fetch} from "./components/post";
import Get from "./components/get";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">POST</Link>
          </li>
          <li>
            <Link to="/get">GET</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/post">
          Loogiaに計算をリクエスト
          <Purge/>
          <Name/>
          <Depot/>
          <Carriers/>
          <Spots/>
          <Jobs/>

          <Fetch/>
        </Route>
        <Route path="/get">
         Loogiaの計算を取得
          <Get/>
        </Route>
        <Route path="/">
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
