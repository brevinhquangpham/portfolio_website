import React from 'react'
import NavBar from '../components/NavBar'
import Project from '../components/Project'
import Line from '../components/Line'

function HomePage() {
    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row justify-between">
                <div className='md:flex-grow md:w-[45%] md:pl-16 md:pt-24 md:space-y-4'>
                    <div className="flex flex-col justify-center md:justify-start">
                        <h1 className="text-black text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-josefin font-semibold">
                            Brevypoo
                        </h1>
                        <p className="font-josefin text-body_text leading-none">I’m a creative designer pursuing UXUI research, design and related artistic fields. Currently I’m finishing my degree in Interdisciplinary Computing and the Arts at UC San Diego. :)
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pr-10">
                    <img src="/images/eva.jpg" alt="Eva" className="w-72 h-auto border-black border-2" />
                </div>
            </div>
            <div className="mx-auto flex justify-center items-center">
                <div>
                    <div className="flex flex-col items-center justify-center gap-0 h-96">
                        <h1 className="text-headers text-2xl font-cram">Portfolio</h1>
                        <img src="/images/ArrowDownCircle.svg" alt="yo" className="w-12 h-12" />
                    </div>
                </div>
            </div>
            <Project imgSrc="/images/Original_Doge_meme.jpg" headerText="Warframe Market Analyzer" date="6/4/04" bodyText="I absolutely love Dogecoin! It's not just another cryptocurrency; it's a symbol of the fun and camaraderie that exists within the crypto community. Originally started as a joke, Dogecoin quickly developed a loyal following thanks to its friendly mascot, a Shiba Inu. This crypto brings a lighter touch to the often too-serious world of finance, promoting generosity and tipping culture over speculation. It’s incredible to see how this fun meme coin has not only survived but thrived, bringing joy and a sense of humor to the blockchain space." />
            <Project imgSrc="/images/Original_Doge_meme.jpg" headerText="Warframe Market Analyzer" date="6/4/04" bodyText="I absolutely love Dogecoin! It's not just another cryptocurrency; it's a symbol of the fun and camaraderie that exists within the crypto community. Originally started as a joke, Dogecoin quickly developed a loyal following thanks to its friendly mascot, a Shiba Inu. This crypto brings a lighter touch to the often too-serious world of finance, promoting generosity and tipping culture over speculation. It’s incredible to see how this fun meme coin has not only survived but thrived, bringing joy and a sense of humor to the blockchain space." />
            <Project imgSrc="/images/Original_Doge_meme.jpg" headerText="Warframe Market Analyzer" date="6/4/04" bodyText="I absolutely love Dogecoin! It's not just another cryptocurrency; it's a symbol of the fun and camaraderie that exists within the crypto community. Originally started as a joke, Dogecoin quickly developed a loyal following thanks to its friendly mascot, a Shiba Inu. This crypto brings a lighter touch to the often too-serious world of finance, promoting generosity and tipping culture over speculation. It’s incredible to see how this fun meme coin has not only survived but thrived, bringing joy and a sense of humor to the blockchain space." />
        </div>
    )
}

export default HomePage
