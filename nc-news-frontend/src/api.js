import axios from "axios"

const api = axios.create({
    baseURL: "https://nc-news-lkc8.onrender.com/api"
});

export const getAllArticles = () => {
    return api.get("/articles").then(({data})=>{
        return data
    })
}

export default api