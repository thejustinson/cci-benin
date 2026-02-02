"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { label: "Visit", href: "/#Visit" },
        { label: "About", href: "/#About" },
        { label: "Pastors", href: "/#Pastors" },
        { label: "M.A.P", href: "/#Map" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-black text-white backdrop-blur-sm shadow-sm transition-all duration-300">
            <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-[72px]">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link href="/">
                            {/* Using standard img tag as per snippet, handling external domain */}
                            <img
                                className="h-10 w-auto object-contain"
                                src="/LOGO.png"
                                alt="CCI Logo"
                                width={140}
                                height={40}
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-white hover:text-red-500 hover:underline decoration-2 underline-offset-4 px-3 py-2 text-sm font-medium transition-all"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Give Button (Desktop) & Mobile Toggle Wrapper - using flex to align */}
                    <div className="flex items-center gap-4">

                        {/* Give Button */}
                        <div className="hidden md:block">
                            <Link
                                href="/give/"
                                className="group flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
                            >
                                <span>
                                    <svg
                                        aria-hidden="true"
                                        className="h-4 w-4 fill-current"
                                        viewBox="0 0 576 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"></path>
                                    </svg>
                                </span>
                                Give
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="-mr-2 flex md:hidden z-55">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <svg aria-hidden="true" className="h-6 w-6 fill-current" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path></svg>
                                ) : (
                                    <svg aria-hidden="true" className="h-6 w-6 fill-current" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path></svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="w-screen h-screen overflow-y-auto bg-black fixed top-0 left-0 z-51">
                    <div className="flex flex-col py-11 px-5">
                        <div>
                            <ul className="font-anton font-black text-[40px] leading-[50px]">
                                <li className="hover:text-cci-red max-w-fit cursor-pointer" onClick={() => {
                                    toggleMenu();
                                    router.push('/');
                                }}>HOME</li>
                                <li className="hover:text-cci-red max-w-fit cursor-pointer" onClick={() => {
                                    toggleMenu();
                                    router.push('#about');
                                }}>ABOUT</li>
                                <li className="hover:text-cci-red max-w-fit cursor-pointer" onClick={() => {
                                    toggleMenu();
                                    router.push('#pastors');
                                }}>PASTORS</li>
                                <li className="hover:text-cci-red max-w-fit cursor-pointer" onClick={() => {
                                    toggleMenu();
                                    router.push('#quick-links');
                                }}>QUICK-LINKS</li>
                                <li className="hover:text-cci-red max-w-fit cursor-pointer" onClick={() => {
                                    toggleMenu();
                                    router.push('#sermons');
                                }}>SERMONS</li>
                                <li className="hover:text-cci-red max-w-fit cursor-pointer" onClick={() => {
                                    toggleMenu();
                                    router.push('#map');
                                }}>MAP</li>
                                <li className="hover:text-cci-red max-w-fit cursor-pointer" onClick={() => {
                                    toggleMenu();
                                    router.push('/give');
                                }}>GIVE</li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 mt-11">
                            <div>
                                <h4 className="text-[12px] tracking-[0.2em]">MINISTRIES</h4>
                                <ul className="flex flex-col gap-2 mt-5">
                                    <li>Membership Classes</li>
                                    <li>Celebrations</li>
                                    <li>Counseling</li>
                                    <li>Pre Marital Counseling</li>
                                    <li>Post Marital Counseling</li>
                                    <li>New Campus Volunteers</li>
                                    <li>Welfare Request</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[12px] tracking-[0.2em]">CONNECT</h4>
                                <ul className="flex flex-col gap-2 mt-5">
                                    <li>Become a member</li>
                                    <li>Prayer Request</li>
                                    <li>First Timers</li>
                                    <li>Second Timers</li>
                                    <li>Online Community</li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li>
                                        <p className="mb-2">Socials</p>
                                        <div className="flex items-center gap-4">
                                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#DF4E4E] transition-colors">
                                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#DF4E4E] transition-colors">
                                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                                                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
