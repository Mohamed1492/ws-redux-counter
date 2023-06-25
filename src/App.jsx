
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { handleMoins, handlePlus } from './redux/action'

function App() {
const count =useSelector(state=>state.count)
const dispatch=useDispatch()
console.log(count)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(handlePlus())} >+</button>
      <button onClick={()=>count >0 && dispatch(handleMoins())} >-</button>
    </>
  )
}

export default App
