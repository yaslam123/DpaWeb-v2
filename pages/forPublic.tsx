import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import { IRootState } from '../store';
import { useRef } from 'react';
import { PiIdentificationBadgeThin } from 'react-icons/pi';
import { IoIosPersonAdd } from 'react-icons/io';
import { MdOutlineDoneAll } from 'react-icons/md';
import { MdOutlineMedicalInformation } from 'react-icons/md';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { SlOrganization } from 'react-icons/sl';
import { MdPermDeviceInformation } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

const forPublic = () => {
    const dialog: any = useRef();
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    return (
        <section className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div className=" bg-gradient-to-b to-transparent dark:bg-none">
                <section className="relative">
                    <div className="h-[20px] w-full bg-transparent md:h-[30px] lg:h-[30px]"></div>
                </section>
                <section className="container">
                    <div className="my-[30px] flex gap-3">
                        <div className="h-[40px] w-[7px] bg-primary"></div>
                        <h5 id="sheader" className="text-[2.15rem] font-bold text-black">
                            For The Public
                        </h5>
                    </div>
                    <div className="flex flex-col border-t-2 border-dotted border-gray/10 pb-10 " data-aos="fade-up" data-aos-duration="1000">
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
                            <div className="">
                                <div className="border-t-[15px] border-primary bg-black/90 py-5 pr-5 pl-2 text-white">
                                    <h1 className="text-[1.5rem] font-bold">Your rights</h1>
                                    <p className="text-[.85rem]">Find out more about your personal data rights. </p>
                                </div>
                                <div className="mt-5 flex flex-row ">
                                    <a href="" className="flex pr-5">
                                        <div className="items-center">
                                            <PiIdentificationBadgeThin style={{ color: 'black', fontSize: '60px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold"> Right of Access</h1>
                                            <p className="text-[.85rem] leading-[1.3rem]">
                                                Individuals have the right to know whether their personal data is being processed, where, and for what purpose.
                                                They can request a copy of their personal data.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <IoIosPersonAdd style={{ color: 'black', fontSize: '60px' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Right to Rectification</h1>
                                            <p className="text-[.85rem] leading-[1.3rem]">
                                                Individuals can have inaccurate personal data corrected and incomplete data completed.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <MdOutlineDoneAll style={{ color: 'black', fontSize: '60px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Right to Erasure (Right to be Forgotten)</h1>
                                            <p className="text-[.85rem] leading-[1.3rem]">
                                                Under certain conditions, individuals can request the deletion of their personal data.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <MdOutlineMedicalInformation style={{ color: 'black', fontSize: '60px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Right to Restrict Processing</h1>
                                            <p className="pb-5 text-[.85rem] leading-[1.3rem]">
                                                Individuals have the right to block or suppress processing of their personal data under certain conditions.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <MdOutlinePrivacyTip style={{ color: 'black', fontSize: '60px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Right to Data Portabilityd</h1>
                                            <p className="pb-5 text-[.85rem] leading-[1.3rem]">
                                                Individuals can request and receive their personal data for their own purposes across different services.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <AiOutlineUsergroupDelete style={{ color: 'black', fontSize: '60px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Right to Object</h1>
                                            <p className="pb-5 text-[.85rem] leading-[1.3rem]">
                                                Individuals have the right to object to the processing of their personal data for direct marketing, research, or
                                                in a few other contexts.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <SlOrganization style={{ color: 'black', fontSize: '60px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Rights in Relation to Automated Decision Making and Profiling</h1>
                                            <p className="pb-5 text-[.85rem] leading-[1.3rem]">
                                                Individuals have the right not to be subject to a decision based solely on automated processing, including
                                                profiling, that produces legal effects concerning them or similarly significantly affects them. The Somalia data
                                                protection act granted this right.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="">
                                <div className="border-t-[15px] border-primary bg-black/90 pt-5 pb-11 pr-5 pl-2 text-white">
                                    <h1 className="text-[1.5rem] font-bold">Advice</h1>
                                </div>
                                <div className="mt-5 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
                                    <div>
                                        <ul className="text-md pb-7 font-bold">
                                            <li className="mb-10 flex items-center justify-between border-b-2 border-dotted border-gray/10 bg-transparent transition hover:scale-105">
                                                <a href="/yourData" className="group flex w-full">
                                                    <div className="flex w-full flex-row items-start">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:bg-secondary group-hover:ease-in-out">
                                                            <FaArrowRight style={{ color: 'white', fontSize: '16px' }} />
                                                        </div>
                                                        <div className="flex flex-col pl-3">
                                                            <h3 className="text-[20px] font-bold text-black group-hover:text-primary">
                                                                Your data and elections
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="my-10 flex border-b-2 border-dotted border-gray/10 bg-transparent transition hover:scale-105">
                                                <a href="/beAware" className="group flex w-full">
                                                    <div className="flex w-full flex-row items-start">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:bg-secondary group-hover:ease-in-out">
                                                            <FaArrowRight style={{ color: 'white', fontSize: '16px' }} />
                                                        </div>
                                                        <div className="flex w-[85%] flex-col pl-3">
                                                            <h3 className="text-[20px] font-bold text-black group-hover:text-primary">Be Aware</h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="mt-10 mb-10 flex items-center justify-between border-b-2 border-dotted border-gray/10 bg-transparent transition hover:scale-105">
                                                <a href="/Consent" className="group flex w-full">
                                                    <div className="flex w-full flex-row items-start">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:bg-secondary group-hover:ease-in-out">
                                                            <FaArrowRight style={{ color: 'white', fontSize: '16px' }} />
                                                        </div>
                                                        <div className="flex flex-col pl-3">
                                                            <h3 className="text-[20px] font-bold text-black group-hover:text-primary">Consent</h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="bg-transparente mt-10 mb-10 flex items-center justify-between border-b-2 border-dotted border-gray/10 transition hover:scale-105">
                                                <a href="/Journalize" className="group flex w-full">
                                                    <div className="flex w-full flex-row items-start">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:bg-secondary group-hover:ease-in-out">
                                                            <FaArrowRight style={{ color: 'white', fontSize: '16px' }} />
                                                        </div>
                                                        <div className="flex w-[85%] flex-col pl-3">
                                                            <h3 className="text-[20px] font-bold text-black group-hover:text-primary">
                                                                Data protection and journalism
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="mt-10 mb-10 flex items-center justify-between border-b-2 border-dotted border-gray/10 bg-transparent transition hover:scale-105">
                                                <a href="/IdentityTheft" className="group flex w-full">
                                                    <div className="flex w-full flex-row items-start">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:bg-secondary group-hover:ease-in-out">
                                                            <FaArrowRight style={{ color: 'white', fontSize: '16px' }} />
                                                        </div>
                                                        <div className="flex flex-col pl-3">
                                                            <h3 className="text-[20px] font-bold text-black group-hover:text-primary">Identity theft</h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="mt-10 mb-10 flex items-center justify-between border-b-2 border-dotted border-gray/10 bg-transparent transition hover:scale-105">
                                                <a href="#" className="group flex w-full">
                                                    <div className="flex w-full flex-row items-start">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:bg-secondary group-hover:ease-in-out">
                                                            <FaArrowRight style={{ color: 'white', fontSize: '16px' }} />
                                                        </div>
                                                        <div className="flex w-[85%] flex-col pl-3">
                                                            <h3 className="text-[20px] font-bold text-black group-hover:text-primary">
                                                                Online and electronic devices
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="my-10 flex items-center justify-between border-b-2 border-dotted border-gray/10 bg-transparent transition hover:scale-105">
                                                <a href="#" className="group flex w-full">
                                                    <div className="flex w-full flex-row items-start">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:bg-secondary group-hover:ease-in-out">
                                                            <FaArrowRight style={{ color: 'white', fontSize: '16px' }} />
                                                        </div>
                                                        <div className="flex flex-col pl-3">
                                                            <h3 className="text-[20px] font-bold text-black group-hover:text-primary">Spam texts</h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="text-md pb-7 font-bold">
                                            <li className="mb-10 flex items-center justify-between border-b-2 border-dotted border-gray/10 bg-transparent transition hover:scale-105">
                                                <a href="#" className="group flex w-full">
                                                    <div className="flex w-full flex-row items-start">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:bg-secondary group-hover:ease-in-out">
                                                            <FaArrowRight style={{ color: 'white', fontSize: '16px' }} />
                                                        </div>
                                                        <div className="flex flex-col pl-3">
                                                            <h3 className="text-[20px] font-bold text-black group-hover:text-primary">Microtargeting</h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="my-10 flex border-b-2 border-dotted border-gray/10 bg-transparent transition hover:scale-105">
                                                <a href="#" className="group flex w-full">
                                                    <div className="flex w-full flex-row items-start">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:bg-secondary group-hover:ease-in-out">
                                                            <FaArrowRight style={{ color: 'white', fontSize: '16px' }} />
                                                        </div>
                                                        <div className="flex w-[85%] flex-col pl-3">
                                                            <h3 className="text-[20px] font-bold text-black group-hover:text-primary">
                                                                Charity fundraising practices
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="mt-10 mb-10 flex items-center justify-between border-b-2 border-dotted border-gray/10 bg-transparent transition hover:scale-105">
                                                <a href="#" className="group flex w-full">
                                                    <div className="flex w-full flex-row items-start">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:bg-secondary group-hover:ease-in-out">
                                                            <FaArrowRight style={{ color: 'white', fontSize: '16px' }} />
                                                        </div>
                                                        <div className="flex flex-col pl-3">
                                                            <h3 className="text-[20px] font-bold text-black group-hover:text-primary">Credit</h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="mt-10 mb-10 flex items-center justify-between border-b-2 border-dotted border-gray/10 bg-transparent transition hover:scale-105">
                                                <a href="#" className="group flex w-full">
                                                    <div className="flex w-full flex-row items-start">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:bg-secondary group-hover:ease-in-out">
                                                            <FaArrowRight style={{ color: 'white', fontSize: '16px' }} />
                                                        </div>
                                                        <div className="flex w-[85%] flex-col pl-3">
                                                            <h3 className="text-[20px] font-bold text-black group-hover:text-primary">Domestic CCTV systems</h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="mt-10 mb-10 flex items-center justify-between border-b-2 border-dotted border-gray/10 bg-transparent transition hover:scale-105">
                                                <a href="#" className="group flex w-full">
                                                    <div className="flex w-full flex-row items-start">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:bg-secondary group-hover:ease-in-out">
                                                            <FaArrowRight style={{ color: 'white', fontSize: '16px' }} />
                                                        </div>
                                                        <div className="flexflex-col pl-3">
                                                            <h3 className="text-[20px] font-bold text-black group-hover:text-primary">Nuisance calls</h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="my-10 flex items-center justify-between border-b-2 border-dotted border-gray/10 bg-transparent transition hover:scale-105">
                                                <a href="#" className="group flex w-full">
                                                    <div className="flex w-full flex-row items-start">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:bg-secondary group-hover:ease-in-out">
                                                            <FaArrowRight style={{ color: 'white', fontSize: '16px' }} />
                                                        </div>
                                                        <div className="flex w-[85%] flex-col pl-3">
                                                            <h3 className="text-[20px] font-bold text-black group-hover:text-primary">
                                                                Schools, universities and colleges
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="my-10 flex items-center justify-between border-b-2 border-dotted border-gray/10 bg-transparent transition hover:scale-105">
                                                <a href="#" className="group flex w-full">
                                                    <div className="flex w-full flex-row items-start">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:bg-secondary group-hover:ease-in-out">
                                                            <FaArrowRight style={{ color: 'white', fontSize: '16px' }} />
                                                        </div>
                                                        <div className="flex flex-col pl-3">
                                                            <h3 className="text-[20px] font-bold text-black group-hover:text-primary">Spam Emails</h3>
                                                        </div>
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
            </div>
        </section>
    );
};
export default forPublic;
