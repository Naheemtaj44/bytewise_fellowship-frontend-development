 
import style from"./App.module.css";

function App() {
  <div className={style.app}>
    <h1 className={style.app}>naeemtaj</h1>
  </div>
  const name=<h1>naeem taj</h1>;
  const age = <h1>32</h1>;
  const email = <h1>naeemtaj44@gmail.com</h1>;
  const address = <h1>naeemtaj44@gmail.com</h1>
  
  return (
    <div className="App">
        <h1>My Personal Details</h1>
        {name}
        {age}
        {email}
        {address}
        <h1 style={{color : "red"}}>babababa</h1>
    </div>
  );
}

export default App;
a
<h1 style={{color : "