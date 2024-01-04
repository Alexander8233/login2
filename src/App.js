import './App.css';

function App() {
  function button(e) {
    const input = document.getElementById('form-name').value
    const myInput = document.getElementById('form-last').value
    const num = document.getElementById('form-num').value
    const password = document.getElementById('form-pass').value
    const all = input + myInput + num + password
    if (all === "") {
      document.title = 'hello'
      alert('come agin please');
   
      
    }
    else  (alert(`thank you ${input} for your`)); 
       
   
  }
  return (
    <header>
      <div className="all">
        <div className="form">
          <h1>Login</h1>
          <div className="form-app">
            <label className="label-form">First name</label>
            <input className="input" id="form-name" request/>
            <span className="correct" id="name"></span>
          </div>
          <div className="form-app">
            <label className="label-form">Last name</label>
            <input className="input" id="form-last" request/>
            <span className="correct" id="last"></span>
          </div>
          <div className="form-app">
            <label className="label-form">Number</label>
            <input className="input" id="form-num" request/>
            <span className="correct" id="number"></span>
          </div>
          <div className="form-app">
            <label className="label-form">Password</label>
            <input className="input" id="form-pass" request/>
            <span className="correct"id="pass"></span>
          </div>
          <button className="login" onClick={button} >Login</button>
        </div>
      </div>
    </header>
  );
}

export default App;
