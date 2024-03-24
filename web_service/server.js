const express = require('express');
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

app.get('/summary/:podcastId/:episodeId', (req, res) => {
  podcastId = req.params.podcastId
  episodeId = req.params.episodeId
  console.log("call get podcastId:"+podcastId+", episodeId:"+episodeId)

  const summary_info = {
      '123': {
          '5': {
              'english': { 
                'text': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
                'audio': "http://ec2-34-212-30-186.us-west-2.compute.amazonaws.com:8080/audio/mit_ai_greg_brockman.mp3"
              },
              'spanish': {
                'text': "Es importante cuidar al paciente, ser seguido por el paciente, pero sucederá en un momento en el que hay mucho trabajo y dolor. Porque, para llegar al más mínimo detalle, nadie debe practicar ningún tipo de trabajo a menos que obtenga algún beneficio de él. No se enfade con el dolor en la reprimenda en el placer quiere ser un pelo del dolor con la esperanza de que no haya cría. A menos que estén cegados por la lujuria, no salen adelante, son culpables los que cumplen con su deber.",
                'audio': "http://ec2-34-212-30-186.us-west-2.compute.amazonaws.com:8080/audio/spanish/12-cosas-interesantes-sobre-Nicaragua.mp3"
              }
          }
      }
    }

  summary = summary_info[podcastId][episodeId]

  res.send(JSON.stringify(summary));
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
