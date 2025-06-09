import {useEffect, useState} from "react"
import Header from "./Header"
import Footer from "./Footer"
import { getAllArticles } from "../api"

function Home ({setIsLoading}){
    const [articlesList, setArticlesList] = useState([])
    useEffect (()=> {
        setIsLoading(true)
        
        getAllArticles()
        .then(({articles})=>{
            setArticlesList(articles)
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
        {articlesList.map((article)=>{
            return <li key={article.article_id}> {article.title} </li>
        })
}
        </div>
        <Footer />
        </ section>
    )
}

export default Home