import './App.css';



import {useState} from 'react';
import Header from './components/Header/Header';
import Keypad from './components/Keypad/Keypad';
function App() {
  let [darkmode,setdarkmode] = useState(false);
  const [expression,setexpresion]=useState('')
  const [result,setresult]=useState('')
  const [history,sethistory]=useState([])

  const usablekeycodes = [48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105,8,13,190,187,189,191,111,106,107,109]
  const numbers = ['0','1','2','3','4','5','6','7','8','9']
  const operators = ['+','-','*','/']


  let handlekeypress = (keycode,key)=>{
   if(!keycode)return
   
  if(!usablekeycodes.includes(keycode))return
  if (numbers.includes(key)){
    if(key ==='0'){
      if(expression.length===0)return

    }
    setexpresion (expression +key) 
    showresult(expression +key);
  }

  else if (operators.includes(key)){
    if(!expression)return
    const lastchar =expression.slice(-1) 
    if (operators.includes(lastchar))return
    if(lastchar ==='.')return
    setexpresion (expression +key) 


  }
  else if(key ==='.'){
    if(!expression)return
    const lastchar =expression.slice(-1) 
    if(!numbers.includes(lastchar))return

    setexpresion(expression +key)

  

  }
  else if (keycode ===8){
    if(!expression)return
    setexpresion(expression.slice(0,-1))
    showresult(expression.slice(0,-1))
    if (result.length===1){
      setresult('')
    }


    }
   

  else if (key==='='){
    setexpresion('')

  }
  }

  function showresult(exp){
    if(!expression)return
    const lastchar =exp.slice(-1) 
    if(!numbers.includes(lastchar))exp = exp.slice(0,-1)
    const output= eval(exp).toFixed(2) +'';
    
    setresult(output)


  }
  function clear(){
    setresult('')
    setexpresion('')
  }
 
 
 
  return (
    <div className='div'>
       

    <div className="App" tabIndex ='0' onKeyDown = {(e)=>{handlekeypress(e.keycode,e.key)}} >
      
      <div className='calci-div'>
       
        
           <Header expression = {expression} result = {result}/>
           <Keypad handlekeypress = {handlekeypress} />
           <button onClick={clear} className='clear'>c</button>

        {/* <div className='calci-div-head'>
        
         

        </div> */}
       
       

      </div>

      

    
    </div>
    </div>

  );
}

export default App;
