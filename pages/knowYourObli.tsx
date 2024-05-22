import Link from 'next/link';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';
import { IoIosArrowForward } from 'react-icons/io';

const KYO = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Data Protection Athourity</title>
            </Head>
            <section className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
                <section className="bg-white py-[4rem] md:py-[4rem] lg:py-[4rem]">
                    <div className="container">
                        <div className="heading text-center font-normal ltr:lg:text-left rtl:lg:text-right">
                            <h4>Know Your Obligations</h4>
                            <p className="pt-12 text-lg font-semibold">
                                This section contains information about the obligations placed on organisations under data protection law.
                            </p>
                        </div>

                        <div className="group ml-2 mt-5 flex items-center text-[20px] font-semibold text-black/80 underline hover:text-primary">
                            <IoIosArrowForward className="" />
                            <a href="/Access&Portability" className="text-blue-600 ml-2 no-underline">
                                Access and Portability
                            </a>
                        </div>
                        <div className="ml-2 mt-5 flex items-center text-[20px] font-semibold text-black/80 underline hover:text-primary">
                            <IoIosArrowForward className="" />
                            <a href="/AccountabilityObligation" className="text-blue-600 ml-2 no-underline">
                                Accountability obligation
                            </a>
                        </div>
                        <div className="ml-2 mt-5 flex items-center text-[20px] font-semibold text-black/80 underline hover:text-primary">
                            <IoIosArrowForward className="" />
                            <a href="/LawfullProcessing" className="text-blue-600 ml-2 no-underline">
                                Lawful processing
                            </a>
                        </div>
                        <div className="ml-2 mt-5 flex items-center text-[20px] font-semibold text-black/80 underline hover:text-primary">
                            <IoIosArrowForward className="" />
                            <a href="/DataProcessor" className="text-blue-600 ml-2 no-underline">
                                Data Processor
                            </a>
                        </div>
                        <div className="mt-5 ml-2 flex items-center text-[20px] font-semibold text-black/80 underline hover:text-primary">
                            <IoIosArrowForward className="" />
                            <a href="/DataController" className="text-blue-600 ml-2 no-underline">
                                Data Controller
                            </a>
                        </div>
                        <div className="ml-2 mt-5 flex items-center text-[20px] font-semibold text-black/80 underline hover:text-primary">
                            <IoIosArrowForward className="" />
                            <a href="/DPO" className="text-blue-600 ml-2 no-underline">
                                Data Protection Officers
                            </a>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};
export default KYO;
