 
import './App.css';

function App() {
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
    </div>
  );
}

export default App;
