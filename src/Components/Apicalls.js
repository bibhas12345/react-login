import React,{useEffect,useState} from 'react'

function Apicalls() {
    const [data,setdata]=useState({})
    useEffect(() =>{
        fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote =>
        {
            setdata(quote)
           
        }
       )
    },[])
  return (
    <div>
        <h2>apicalls:</h2>
        <h3> Anime name: {data.anime}</h3>
        <h3>{data.character}</h3>
        <h3>{data.quote}</h3>
      
    </div>
  )
}

export default Apicalls;