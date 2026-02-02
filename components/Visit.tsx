const Visit = () => {
    return (
        <div className="text-white">
            <div className="min-h-[880px] lg:min-h-[99vh] bg-[url('/default-visit.png')] bg-cover bg-center mt-[50px] lg:mx-[50px] pt-[30px] lg:pt-[220px] pl-[20px] lg:pl-[50px] px-2.5">

                <div>
                    <div className="flex flex-col gap-[20px] p-2.5 lg:py-[20px] lg:px-[10px]">
                        <h2 className="font-anton text-[48px] leading-[72px]">
                            JOIN US <br />
                            THIS SUNDAY
                        </h2>
                        <p>
                            You're welcome to join us at our campus and experience <br />
                            progress and joy in the faith. Long-time believers or just <br />
                            curious? We look forward to seeing you this Sunday!
                        </p>
                        <div className="bg-[#FFFFFF1F] h-px w-full "></div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col lg:flex-row w-full p-2.5 gap-5">
                        <div className="p-2.5 flex flex-col gap-5 w-1/2">
                            <svg aria-hidden="true" className="fill-[#F63B00] w-[20px] h-[20px]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                            <h3 className="text-[#F3F3F3] text-[24px] font-semibold">Location</h3>
                            <p className="text-[#EBEDF0] text-[16px] mb-[14.4px]">Vannette's Place Event Centre</p>
                        </div>
                        <div className="p-2.5 flex flex-col gap-5 w-1/2">
                            <svg aria-hidden="true" className="fill-[#F63B00] w-[20px] h-[20px]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                            <h3 className="text-[#F3F3F3] text-[24px] font-semibold">Service Times</h3>
                            <p className="text-[#EBEDF0] text-[16px] mb-[14.4px]">Sundays by 09:00 AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visit