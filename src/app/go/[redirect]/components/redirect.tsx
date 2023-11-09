import Image from "next/image"
import React from "react"

import Typography from "@/components/Typography"

export default function Redirect() {
    return (
        <section className="w-full min-h-screen xl:min-h-screen sm:h-full overflow-hidden relative bg-secondary-60">
            <div className="flex justify-between w-full absolute">
                <Image width={161.7} height={157.86} src={'/images/redirect/left_star.svg'} alt="star" className="left-[-6%] sm:left-0 relative lg:w-[15%] lg:left-32 lg:top-10" />
                <Image width={161.7} height={157.86} src={'/images/redirect/right_star.svg'} alt="star" className="right-[-5%] sm:right-0 relative lg:w-[15%] lg:right-32 lg:top-10" />
            </div>

            <div className="relative flex flex-col items-center mt-48 sm:mt-44 sm:mb-68">
                <Image width={260} height={196.32} src={'/images/redirect/logos.svg'} alt="logo" className="sm:w-[350px]" />
                <Typography variant="h6" color="white" font="anton" className="text-center sm:text-[32px] ">
                    You are being redirected...
                </Typography>
                <div className="absolute bottom-0 flex justify-center">
                    <Image width={206.82} height={50.57} src={'/images/redirect/underline.svg'} alt="quot" className="relative top-10 sm:top-16 sm:w-[320px] md:w-[206.82px] md:top-10 lg:w-[300px] lg:top-[52px]" />
                </div>
            </div>

            <div className="flex justify-between w-full absolute bottom-0">
                <div className="flex items-end">
                    <Image width={164.25} height={220.48} src={'/images/redirect/turbine.svg'} alt="star" className="left-[-6%] sm:w-[80%] sm:-left-10 sm:-bottom-5 relative md:w-[220px] md:h-[300px] lg:w-[400px] lg:h-[400px]" />
                    <Image width={164.25} height={220.48} src={'/images/redirect/turbine.svg'} alt="star" className="left-[-6%] hidden md:inline sm:-left-[26%] sm:-bottom-3 relative lg:w-[280px] lg:h-[280px] " />
                </div>
                <div className="flex items-end">
                    <Image width={250} height={250} src={'/images/redirect/panels.svg'} alt="star" className="right-[-5%] hidden md:inline sm:top-24 sm:-right-24 relative lg:w-[350px] lg:h-[350px] lg:-right-56 lg:top-32" />
                    <Image width={250} height={250} src={'/images/redirect/panel.svg'} alt="star" className="right-[-5%] sm:h-[299px] sm:w-[299px] sm:right-5 relative sm:min-[920px]:-right-5 md:w-[299px] lg:-bottom-5 lg:w-[450px] lg:h-[450px] left-0" />
                </div>
            </div>
        </section>
    )
}