import React,{ useState,useEffect } from 'react'
import './style/main.css';
import Base from './Components/Base'
import DataList from "./Components/DataList"
import Login from './Components/Login';
import Register from './Components/Register';
import Detail from './Components/Detail'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

const App = () => {
  const [datas,setData] = useState([]);

  const getDataRequest = async () =>{
  const url = "https://608ca9629f42b20017c3e2e2.mockapi.io/user"
  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);
  setData(responseJson)
 }

 useEffect(() => {
   getDataRequest();
 },[]);

  return (
    <Router>
      <div className="App">
        <Base/>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/datalist" exact>
            <DataList datas={datas}/>
          </Route>
          <Route path="/datalist/:id" exact>
            <Detail/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
