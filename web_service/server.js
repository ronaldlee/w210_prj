const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.static('public'));

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
              'episode_id': 12,
              'thumbnail': '/assets/podthumb_small_lex.png',
              'name': '#12 - Poker and Game Theory',
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

app.get('/summary/:podcastId/:episodeId', (req, res) => {
  const { podcastId, episodeId } = req.params;
  console.log(`call get podcastId: ${podcastId}, episodeId: ${episodeId}`);

  const englishTextFilePath = path.join(__dirname, 'public', 'text', 'english', `ep${episodeId}.txt`);

  if (!fs.existsSync(englishTextFilePath)) {
    return res.status(404).send("Text file not found");
  }

  fs.readFile(englishTextFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Failed to read file:", err);
      return res.status(500).send("Error reading text file");
    }

    const summary = {
      'english': {
        'text': data,
        'audio': `http://localhost:8080/audio/english/ep${episodeId}.mp3`
      }
    };

    res.json(summary); // This sets the correct Content-Type header for JSON
  });
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
