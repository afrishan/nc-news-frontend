import {useEffect, useState} from "react"
import Header from "./Header"
import Footer from "./Footer"
import { getAllArticles } from "../api"
import ArticleCard from "../components/ArticleCard"

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
            <h2>Articles</h2>
        {articlesList.map((article)=>{
            return (<ArticleCard 
                    key={article.article_id} 
                    article={article}/>
            )

        })
}
        </div>
        <Footer />
        </ section>
    )
}

export default Home