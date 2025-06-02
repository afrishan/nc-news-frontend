import {useEffect, useState} from "react"
import Header from "./Header"
import Footer from "./Footer"

function Home (setIsLoading){

    useEffect (()=> {
        setIsLoading(true)
        .then(()=>{
            
        })

    })
    return(
        <section>
        <Header />
        <div>

        </div>
        <Footer />
        </ section>
    )
}

export default Home