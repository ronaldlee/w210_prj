const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.get('/podcasts_info', (req, res) => {

  const podcasts_info =
    [
        {
          'podcast_id': 123,
          'thumbnail': '/assets/podthumb_small_lex.png',
          'title': 'Lex Fridman Podcast',
          'org': 'Lex Fridman'
        },
        {
          'podcast_id': 456,
          'thumbnail': '/assets/podthumb_small_tcrunch.png',
          'title': 'TC Daily Crunch',
          'org': 'TechCrunch'
        },
        {
          'podcast_id': 789,
          'thumbnail': '/assets/podthumb_small_dailytech.png',
          'title': 'Daily Tech News Show',
          'org': 'Tom Merrit'
        },
        {
          'podcast_id': 1011,
          'thumbnail': '/assets/podthumb_small_techsideline.png',
          'title': 'The Tech Sideline Podcast',
          'org': 'Techsideline.com'
        }
    ]

  res.send(JSON.stringify(podcasts_info));
});


app.get('/podcast/:podcastId', (req, res) => {
  podcastId = req.params.podcastId
  console.log("call get podcast: id:"+podcastId)

  const podcast_info = {
      '123': {
        'profile_pic': '/assets/podprofile_lex.png',
        'episodes': [
            {
              'episode_id': 5,
              'thumbnail': '/assets/podthumb_small_lex.png',
              'name': '#5 - Statistical Learning',
              'length': '1h 40min',
              'release_date': '22 Feb 2022'
            },
            {
              'episode_id': 4,
              'thumbnail': '/assets/podthumb_small_lex.png',
              'name': '#4 - Deep Learning',
              'length': '1h 23min',
              'release_date': '3 Jan 2022'
            }
        ]
      }
    }

  podcast = podcast_info[podcastId]

  res.send(JSON.stringify(podcast));
});


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
