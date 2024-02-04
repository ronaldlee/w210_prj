import React from 'react'
import ReactDOM from 'react-dom/client'
import PodcastMain from './PodcastMain.tsx'
import Podcast from './Podcast.tsx'
import PodcastSummary from './PodcastSummary.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PodcastSummary />
  </React.StrictMode>,
)
