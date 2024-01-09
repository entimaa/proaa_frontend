import React,{useEffect,useState} from 'react';
import axios from 'axios';

function App() {

    const [users,setUsers] =useState([])
    useEffect(()=>{
      loadData()
    },[])

  const loadData = () => {
    axios.get('http://localhost:5004/api/users')
    .then(result => {
setUsers(result.data.users)
    })
    .catch(error => console.log(error.message))
  }
 
  return (
    <div className="App">
      {
     users.map(user => <li className='list-group-item'><b>{user.name}</b> | {user.email}</li>)
      }
    </div>
  );
}

export default App;
