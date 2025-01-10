import './input.css';
function Inputfield({onChangeHandler}) {
  return (
    <div className="input">
    <input type="text" placeholder="Enter text here" onChange={onChangeHandler} id="input1" />
    </div>
  )
}

export default Inputfield
