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
        <section className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div className="bg-white">
                <section className="relative">
                    <div className="h-[20px] w-full bg-transparent md:h-[30px] lg:h-[30px]"></div>
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
                        <div className="mb-10 grid w-full grid-cols-1 gap-0 md:w-[70%] md:auto-rows-auto md:grid-cols-2 lg:w-[70%] lg:grid-cols-2">
                            <div className="flex flex-row p-5">
                                <a href="/DPB" className="group flex h-[110%] w-full border-b-2 border-dotted border-gray/30">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Data Protection Basics</h2>
                                            <p className="text-justify text-black">
                                                Data Protection Basics: is a comprehensive guide aimed at demystifying the essentials of data protection.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="flex flex-row p-5">
                                <a href="/knowYourObli" className="group flex h-[100%] w-full border-b-2 border-dotted border-gray/30 ">
                                    <div className="flex w-full flex-row items-start justify-between ">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Know Your Obligations</h2>
                                            <p className="text-justify text-black">
                                                This section contains information about the obligations placed on organisations under data protection law.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row p-5">
                                <a href="/RFEM" className="group flex h-[110%] w-full border-b-2 border-dotted border-gray/30">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Direct Marketing</h2>
                                            <p className="text-justify text-black">
                                                When a data controller is involved in processing activities that are likely to result in high risk to the rights
                                                and freedoms of individuals due to the nature,
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row p-5">
                                <a href="/codeOfCondect" className="group flex h-[110%] w-full border-b-2 border-dotted border-gray/30 ">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Codes of Conduct</h2>
                                            <p className="text-justify text-black">
                                                {' '}
                                                This Code of Conduct provides guidelines for Data Controllers and Data Processors to ensure the protection
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row border-b-2 border-dotted border-gray/30 p-5">
                                <a href="/DataTransfer" className="group flex w-full">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Data Transfer</h2>
                                            <p className="text-justify text-black">
                                                Data transfer involves the movement of data from one location to another, which could be within the same
                                                organization or across different entities.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row border-b-2 border-dotted border-gray/30 p-5">
                                <a href="/DRE" className="group flex w-full">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">
                                                Data Rights in E-Commerce & Self-Assessment Checklist
                                            </h2>
                                            <p className="text-justify text-black">
                                                When a data controller is involved in processing activities that are likely to result in high risk to the
                                                rights,
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row border-b-2 border-dotted border-gray/30 p-5">
                                <a href="/DB" className="group flex w-full">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Data Breach</h2>
                                            <p className="text-justify text-black">
                                                A data breach is a security incident in which sensitive, protected, or confidential data is accessed,
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row  p-5">
                                <a href="/crossBorder" className="group flex w-full border-b-2 border-dotted border-gray/30">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Cross-Border Data Transfers</h2>
                                            <p className="text-justify text-black">
                                                Cross-border data transfers refer to the movement of personal data from one country to another.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row  p-5">
                                <a href="/complainceChecklist" className="group flex w-full border-b-2 border-dotted border-gray/30">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Complaince Checklist</h2>
                                            <p className="text-justify text-black">
                                                When a data controller is involved in processing activities that are likely to result in high risk to the rights
                                                and freedoms of individuals due to the nature,
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row  p-5">
                                <a href="/Registration&RM" className="group flex w-full border-b-2 border-dotted border-gray/30">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Registration & Risk Managment</h2>
                                            <p className="text-justify text-black">
                                                Data controllers of major importance must register with the Data Protection Authority.
                                            </p>
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
        </section>
    );
};
export default forOrg;
