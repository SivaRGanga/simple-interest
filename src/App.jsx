import Button from '@mui/material/Button';
import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
function App() {

  const [amount,setAmount]=useState(0)
  const [year,setYear]=useState(0)
  const [rate,setRate]=useState(0)
  const [interest,setInterest]=useState(0)

  console.log(amount,year,rate);

  const calculate=(e)=>{
    const output= amount*year*rate/100
    console.log(output);
    setInterest(output)
  }
  const reset=(e)=>{
    setAmount(0)
    setYear(0)
    setRate(0)
    setInterest(0)
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>Simple interest calculator</h1>
        <p>Calculate your simple interest with us</p>
      
      <div className="total">
        <h2>&#8377;{interest}</h2>
        <p>Your total interest</p>
      </div>
      <div className='form'>
        <form>
          <div className='input'>
          <TextField id="outlined-basic" label="amount" variant="outlined" onChange={(e)=>setAmount(e.target.value)} />
          <TextField id="outlined-basic" label="year" variant="outlined" onChange={(e)=>setYear(e.target.value)}/>
          <TextField id="outlined-basic" label="rate of interest" variant="outlined" onChange={(e)=>setRate(e.target.value)} />
          </div>
        </form>
      
    
        <Button  variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
        <Button  variant="contained" onClick={e=>reset(e)} >Reset</Button>  
    </div>
    </div>
    </div>
    
  );
}

export default App;