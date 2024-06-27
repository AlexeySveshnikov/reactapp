import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import Login from "./Login.js";
import Password from "./Password.js";

function App() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState("");
  const [status, setStatus] = useState("");

  function click() {
           setData("");
           setStatus("")
           fetch("https://667daf0f297972455f660941.mockapi.io/api/v1/user")
              .then((res) => res.text())
              .then((data) => setData(data.toString()))
              .catch((error) => setStatus("Error: " + error.toString()));
  }

  useEffect(function(){
        if (data) {
           for (const user of JSON.parse(data)) {
                if ((user.name == name) && (user.password == password)) {
                    setStatus("Success");
                    return;
                }
           }
           setStatus("Fail");
        }
    }, [data]);

  return (
       <>
        <Login name={name} setName={setName}/>
        <br/>
        <Password password={password} setPassword={setPassword}/>
        <br/>
        <button style={{fontSize: "1.2em", margin: "0.5em"}}onClick={click}>Login</button>
        <br/>
        <div style={{color: "red", fontSize: "1.2em", margin: "0.5em"}}>
        Status: {status}
        </div>
      </>
  );
}

export default App;
