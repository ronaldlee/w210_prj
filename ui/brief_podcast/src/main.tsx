import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PodcastMain from './PodcastMain'
import Podcast from './Podcast'
import PodcastSummary from './PodcastSummary'
import './index.css'

/**
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PodcastSummary />
  </React.StrictMode>,
)
*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<PodcastMain/>} />
    <Route exact path="/podcast/:podcastId" element={<Podcast/>} />
    <Route path="/summary" element={<PodcastSummary/>} />
  </Routes>
  </BrowserRouter>
,
)
