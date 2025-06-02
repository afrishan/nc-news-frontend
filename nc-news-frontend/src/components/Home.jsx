import {useEffect, useState} from "react"
import Header from "./Header"
import Footer from "./Footer"
import { getAllArticles } from "../api"

function Home (setIsLoading){

    useEffect (()=> {
        setIsLoading(true)
        
        getAllArticles()
        .then(({articles})=>{
            console.log(articles)
            setIsLoading(false)
        })
        .catch(({message}) => {
        setError(message)
        setIsLoading(false);

      });

    }, [])
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