import EarthIcon from "@/SVGs/EarthIcon"
import Link from "next/link"

const MAP = () => {
    return (
        <div className="bg-[#FFF4F4] w-full">
            <div className="max-w-[1140px] mx-auto py-[50px] flex flex-col gap-y-5 items-center justify-center min-h-[60vh]">
                <div className="flex flex-col gap-y-5 items-center">
                    <div className="bg-[#F4F4F4] w-fit text-[10px] font-lato font-normal px-3 py-2 rounded-[20px] flex items-center  gap-2">
                        <EarthIcon width={14} height={14} />
                        M A P
                    </div>
                    <div className="flex h-full flex-col p-2.5 md:p-0 grow justify-center text-[28px] md:text-5xl lg:text-[42px] tracking-[3.7px] font-anton font-bold leading-tight">
                        <p className="text-center">
                            REMEMBER TO {" "}
                            <span className="text-cci-red">JOIN A MAP</span>
                        </p>
                    </div>
                    <p className="text-center text-[#54595F]">
                        Members who live close meets and pray.
                    </p>
                    <div>
                        <Link href="https://joincci.org/map" className="bg-[#F63B00] text-white px-5 py-2 rounded-[20px]">
                            Click to join a MAP
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MAP