import React, {useEffect, useState} from "react";


function App(){
    const [isLoaded,setIsLoaded]=useState(false)
    const [image,setImages]=useState([])
    // const [error, setError]=useState(null)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then((result)=>{
            setIsLoaded(true)
            setImages(result)
        },
        /*(error)=>{
            setIsLoaded(true)
            setError(error)
        }*/
        )
        
    },[])
    if /*(error) {
        return <div>Error: {error.message}</div>
    } else if*/ (!isLoaded) {
        return <p>Loading...</p>
    } else {
        return (
            <div>
                <img src={image.message} alt="A Random Dog"></img>
            </div>
        )
    }
}

export default App
