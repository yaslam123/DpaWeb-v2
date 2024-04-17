import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import { IRootState } from '../store';
import { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const forOrg = () => {
    const dialog: any = useRef();
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className="bg-white">
            <section className="relative">
                <div className="h-[100px] w-full bg-transparent md:h-[150px] lg:h-[140px]"></div>
            </section>
            <div className="container">
                <div className="my-[30px] flex gap-3">
                    <div className="h-[40px] w-[7px] bg-primary"></div>
                    <h5 id="sheader" className="text-[2.15rem] font-[700] text-black">
                        For Organizations
                    </h5>
                </div>
                <div className="flex flex-col border-t-2 border-dotted border-gray/10 lg:flex-row" data-aos="fade-up" data-aos-duration="1000">
                    {/* First Child Div with Responsive Grid and 70% width */}
                    <div className="grid w-full grid-cols-1 gap-0 md:w-[70%] md:auto-rows-auto md:grid-cols-2 lg:w-[70%] lg:grid-cols-2">
                        <div className="flex flex-row p-5">
                            <a href="#" className="group flex h-[110%] w-full border-b-2 border-dotted border-gray/30">
                                <div className="flex w-full flex-row items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                        <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                    </div>
                                    <div className="flex w-[80%] flex-col">
                                        <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">
                                            UK General Data Protection Regulation (GDPR)
                                        </h2>
                                        <p className="text-black">
                                            Principles and requirements of the UK GDPR, codes of practice and key themes such as CCTV, artificial intelligence,
                                            and children.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/*  */}
                        <div className="flex flex-row p-5">
                            <a href="#" className="group flex h-[70%] w-full border-b-2 border-dotted border-gray/30 ">
                                <div className="flex w-full flex-row items-start justify-between ">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                        <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                    </div>
                                    <div className="flex w-[80%] flex-col">
                                        <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Freedom of information</h2>
                                        <p className="text-black">How to respond to FOI requests, and further information and resources.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className=" flex flex-row p-5">
                            <a href="#" className="group flex h-[70%] w-full border-b-2 border-dotted border-gray/30 ">
                                <div className="flex w-full flex-row items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                        <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                    </div>
                                    <div className="flex w-[80%] flex-col">
                                        <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">EIR and access to information</h2>
                                        <p className="text-black">Environmental information, spatial information and re-use of information.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className=" flex flex-row border-b-2 border-dotted border-gray/30 p-5">
                            <a href="#" className="group flex w-full">
                                <div className="flex w-full flex-row items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                        <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                    </div>
                                    <div className="flex w-[80%] flex-col">
                                        <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">
                                            Direct marketing and privacy and electronic communications
                                        </h2>
                                        <p className="text-black">
                                            Sending marketing messages, business to business marketing, electronic messaging, cookies, or providing electronic
                                            communications services to the public.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className=" flex flex-row p-5">
                            <a href="#" className="group flex h-[85%] w-full border-b-2 border-dotted border-gray/30">
                                <div className="flex w-full flex-row items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                        <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                    </div>
                                    <div className="flex w-[80%] flex-col">
                                        <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Law Enforcement</h2>
                                        <p className="text-black">Processing for law enforcement purposes.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className=" flex flex-row p-5">
                            <a href="#" className="group flex h-[110%] w-full border-b-2 border-dotted border-gray/30">
                                <div className="flex w-full flex-row items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                        <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                    </div>
                                    <div className="flex w-[80%] flex-col">
                                        <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Data Protection and the EU</h2>
                                        <p className="text-black">Adequacy and the UK GDPR and law enforcement processing since we left the EU.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className=" flex flex-row  p-5">
                            <a href="#" className="group flex w-full border-b-2 border-dotted border-gray/30">
                                <div className="flex w-full flex-row items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                        <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                    </div>
                                    <div className="flex w-[80%] flex-col">
                                        <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">
                                            Electronic identification and trust services
                                        </h2>
                                        <p className="text-black">
                                            eIDAS regulations for electronic trust services offered within the UK and recognised equivalent services offered in
                                            the EU.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className=" flex flex-row  p-5">
                            <a href="#" className="v group flex w-full border-b-2 border-dotted border-gray/30">
                                <div className="flex w-full flex-row items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                        <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                    </div>
                                    <div className="flex w-[80%] flex-col ">
                                        <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">
                                            Network and information systems (NIS)
                                        </h2>
                                        <p className="text-black">Digital services such as online marketplaces, online search engines and cloud services.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className=" flex flex-row p-5">
                            <a href="#" className="group flex w-full border-b-2 border-dotted border-gray/30">
                                <div className="flex w-full flex-row items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                        <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                    </div>
                                    <div className="flex w-[80%] flex-col">
                                        <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Intelligence services</h2>
                                        <p className="text-black">Intelligence services principles, rights, obligations and exemptions.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Second Child Div with a Single Column and 30% width */}
                    <div className="grid w-full grid-cols-1 gap-4 md:w-[30%] lg:w-[30%]">
                        <div
                            className="group flex flex-col bg-none p-6 px-4 transition dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="mb-8">
                                <h3 className="text-[22px] font-black text-black">TAKE ACTION</h3>
                            </div>
                            <ul className="text-md space-y-5 pb-7 font-bold">
                                <li className="flex items-center justify-between rounded-2xl bg-black transition hover:scale-105 hover:bg-black hover:text-white">
                                    <a href="/E-Services" className="flex h-full w-full items-center justify-between p-5">
                                        <p className="text-white hover:text-white">REGISTER</p>
                                        <div className="pr-3">
                                            <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="">
                                                    <circle cx="8" cy="8" r="8" fill="#ffff" />
                                                </g>
                                                <path
                                                    d="M5 8H11M11 8L8 5M11 8L8 11"
                                                    stroke="black"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                </li>

                                <li className="flex items-center justify-between rounded-2xl bg-black transition hover:scale-105 hover:bg-black hover:text-white">
                                    <a href="/E-Services" className="flex h-full w-full items-center justify-between p-5">
                                        <p className="text-white">FILE A COMPLAINT</p>
                                        <div className="pr-3">
                                            <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="">
                                                    <circle cx="8" cy="8" r="8" fill="white" />
                                                </g>
                                                <path
                                                    d="M5 8H11M11 8L8 5M11 8L8 11"
                                                    stroke="black"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                </li>

                                <li className="flex items-center justify-between rounded-2xl bg-black transition hover:scale-105 hover:bg-black hover:text-white">
                                    <a href="/E-Services" className="flex h-full w-full items-center justify-between p-5">
                                        <p className="text-white">
                                            REPORT A <br /> DATA BREACH
                                        </p>
                                        <div className="pr-3">
                                            <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="">
                                                    <circle cx="8" cy="8" r="8" fill="white" />
                                                </g>
                                                <path
                                                    d="M5 8H11M11 8L8 5M11 8L8 11"
                                                    stroke="black"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                </li>

                                <li className="flex items-center justify-between rounded-2xl bg-black transition hover:scale-105 hover:bg-black hover:text-white">
                                    <a href="/faq" className="flex h-full w-full items-center justify-between p-5">
                                        <p className="text-white">FAQ's</p>
                                        <div className="pr-3">
                                            <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="">
                                                    <circle cx="8" cy="8" r="8" fill="white" />
                                                </g>
                                                <path
                                                    d="M5 8H11M11 8L8 5M11 8L8 11"
                                                    stroke="black"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default forOrg;
