import React, {useState} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  const [usernames, setUsernames] = useState({
    userNames: [
      {username: 'Jiang Chen'},
      {username: 'Qin Wentian'},
      {username: 'Chen Xi'},
    ]
  })
  const changeUserNameHandler = (event) => {
    setUsernames({
      userNames: [
        {username: 'Jiang Chen'},
        {username: event.target.value},
        {username: 'Chen Xi'},
      ]
    })
  }

  return (
    <div>
      <UserInput change={changeUserNameHandler} name={usernames.userNames[1].username}/>
      <UserOutput userName={usernames.userNames[0].username}> I'm {usernames.userNames[0].username} </UserOutput>
      <UserOutput userName={usernames.userNames[1].username}> I'm {usernames.userNames[1].username} </UserOutput>
      <UserOutput userName={usernames.userNames[2].username}> I'm {usernames.userNames[2].username} </UserOutput>
    </div>
  );
}

export default App;
