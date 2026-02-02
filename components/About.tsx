import EarthIcon from "@/SVGs/EarthIcon"

const About = () => {
    return (
        <div className="container md:mx-auto md:px-4 pt-[50px] max-w-[1140px]">
            <div className="flex flex-col md:flex-row h-fit  md:gap-8 items-start">
                {/* Left side - Animated fadeInLeft */}
                <div className="h-full">
                    <div className="flex h-full flex-col p-2.5 md:pt-10 gap-y-5 grow justify-center text-nowrap text-[28px] md:text-5xl lg:text-[70px] font-anton font-bold leading-tight">
                        <div className="bg-[#F4F4F4] w-[150px] text-[10px] font-lato font-normal px-3 py-2 rounded-[20px] flex items-center gap-2">
                            <EarthIcon width={14} height={14} />
                            ABOUT CCI BENIN
                        </div>
                        <p className="px-[30px] lg:px-0">
                            WE SERVE GOD {" "} <br />
                            <span className="text-cci-red">BY HIS SPIRIT</span>
                        </p>
                    </div>
                </div>

                {/* Right side - Animated fadeInRight */}
                <p className="mb-[14.4px] md:w-1/3 px-[30px] md:px-0 text-base leading-[37px] text-justify">
                    Celebration Church International Benin City is one of the campuses of Celebration Church International, established in 2023 with the same enduring vision, to see all men celebrating endless life in Christ Jesus. As part of the CCI Global family, the church remains focused on enlisting and equipping believers to live in Christ, for Christ, and to be redeployed to make even more disciples.
                </p>
                <p className="mb-[14.4px] md:w-1/3 px-[30px] md:px-0 text-base leading-[37px] text-justify">
                    Under the leadership of Pastor Joshua Kesena, the Benin City campus is committed to raising men for the Kingdom through sound doctrine, Spirit-led worship, and intentional discipleship. <br />
                    Got anything confidential you&apos;d love to ask or share with Pastor Josh? Please send an email to pjk@joincci.org.
                </p>
            </div>
        </div>
    )
}

export default About