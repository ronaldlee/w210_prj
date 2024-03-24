// @ts-nocheck
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

/**
Podcast profile pic
    <img className="w-[375px] h-[520px] left-0 top-0 absolute rounded-tl-[32px] rounded-tr-[32px]" src="https://via.placeholder.com/375x520" />
    <img className="w-[375px] h-[520px] left-0 top-0 absolute rounded-tl-[32px] rounded-tr-[32px]" src="../assets/podprofile_lex.png" />
    <img className="w-[375px] h-[520px] left-0 top-0 absolute rounded-tl-[32px] rounded-tr-[32px]" src={podcast_info[podcastId]['profile_pic']} />


Podcast thumb:
                <img className="w-[78px] h-[77px] rounded-[10px]" src="https://via.placeholder.com/78x77" />
                <img className="w-[78px] h-[77px] rounded-[10px]" src="../assets/podthumb_small_lex.png" />

Play button
                <div className="w-8 h-8 relative flex-col justify-start items-start flex" />
                <div className="w-8 h-8 relative flex-col justify-start items-start flex"><img src='../assets/PlayButtonIcon.svg'/></div>

AI icon
                    <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex" />
                    <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex"><img src='../assets/AiIcon.svg'/></div>

Back button
        <div className="w-[53px] h-[52px] relative" />
        <div className="w-[53px] h-[52px] relative"><img src="../assets/BackButton.svg"/></div>

Home Button
                <div className="w-6 h-6 px-[2.50px] py-0.5 justify-center items-center inline-flex" />
                <div className="w-6 h-6 px-[2.50px] py-0.5 justify-center items-center inline-flex" ><img src = "../assets/HomeButtonIcon.svg"/></div>

Profile Button
                <div className="w-6 h-6 pl-[4.81px] pr-[4.85px] pt-[2.81px] pb-[2.78px] justify-center items-center inline-flex">
                    <div className="w-[14.34px] h-[18.41px] relative">
                    </div>
                </div>
                <div className="w-6 h-6 px-[2.50px] py-0.5 justify-center items-center inline-flex" ><img src = "../assets/ProfileButtonIcon.svg"/></div>
*/


function Podcast() {
  const [podcastInfo, setPodcastInfo] = useState(
    {
        'profile_pic': '',
        'episodes': []
    }
  )
  const { podcastId } = useParams()
  const host='https://ec2-34-212-30-186.us-west-2.compute.amazonaws.com:5173/'

  useEffect( () => {
    async function fetchData() {
      const {data: podcast_info} = await axios.get('https://ec2-34-212-30-186.us-west-2.compute.amazonaws.com:8080/podcast/'+podcastId);

      setPodcastInfo(podcast_info)

    }
    fetchData()
  }, [podcastId]);

  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }

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
                <div className="w-6 h-6 px-[2.50px] py-0.5 justify-center items-center inline-flex" ><img src = {host+"/assets/ProfileButtonIcon.svg"}/></div>
                <div className="w-[52px] text-center text-stone-300 text-[10px] font-medium font-['Poppins']">Profile</div>
            </div>
        </div>
    </div>
    <div className="w-[375px] h-[727px] left-0 top-0 absolute">
        <img className="w-[375px] h-[393px] left-0 top-0 absolute rounded-tl-[32px] rounded-tr-[32px]" src={host+podcastInfo['profile_pic']} />
        <div className="left-[24px] top-[422px] absolute text-neutral-800 text-lg font-semibold font-['Poppins']">All Episodes</div>
        <div className="left-[24px] top-[478px] absolute flex-col justify-start items-start gap-4 inline-flex">

            {podcastInfo['episodes'].map(episode =>
            <div className="w-[327px] h-[101px] justify-between items-start inline-flex">
                <div className="w-[327px] h-[101px] justify-start items-start gap-3.5 flex">
                    <img className="w-[78px] h-[77px] rounded-[10px]" src={host+episode.thumbnail} />
                    <div className="w-[189px] h-[99px] flex-col justify-start items-start gap-2 inline-flex">
                        <div className="w-[175px] text-neutral-800 text-base font-medium font-['Poppins'] leading-snug">{episode.name}</div>
                        <div className="text-neutral-400 text-xs font-medium font-['Poppins']">{episode.length} • {episode.release_date}</div>
                        <div className="pr-[11px] pt-[0.50px] pb-[11.50px] justify-start items-center inline-flex">
                            <img className="w-[178px] h-2.5 rounded-[5px]" src="https://via.placeholder.com/178x10" />
                        </div>
                    </div>
                </div>
                <div className="pl-[13.50px] flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="w-8 h-8 relative flex-col justify-start items-start flex"><img src={host+"/assets/PlayButtonIcon.svg"}/></div>
                    <div onClick={() => routeChange(`/summary/${podcastId}/${episode.episode_id}`)} className="self-stretch h-[35px] pl-0.5 pt-[3px] pb-0.5 bg-neutral-700 rounded-[10px] flex-col justify-center items-center inline-flex">
                        <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex"><img src={host+"/assets/AiIcon.svg"}/></div>
                    </div>
                </div>
            </div>
            )}

        </div>
    </div>
    <div className="w-[69px] h-[82px] p-[5px] left-[5px] top-[12px] absolute opacity-80 justify-center items-center gap-2.5 inline-flex">
        <div onClick={() => routeChange(`/`)} className="w-[53px] h-[52px] relative"><img src={host+"/assets/BackButton.svg"}/></div>
    </div>
</div>
</div>
  )
}

export default Podcast
