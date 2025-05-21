import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import Home from "./components/Home"
import ArticleView from "./components/ArticleView"
import EditArticle from "./components/EditArticle"
import Profile from "./components/Profile"

function App() {

  return (
    <div className="App">
      <h1>NC News</h1>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:article_id" element={<ArticleView />} />
      <Route path="/edit/:article_id" element={<EditArticle />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </ div>
  )
}

export default App
