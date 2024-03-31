const express = require('express');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.static('public'));

app.get('/service/podcasts_info', (req, res) => {

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


app.get('/service/podcast/:podcastId', (req, res) => {
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
              'length': '1h 6min',
              'release_date': '28 Dec 2018'
            },
            {
              'episode_id': 22,
              'thumbnail': '/assets/podthumb_small_lex.png',
              'name': '#22 - Tensorflow',
              'length': '1h 10min',
              'release_date': '3 Jun 2019'
            },
            // {
            //   'episode_id': 23,
            //   'thumbnail': '/assets/podthumb_small_lex.png',
            //   'name': '#23 - Adobe Research',
            //   'length': '1h 9min',
            //   'release_date': '10 Jun 2019'
            // },
            {
              'episode_id': 94,
              'thumbnail': '/assets/podthumb_small_lex.png',
              'name': '#94 - Deep Learning',
              'length': '1h 37min',
              'release_date': '8 May 2020'
            }
        ]
      }
    }

  podcast = podcast_info[podcastId]

  res.send(JSON.stringify(podcast));
});

app.get('/service/summary/:podcastId/:episodeId', async (req, res) => {
  const { podcastId, episodeId } = req.params;
  console.log(`call get podcastId: ${podcastId}, episodeId: ${episodeId}`);

  try {
    // Construct file paths for both English and Spanish text files
    const englishTextFilePath = path.join(__dirname, 'public', 'text', 'english', `ep${episodeId}.txt`);
    const spanishTextFilePath = path.join(__dirname, 'public', 'text', 'spanish', `ep${episodeId}.txt`);
    
    // Read both files asynchronously
    const [englishText, spanishText] = await Promise.all([
      fsPromises.readFile(englishTextFilePath, 'utf8'),
      fsPromises.readFile(spanishTextFilePath, 'utf8')
    ]);

    // Construct the summary object with both languages
    const summary = {
      'english': {
        'text': englishText,
        'audio': `ec2-34-212-30-186.us-west-2.compute.amazonaws.com/audio/english/ep${episodeId}.mp3`
      },
      'spanish': {
        'text': spanishText,
        'audio': `ec2-34-212-30-186.us-west-2.compute.amazonaws.com/audio/spanish/ep${episodeId}-spanish.mp3`
      }
    };

    res.json(summary);
  } catch (error) {
    console.error("Failed to read file:", error);
    res.status(500).send("Error reading text file");
  }
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
