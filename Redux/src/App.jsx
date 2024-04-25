import { useDispatch, useSelector } from "react-redux"
import { decrementLike, incrementLike } from "./reduxStore/action"

function App() {
  const dispatch = useDispatch()
  const likes = useSelector(state=>state.likes)
  console.log(likes);

  return (
    <>
      <h2>{likes}</h2>
      <button onClick={()=>dispatch(incrementLike())}>Like</button>
      <button onClick={()=>dispatch(decrementLike())}>Unlike</button>
    </>
  )
}

export default App
