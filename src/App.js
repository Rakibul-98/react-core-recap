import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Reduce from './Components/Reduce';
import Team from './Components/Team';

function App() {
  // reduce function
const money=[12, 14, 15, 17,65,10,12,13,457,986];
const totalMoney = money.reduce((sum,taka) => sum+taka , 0);

const [users,setUsers] = useState([]);
useEffect(()=>{
     fetch("https://randomuser.me/api/?results=15")
     .then(res => res.json())
     .then(data => setUsers(data.results))
},[])
const [team,setTeam]=useState([])
const addMember=(name)=>{
     setTeam([...team,name])
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Team members :</h1>
        <ul>
          {
            team.map(mem => <li> {mem} </li>)
          }
        </ul>
        <ul>
        {
            users.map( user => <Team user= {user} addMember= {addMember} ></Team>)
        }
        </ul>
        <Reduce totalMoney= {totalMoney} ></Reduce>
      </header>
    </div>
  );
}

export default App;
