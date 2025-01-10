import './input.css';
function Inputfield({onChangeHandler}) {
  return (
    
    <input type="text" placeholder="Enter text here" onChange={onChangeHandler} id="input1" />
   
  )
}

export default Inputfield
