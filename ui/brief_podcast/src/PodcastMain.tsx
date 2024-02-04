import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/**
App Logo
            <img className="w-[37px] h-[34px] left-0 top-[13px] absolute" src="https://via.placeholder.com/37x34" />
            <img className="w-[37px] h-[34px] left-0 top-[13px] absolute" src="../assets/AppLogo.svg" />

Magnify glass icon
            <div className="w-5 h-5 pr-[0.29px] pb-[0.29px] justify-center items-center flex" />
            <div className="w-5 h-5 pr-[0.29px] pb-[0.29px] justify-center items-center flex" ><img src = "../assets/magnify_glass.svg"/></div>

Play Button icon
                <div className="w-8 h-8 relative" />
                <div className="w-8 h-8 relative" ><img src="../assets/PlayButtonIcon.svg"/> </div>

podcast thumb:
                    <img className="w-[78px] h-[77px] rounded-[10px]" src="https://via.placeholder.com/78x77" />
                    <img className="w-[78px] h-[77px] rounded-[10px]" src="../assets/podthumb_small_lex.png" />
                    <img className="w-[78px] h-[77px] rounded-[10px]" src="../assets/podthumb_small_tcrunch.png" />
                    <img className="w-[78px] h-[77px] rounded-[10px]" src="../assets/podthumb_small_dailytech.png" />
                    <img className="w-[78px] h-[77px] rounded-[10px]" src="../assets/podthumb_small_techsideline.png" />

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

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="w-full h-[910px] p-2.5 bg-slate-400 flex-col justify-center items-center gap-2.5 inline-flex">
<div className="w-[375px] h-[812px] relative bg-white rounded-[32px]">
    <div className="w-[327px] left-[24px] top-[218px] absolute">
        <div className="w-[166px] h-[31.55px] left-0 top-0 absolute text-neutral-800 text-lg font-semibold font-['Poppins']">Available Podcast</div>
        <div className="w-[327px] h-[430.07px] left-0 top-[54.93px] absolute flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-[327px] justify-between items-center inline-flex">
                <div className="justify-start items-center gap-3.5 flex">
                    <img className="w-[78px] h-[77px] rounded-[10px]" src="../assets/podthumb_small_lex.png" />
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <div className="w-[175px] text-neutral-800 text-base font-medium font-['Poppins'] leading-snug">Lex Fridman Podcast</div>
                        <div className="text-neutral-400 text-xs font-medium font-['Poppins']">Lex Fridman</div>
                    </div>
                </div>
                <div className="w-8 h-8 relative" ><img src="../assets/PlayButtonIcon.svg"/> </div>
            </div>
            <div className="w-[327px] justify-between items-center inline-flex">
                <div className="justify-start items-center gap-3.5 flex">
                    <img className="w-[78px] h-[77px] rounded-[10px]" src="../assets/podthumb_small_tcrunch.png" />
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <div className="w-[175px] text-neutral-800 text-base font-medium font-['Poppins'] leading-snug">TC Daily Crunch</div>
                        <div className="text-neutral-400 text-xs font-medium font-['Poppins']">TechCrunch</div>
                    </div>
                </div>
                <div className="w-8 h-8 relative" ><img src="../assets/PlayButtonIcon.svg"/> </div>
            </div>
            <div className="w-[327px] justify-between items-center inline-flex">
                <div className="justify-start items-center gap-3.5 flex">
                    <img className="w-[78px] h-[77px] rounded-[10px]" src="../assets/podthumb_small_dailytech.png" />
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <div className="w-[175px] text-neutral-800 text-base font-medium font-['Poppins'] leading-snug">Daily Tech News Show</div>
                        <div className="text-neutral-400 text-xs font-medium font-['Poppins']">Tom Merritt</div>
                    </div>
                </div>
                <div className="w-8 h-8 relative" ><img src="../assets/PlayButtonIcon.svg"/> </div>
            </div>
            <div className="w-[327px] justify-between items-center inline-flex">
                <div className="justify-start items-center gap-3.5 flex">
                    <img className="w-[78px] h-[77px] rounded-[10px]" src="../assets/podthumb_small_techsideline.png" />
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <div className="w-[175px] text-neutral-800 text-base font-medium font-['Poppins'] leading-snug">The Tech Sideline Podcast</div>
                        <div className="text-neutral-400 text-xs font-medium font-['Poppins']">Techsideline.com</div>
                    </div>
                </div>
                <div className="w-8 h-8 relative" ><img src="../assets/PlayButtonIcon.svg"/> </div>
            </div>
        </div>
    </div>
    <div className="w-[375px] h-[101px] left-0 top-[711px] absolute">
        <div className="w-[375px] h-[101px] left-0 top-0 absolute bg-white rounded-bl-[32px] rounded-br-[32px] shadow" />
        <div className="w-[315px] h-[43px] left-[30px] top-[16px] absolute justify-between items-center inline-flex">
            <div className="flex-col justify-start items-center gap-1 inline-flex">
                <div className="w-6 h-6 px-[2.50px] py-0.5 justify-center items-center inline-flex" ><img src = "../assets/HomeButtonIcon.svg"/></div>
                <div className="w-[52px] text-center text-slate-500 text-[10px] font-semibold font-['Poppins']">Home</div>
            </div>
            <div className="flex-col justify-start items-center gap-1 inline-flex">
                <div className="w-6 h-6 px-[2.50px] py-0.5 justify-center items-center inline-flex" ><img src = "../assets/ProfileButtonIcon.svg"/></div>
                <div className="w-[52px] text-center text-stone-300 text-[10px] font-medium font-['Poppins']">Profile</div>
            </div>
        </div>
    </div>
    <div className="w-[327px] h-14 left-[24px] top-[136px] absolute">
        <div className="w-[327px] h-14 left-0 top-0 absolute bg-neutral-100 rounded-[14px]" />
        <div className="w-[230px] h-[21px] left-[20px] top-[16px] absolute justify-start items-center gap-2 inline-flex">
            <div className="w-5 h-5 pr-[0.29px] pb-[0.29px] justify-center items-center flex" ><img src = "../assets/magnify_glass.svg"/></div>
            <div className="text-stone-300 text-sm font-normal font-['Poppins']">Search podcast, author, etc...</div>
        </div>
    </div>
    <div className="h-[69px] left-[24px] top-[52px] absolute flex-col justify-start items-start gap-1 inline-flex">
        <div className="w-[321px] h-[47px] relative">
            <div className="left-[44px] top-[20px] absolute text-black text-xl font-semibold font-['Poppins']">Browse</div>
            <img className="w-[37px] h-[34px] left-0 top-[13px] absolute" src="../assets/AppLogo.png" />
        </div>
        <div className="text-neutral-400 text-xs font-normal font-['Poppins']">What you want to hear today?</div>
    </div>
</div>
</div>
  )
}

export default App
