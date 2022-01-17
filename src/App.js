import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');


  useEffect(() => {
    // this is the side effect of this function
     if (loggedIn) {
    // Imagine a call to a database here to get user info
    // Once that comes back (ie. once the promise resolves!), we set the user's name into state, to trigger a re-render and say SUP
    fetch(`https://8ball.delegator.com/magic/JSON/Is this true sup?`)
      .then( res => res.json() )
      .then( (jsonRes) => {
        setMessage(jsonRes.magic.answer);
      })
    setUserName('safi');
    setMessage('');
  } else {
    // this happens if the user is logged OUT, so here, we set the userName state to be an empty string
    setUserName('');
  }
  }, [loggedIn]);

  useEffect( () => {
    // fetch(`https://8ball.delegator.com/magic/JSON/Is this true sup?`)
    //   .then( res => res.json() )
    //   .then( (jsonRes) => {
    //     setMessage(jsonRes.magic.answer);
    //   })
  }, []);

  return (
    <div className="App">
      <h1>sup</h1>

      <h3>Ss this true sup? ❣️</h3>
      <p>The oracle says: {message}</p>

    <div>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? 'Log out' : "Log in"}
      </button>

      {
        loggedIn
        ? <p>sup, {userName}</p>
        : <p>Please log in so I can say sup</p>
      }

    </div>



    </div>
  );
}

export default App;

// Our question is, how do we run certain code only on specific renders, rather than every single time the component renders?
// For example, how do we run some code (our if statement) only when a re-render is triggered by a change in our loggenIn state, but NOT when a re-render is triggered by anything else (say, a change to our userName state)
// That is to say, in React parlance, how can we make our if-statement code a SIDE EFFECT of rerenders triggered by the setLoggeIn , but not anything else 


//  if (loggedIn) {
    // Imagine a call to a database here to get user info
    // Once that comes back (ie. once the promise resolves!), we set the user's name into state, to trigger a re-render and say SUP
  //   setUserName('safi');
  // } else {
    // this happens if the user is logged OUT, so here, we set the userName state to be an empty string
  //   setUserName('');
  // }
