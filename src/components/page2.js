import Marquee from "@/components/Marquee";

import gsapIcon from '@/assets/technologyIcons/gsap.svg'
import nextIcon from '@/assets/technologyIcons/next.svg'
import openGLIcon from '@/assets/technologyIcons/opengl.svg'
import reactIcon from '@/assets/technologyIcons/react.svg'
import tailwindIcon from '@/assets/technologyIcons/tailwind.svg'
import threeIcon from '@/assets/technologyIcons/three.svg'
import typescriptIcon from '@/assets/technologyIcons/typescript.svg'

const ICONS = [gsapIcon, nextIcon, openGLIcon, reactIcon, tailwindIcon, threeIcon, typescriptIcon]

const elements = [...ICONS, ...ICONS]

export default function Home() {
    return (
        <main className="flex flex-col justify-start items-start w-full min-h-screen">
            <section 
                className="relative flex flex-col justify-center items-start w-full h-screen z-0"
            >
                <Marquee ELEMENTS={elements} />
                <Marquee ELEMENTS={elements} />
                <Marquee ELEMENTS={elements} />
                {/* <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white border-solid rounded-full w-[300px] h-[300px] z-10"
                >
                    
                </div> */}
                {/* <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white border-solid rounded-full w-[300px] h-[300px] z-10 bg-gradient-to-r from-slate-900 to-blue-500"
                >
                </div> */}
            </section>
                {/* <button 
                        className="px-[20px] py-[5px] border-[3px] border-cyan-400 rounded-full"
                        
                >
                    <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                        Quiero impulsar mi negocio
                    </span>
                </button>                         */}
        </main>   
    )
}
