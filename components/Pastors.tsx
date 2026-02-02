const Pastors = () => {
    return (
        <div className="text-white">
            <div className="bg-black bg-cover bg-center mt-[50px] lg:mx-[50px] py-[30px] lg:py-[50px] pl-[20px] lg:pl-[50px] px-2.5">
                <div className="max-w-[1140px] mx-auto">
                    <h2 className="font-fashand text-[48px] text-[#F63B00]">Our Pastors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[20px]">
                        <div className="bg-[url('/pjk.jpg')] bg-cover bg-center min-h-[435px] rounded-[10px] flex flex-col justify-end overflow-hidden">
                            <div className="h-[60px] w-full bg-linear-to-t from-black/90 to-transparent p-2.5 leading-[18px]">
                                <p className="text-[16px]">Pastor Joshua Kesena
                                    <br />
                                    <span className="text-[12px]">Resident Pastor, CCI Benin</span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-[url('/pok.jpg')] bg-cover bg-center min-h-[435px] rounded-[10px] flex flex-col justify-end overflow-hidden">
                            <div className="h-[60px] w-full bg-linear-to-t from-black/90 to-transparent p-2.5 leading-[18px]">
                                <p className="text-[16px]">Pastor Opeyemi Kesena
                                    <br />
                                    <span className="text-[12px]">CCI Benin</span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-[url('/ptosh.jpg')] bg-cover bg-center min-h-[435px] rounded-[10px] flex flex-col justify-end overflow-hidden">
                            <div className="h-[60px] w-full bg-linear-to-t from-black/90 to-transparent p-2.5 leading-[18px]">
                                <p className="text-[16px]">Pastor Oluwatobi Osho
                                    <br />
                                    <span className="text-[12px]">CCI Benin</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Pastors