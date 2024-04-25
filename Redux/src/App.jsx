import { useDispatch, useSelector } from "react-redux"
import { decrementLike, incrementLike } from "./reduxStore/action"

function App() {
  const dispatch = useDispatch()
  const likes = useSelector(state=>state.likes)
  console.log(likes);

  return (
    <div style={{margin: "0 auto",width: "fit-content"}}>
      <h2 style={{textAlign: "center"}}>{likes}</h2>
      <button onClick={()=>dispatch(incrementLike())}>Like</button>
      <button onClick={()=>dispatch(decrementLike())}>Unlike</button>
    </div>
  )
}

export default App
