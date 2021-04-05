
import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';

function App() {
  const [nayoks, setNayoks] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setNayoks(data))
    // .then(data =>console.log(data))

  },[])

  // const nayoks =[{name:'Nazim', happy:'(Justed)'}, {name:'Ashiq'}, {name:'Rakhi'}, {name:'Devil'}, {name:'Jilapi'}]
  // const nayoks =['Nazim', 'Ashiq', 'Rakhi', 'Devil', 'Jilapi', 'GreenChilli']
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} happy={nk.happy} > </Nayok>)
      }
      {/* {
        nayoks.map(nk => <Nayok name={nk.name} happy={nk.happy} > </Nayok>)
      } */}

      {/* <Nayok name={nayoks[0]} happy='(Justed)' ></Nayok>
      <Nayok name={nayoks[1]}></Nayok>
      <Nayok name="Rakhi"></Nayok>
      <Nayok name></Nayok> */}
      <header className="App-header">
        <h1>Be Come a Web Developer</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] =useState(0);
  const handleClick = () => setCount (count + 1);
  
  return(
    <div>
      <button onClick={handleClick}> Add Movie</button>
      <h3>Number of movies : {count}</h3>
      <MovieDisplay wish={count}></MovieDisplay>
      <MovieDisplay wish={count + 5}></MovieDisplay>
      <MovieDisplay wish={count}></MovieDisplay>
      <MovieDisplay wish={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return(
    <h4>Movies i have acted : {props.wish}</h4>
  )
}

function Nayok (props){
  // console.log(props);
  const nayokStyle={
    border: '2px solid purple',
    margin:'20px'
  }
  return(
    <div style={nayokStyle}>
      <h1>I Am Developer : {props.name}</h1>
      <h4>I Am Happy {props.happy || 'Thanks'} for you</h4>
    </div>
  )
}














export default App;



































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
