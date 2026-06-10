import React, { useContext } from 'react'
import context from './Context';

const Home = () => {
  let data = useContext(Context)
    console.log("hellloooooooooo");
    
  return (
    <div> homeee</div>
  )
}

export default Home