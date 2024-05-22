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
import { PiLinkSimpleLight } from 'react-icons/pi';
import { MdOutlineSecurityUpdateWarning } from 'react-icons/md';
import { LuWrapText } from 'react-icons/lu';
import { BsClipboard2Data } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { LuMessagesSquare } from 'react-icons/lu';
import { TbPasswordUser } from 'react-icons/tb';
import { RiBankLine } from 'react-icons/ri';
import { IoSchoolOutline } from 'react-icons/io5';
import { BsPeople } from 'react-icons/bs';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import Modal from '../components/Modal';

const forPublic = () => {
    const dialog: any = useRef();
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    return (
        <section className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div className=" bg-white">
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
                    <section className="relative bg-transparent pb-10">
                        <img src="/assets/images/event-concert/about-text.png" alt="" className="absolute top-12 left-1/2 -translate-x-1/2 md:top-24" />
                        <div className="container">
                            <div className="mt-12 flex flex-col items-center lg:flex-row" data-aos="fade-up" data-aos-duration="1000">
                                <div className="flex-1 bg-white uppercase dark:bg-gray-dark">
                                    <h4 className="text-2xl font-black leading-10 text-black dark:text-white"> Know your personal data</h4>
                                    <p className="text-md mt-2.5 pr-5 text-justify font-bold leading-8 ">
                                        Your Name ,Your Phone Number, Your Email, Your ID Card or Passport, Your Bank Account, Your Identity. And any other
                                        information that can identify a person. Do you know, citizen, that this is your private data? Therefore, The Government
                                        of Somalia has enacted the Data Protection Act, signed by President Hassan Sheikh Mohamud on March 20, 2023, which
                                        established the Data Protection Authority. <br /> The Data Protection Act, Law No. 005, mandates private institutions,
                                        government entities, and NGOs to protect personal data.
                                    </p>
                                </div>
                                <div className="relative w-full flex-none lg:max-w-[555px]">
                                    <img src="/assets/images/IMG-4.jpg" className="h-full w-full object-cover" alt="" />
                                    <span className="absolute inset-0 bg-black/30"></span>
                                    <button
                                        type="button"
                                        className="absolute top-1/2 left-1/2 flex h-[60px] w-[60px] -translate-y-1/2 -translate-x-1/2 items-center justify-center bg-white/40"
                                        onClick={() => dialog.current.open()}
                                    >
                                        <svg width="20" height="26" viewBox="0 0 20 26" fill="none">
                                            <path
                                                d="M2.40668 1.04988C2.20606 0.916037 1.97291 0.839108 1.73203 0.827287C1.49116 0.815465 1.25159 0.869194 1.03883 0.982755C0.826077 1.09631 0.648107 1.26545 0.523872 1.47216C0.399638 1.67886 0.333789 1.91539 0.333344 2.15655V23.8432C0.333789 24.0844 0.399638 24.3209 0.523872 24.5276C0.648107 24.7343 0.826077 24.9035 1.03883 25.017C1.25159 25.1306 1.49116 25.1843 1.73203 25.1725C1.97291 25.1607 2.20606 25.0837 2.40668 24.9499L18.67 14.1099C18.8529 13.9882 19.0029 13.8232 19.1066 13.6295C19.2104 13.4359 19.2646 13.2196 19.2646 12.9999C19.2646 12.7802 19.2104 12.5639 19.1066 12.3703C19.0029 12.1766 18.8529 12.0116 18.67 11.8899L2.40668 1.04988Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Modal
                        ref={dialog}
                        width="960"
                        closeByOverlay={true}
                        closeBtn={true}
                        closeStyle="floating"
                        contentClass="pt-8 px-0 pb-0 !bg-transparent"
                        closeBtnClass="!top-0 ltr:!right-0 rtl:!right-auto rtl:!left-0 !text-white !text-3xl"
                        modal={false}
                    >
                        <div className="bg-black dark:bg-gray-dark">
                            <div className="relative">
                                <div className="aspect-video">
                                    <iframe
                                        className="absolute top-0 left-0 h-full w-full"
                                        src="https://www.youtube.com/embed/Zqwynk2okxQ?si=Mq9z7cSRtInzmXMg"
                                        frameBorder="0"
                                        allowFullScreen
                                        allow="autoplay"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </Modal>
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
                                <div className="mt-5 flex flex-row ">
                                    <a href="" className="flex pr-5">
                                        <div className="items-center">
                                            <PiLinkSimpleLight style={{ color: 'black', fontSize: '48px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Spam Links</h1>
                                            <p className="text-[.85rem] leading-[1.3rem]">
                                                Spam links on Facebook can lead to phishing, malware, and data breaches. Use advanced spam filters, keep
                                                security software updated, and educate users to report suspicious links to enhance security.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <MdOutlineSecurityUpdateWarning style={{ color: 'black', fontSize: '48px' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Identity theft</h1>
                                            <p className="text-[.85rem] leading-[1.3rem]">
                                                Identity theft on Facebook can lead to financial loss. Scammers might steal accounts and ask friends for money.
                                                Use strong passwords and two-factor authentication to prevent this.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <LuWrapText style={{ color: 'black', fontSize: '48px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Spam Text</h1>
                                            <p className="text-[.85rem] leading-[1.3rem]">
                                                Spam texts on Facebook, WhatsApp, and Messenger can lead to phishing and identity theft. Avoid clicking unknown
                                                links, block and report suspicious contacts, and keep apps updated to stay safe.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <BsClipboard2Data style={{ color: 'black', fontSize: '48px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Keeping Personal Information</h1>
                                            <p className="pb-5 text-[.85rem] leading-[1.3rem]">
                                                Always keep your bank account details, ID, and passport secret, safe, and hidden. Avoid sharing this information
                                                online or with untrusted sources. Store physical documents securely and use strong, unique passwords for online
                                                accounts.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <FiPhoneCall style={{ color: 'black', fontSize: '42px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Nuisance Calls</h1>
                                            <p className="pb-5 text-[.85rem] leading-[1.3rem]">
                                                Keep your phone number private and avoid sharing it with untrusted sources. Use call-blocking features and apps
                                                to filter out unwanted calls. Report nuisance calls to your service provider and authorities.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <LuMessagesSquare style={{ color: 'black', fontSize: '48px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Phishing Messages</h1>
                                            <p className="pb-5 text-[.85rem] leading-[1.3rem]">
                                                Avoid clicking links or downloading attachments from unknown sources. Verify the sender before sharing personal
                                                information. Use spam filters and keep your security software updated.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <TbPasswordUser style={{ color: 'black', fontSize: '52px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">OTP </h1>
                                            <p className="pb-5 text-[.85rem] leading-[1.3rem]">
                                                Always keep your One-Time Password (OTP) private and never share it with anyone. Only enter your OTP on trusted
                                                and secure websites. Enable two-factor authentication for added security and be cautious of unsolicited messages
                                                requesting your OTP.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <RiBankLine style={{ color: 'black', fontSize: '48px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Handling Bank Lines</h1>
                                            <p className="pb-5 text-[.85rem] leading-[1.3rem]">
                                                Keep your personal and financial information private. Avoid discussing sensitive details aloud. Be mindful of
                                                your surroundings and protect your belongings. Use online banking services to minimize time spent in bank lines.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <IoSchoolOutline style={{ color: 'black', fontSize: '48px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">School ID and Certifications</h1>
                                            <p className="pb-5 text-[.85rem] leading-[1.3rem]">
                                                Keep your school ID and certifications safe. Avoid sharing them with untrusted sources or posting them online.
                                                Store physical copies securely and make digital backups. Use your school ID only when necessary.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <BsPeople style={{ color: 'black', fontSize: '52px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Public Information Security</h1>
                                            <p className="pb-5 text-[.85rem] leading-[1.3rem]">
                                                Protect your personal information in public settings. Avoid sharing sensitive details aloud or online. Use
                                                secure networks, be cautious with public Wi-Fi, and always log out of public devices. Regularly update your
                                                passwords.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <a href="" className="flex pr-5">
                                        <div className="h-full">
                                            <MdOutlineHealthAndSafety style={{ color: 'black', fontSize: '52px', padding: '0' }} />
                                        </div>
                                        <div className="pl-5 text-black">
                                            <h1 className="mb-2 text-[1.2rem] font-bold">Protecting Health Records</h1>
                                            <p className="pb-5 text-[.85rem] leading-[1.3rem]">
                                                Keep your health records private and secure. Avoid sharing them with untrusted sources or online. Store physical
                                                copies safely and use secure, password-protected systems for digital records. Verify the identity of anyone
                                                requesting your health information.
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                {/* <div className="mt-5 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};
export default forPublic;
