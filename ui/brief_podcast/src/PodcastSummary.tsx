// @ts-nocheck
import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Select from 'react-select'



function PodcastSummary() {
  const [summaryData, setSummaryData] = useState(
    {
      'english': {
        'text': "",
        'audio': ""
      },
      'spanish': {
        'text': "",
        'audio': ""
      },
      'chinese': {
        'text': "",
        'audio': ""
      }
    }
  )

  const [summary, setSummary] = useState('')
  const [summaryAudio, setSummaryAudio] = useState('')
  const [lang, setLang] = useState('english')

  const audioRef = useRef(null);
  const [activeCue, setActiveCue] = useState(null);


  const { podcastId, episodeId } = useParams()
  const host='http://localhost:5173/'
  const serverHost='http://localhost:8080/'

  useEffect( () => {
    async function fetchData() {
      const {data: summary_data} = await axios.get('http://localhost:8080/summary/'+podcastId+'/'+episodeId);
      setSummaryData(summary_data)
      setLang('english')
      setSummary(summary_data['english']['text'])
      setSummaryAudio(summary_data['english']['audio'])
    }
    fetchData()
  }, [podcastId, episodeId]);


  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('loadedmetadata', () => {
        const textTrack = audio.textTracks[0];
        console.log(textTrack)
        textTrack.mode = 'showing';
        textTrack.oncuechange = () => {
          console.log('Cues have changed');
          const activeCues = textTrack.activeCues;
          setActiveCue(activeCues && activeCues.length > 0 ? activeCues[0].text : "");
          console.log(activeCues); 
        };
      });
    }
  
    return () => {
      if (audio) {
        const textTrack = audio.textTracks[0];
        if (textTrack) {
          textTrack.oncuechange = null;
        }
      }
    };
  }, []);
  
  
  

  let navigate = useNavigate();
  const routeChange = (path) =>{
    navigate(path);
  }

  const translation_options = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'chinese', label: 'Chinese' }
  ]

  function changeLanguage(event){
    setLang(event.value)
    setSummary(summaryData[event.value]['text'])
    setSummaryAudio(summaryData[event.value]['audio'])
  }  

  const TranslationSelect = () => (
    <Select options={translation_options} onChange={changeLanguage}/>
  )

  return (
<div className="w-screen h-screen p-2.5 bg-slate-400 flex-col justify-center items-center gap-2.5 inline-flex">
<div className="w-[375px] h-[812px] relative bg-white rounded-[32px]">
    <div className="w-[375px] h-[79px] left-0 top-[733px] absolute">
        <div className="w-[375px] h-[79px] left-0 top-0 absolute bg-white rounded-bl-[32px] rounded-br-[32px] shadow" />
        <div className="w-[315px] h-[43px] left-[30px] top-[12.51px] absolute justify-between items-center inline-flex">
            <div className="flex-col justify-start items-center gap-1 inline-flex">
                <div onClick={() => routeChange(`/`)} className="w-6 h-6 px-[2.50px] py-0.5 justify-center items-center inline-flex"><img src = {host+"/assets/HomeButtonIcon.svg"}/></div>
                <div className="w-[52px] text-center text-slate-500 text-[10px] font-semibold font-['Poppins']">Home</div>
            </div>
            <div className="flex-col justify-start items-center gap-1 inline-flex">
                <div className="w-6 h-6 pl-[4.81px] pr-[4.85px] pt-[2.81px] pb-[2.78px] justify-center items-center inline-flex"><img src = {host+"/assets/ProfileButtonIcon.svg"}/></div>
                <div className="w-[52px] text-center text-stone-300 text-[10px] font-medium font-['Poppins']">Profile</div>
            </div>
        </div>
    </div>
    <div className="w-[375px] h-[727px] left-0 top-0 absolute rounded-tl-[32px] rounded-tr-[32px]">
        <div className="w-40 h-[29px] left-[48px] top-[200px] absolute text-neutral-800 text-lg font-semibold font-['Poppins']">Summarization<br/></div>
        <img className="w-[375px] h-40 left-0 top-0 absolute rounded-tl-[32px] rounded-tr-[32px]" src={host+"/assets/PodcastSummaryProfile.png"}/>
        <div className="w-[356px] left-[7px] top-[168px] absolute text-neutral-800 text-base font-medium font-['Poppins'] leading-snug">#12 - Poker and Game Theory</div>
        <div className="w-8 pl-0.5 pt-[3px] pb-0.5 left-[7px] top-[196px] absolute bg-neutral-700 rounded-[10px] flex-col justify-center items-center inline-flex">
            <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex"><img src={host+"/assets/AiIcon.svg"}/></div> 
        </div>
        <div className="w-[138px] h-[34px] left-[213px] top-[197px] absolute bg-zinc-300 rounded-[5px]">
            {TranslationSelect()}
        </div>
        <div className="w-[375px] h-[485px] left-0 top-[242px] absolute bg-neutral-600">
          <div className="absolute top-[20px] left-[22px] w-80 h-[370px] overflow-y-auto flex flex-col items-start justify-start">
                <div className="w-80 h-[327px] text-white text-lg font-semibold font-['Poppins'] leading-[25.20px]">
                {summaryData[lang]['text'].split(/\s+/).map((word, index) => {
                  const isCueActive = activeCue && activeCue.text.includes(word);
                  return (
                    <span key={index} style={{ backgroundColor: isCueActive ? 'yellow' : 'transparent' }}>
                      {word + ' '}
                    </span>
                  );
                })}
                </div>
            </div>
            <div className="w-[310px] h-[72px] left-[33px] top-[400px] absolute justify-center items-center inline-flex">
              <audio controls src={summaryAudio} ref={audioRef}>
                <track kind="captions" src={`${serverHost}/vtt/${lang}/ep${episodeId}.vtt`} default />
              </audio>
            </div>
        </div>
    </div>
    <div className="w-[69px] h-[82px] p-[5px] left-[5px] top-[12px] absolute opacity-80 justify-center items-center gap-2.5 inline-flex">
        <div onClick={() => routeChange(`/podcast/${podcastId}`)} className="w-[53px] h-[52px] relative"><img src={host+"/assets/BackButton.svg"}/></div>
    </div>
</div>
</div>
  )
}

export default PodcastSummary
