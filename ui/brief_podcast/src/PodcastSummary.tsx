import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/**
Pod Summary profile pic
    <img className="w-[375px] h-40 rounded-tl-[32px] rounded-tr-[32px]" src="https://via.placeholder.com/375x160" />
    <img className="w-[375px] h-40 rounded-tl-[32px] rounded-tr-[32px]" src="../assets/PodcastSummaryProfile.png" />

Ai Icon
        <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex" />
        <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex"><img src="../assets/AiIcon.svg"/></div>

Language dropdown arrow
        <div className="w-5 h-5 left-[109px] top-[8px] absolute" />
        <div className="w-5 h-5 left-[109px] top-[8px] absolute"><img src="../assets/LanguageDropdownArrow.svg"/></div>

Play summary button
        <div className="w-[310px] h-[72px] left-[21px] top-[486px] absolute justify-between items-center inline-flex">
            <div className="w-[54px] h-[54px] relative"/>
        </div>

        <div className="w-[310px] h-[72px] left-[21px] top-[486px] absolute justify-center items-center inline-flex">
            <div className="w-[54px] h-[54px] relative"><img src="../assets/PlaySummaryButton.svg"/></div>
        </div>
*/

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="w-full h-[910px] p-2.5 bg-slate-400 flex-col justify-center items-center gap-2.5 inline-flex">
<div className="w-[375px] h-[812px] relative bg-white rounded-[32px]">
    <div className="w-40 h-[29px] left-[48px] top-[200px] absolute text-neutral-800 text-lg font-semibold font-['Poppins']">Summarization<br/></div>
    <img className="w-[375px] h-40 rounded-tl-[32px] rounded-tr-[32px]" src="../assets/PodcastSummaryProfile.png" />
    <div className="w-[356px] left-[7px] top-[168px] absolute text-neutral-800 text-base font-medium font-['Poppins'] leading-snug">#5 - Statistical Learning</div>
    <div className="w-8 pl-0.5 pt-[3px] pb-0.5 left-[7px] top-[196px] absolute bg-neutral-700 rounded-[10px] flex-col justify-center items-center inline-flex">
        <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex"><img src="../assets/AiIcon.svg"/></div>
    </div>
    <div className="w-[138px] h-[34px] left-[213px] top-[197px] absolute bg-zinc-300 rounded-[5px]">
        <div className="w-[101px] h-[13px] left-[15px] top-[6px] absolute text-black text-[15px] font-semibold font-['Poppins']">English</div>
        <div className="w-5 h-5 left-[109px] top-[8px] absolute"><img src="../assets/LanguageDropdownArrow.svg"/></div>
    </div>
    <div className="w-[375px] h-[570px] left-0 top-[242px] absolute bg-neutral-600 rounded-bl-[32px] rounded-br-[32px]">
        <div className="w-80 h-[417px] left-[22px] top-[20px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-80 h-[417px] text-white text-lg font-semibold font-['Poppins'] leading-[25.20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod.</div>
        </div>
        <div className="w-[310.70px] h-[43.92px] left-[22.65px] top-[437.08px] absolute">
            <div className="w-[34.64px] h-[23.25px] left-0 top-[20.67px] absolute text-white text-xs font-medium font-['Poppins']">23:23</div>
            <div className="w-[43.30px] h-[23.25px] left-[267.39px] top-[20.67px] absolute text-right text-white text-xs font-medium font-['Poppins']">1:20:53</div>
            <div className="w-[310.70px] h-[15.50px] left-0 top-0 absolute">
                <div className="w-[310.70px] h-[5.17px] left-0 top-[5.17px] absolute bg-white bg-opacity-25 rounded-[20px]" />
                <div className="w-[110.42px] h-[5.17px] left-0 top-[5.17px] absolute bg-white rounded-[20px]" />
                <div className="w-[12.99px] h-[15.50px] left-[103.93px] top-[-0px] absolute bg-white rounded-full" />
            </div>
        </div>
        <div className="w-[310px] h-[72px] left-[21px] top-[486px] absolute justify-center items-center inline-flex">
            <div className="w-[54px] h-[54px] relative"><img src="../assets/PlaySummaryButton.svg"/></div>
        </div>
    </div>
</div>
</div>
  )
}

export default App
