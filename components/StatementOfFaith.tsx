const StatementOfFaith = () => {
    return (
        <div className="container md:mx-auto md:px-4 pt-[50px] max-w-[1140px]">
            <div className="grid grid-cols-1 h-fit md:grid-cols-2 md:gap-8 items-start">
                {/* Left side - Animated fadeInLeft */}
                <div className="h-full">
                    <div className="flex h-full flex-col p-2.5 md:p-0 grow justify-center text-[28px] md:text-5xl lg:text-[53px] font-anton font-bold leading-tight">
                        <p className="px-[30px] lg:px-0">
                            OUR STATEMENT OF {" "}
                            <span className="text-cci-red">FAITH</span>
                        </p>
                    </div>
                </div>

                {/* Right side - Animated fadeInRight */}
                <p className="mb-[14.4px] px-[30px] md:px-0 text-base leading-[37px]">
                    Our greatest success story at Celebration Church has been the 'grace' to effectively evangelize, make disciples of, and deploy people who once upon a time were mere seekers, as mature disciples and vibrant ministers of the gospel.
                </p>
            </div>
        </div>
    )
}

export default StatementOfFaith