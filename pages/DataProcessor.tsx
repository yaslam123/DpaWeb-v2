import Link from 'next/link';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const DataProcessor = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Data Protection Athourity</title>
            </Head>
            <section className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
                <section className="bg-white py-[4rem] md:py-[4rem] lg:py-[4rem]">
                    <div className="container">
                        <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                            <h4>Data Processor</h4>
                            <p className="pt-12 text-lg font-semibold">
                                A data processor is any natural or legal person, public authority, agency, or other body which processes personal data on behalf
                                of the data controller. Unlike data controllers, data processors do not have the authority to decide the purpose and means of
                                the processing of personal data.
                            </p>
                        </div>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Responsibilities of Data Processors</h2>
                            <p className="pt-5 text-lg font-semibold">
                                Data processors have specific obligations and responsibilities to ensure the protection of personal data. These include:
                            </p>
                        </div>
                        <ul>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    01
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">
                                        Processing Data in Accordance with Instructions
                                    </h4>
                                    <p className="text-lg font-semibold">
                                        personal data only according to the documented instructions provided by the data controller. Any deviation from these
                                        instructions requires explicit authorization from the data controller.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    02
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">
                                        Implementing Appropriate Security Measures
                                    </h4>
                                    <p className="text-lg font-semibold">
                                        implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk. This
                                        includes protecting data against unauthorized or unlawful processing and accidental loss, destruction, or damage.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    03
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">
                                        Maintaining Records of Processing Activities
                                    </h4>
                                    <p className="text-lg font-semibold">
                                        Data processors must maintain records of all categories of processing activities carried out on behalf of the data
                                        controller. This record should include details such as the purposes of processing, categories of data subjects and
                                        personal data, and any transfers of personal data to a third country.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    04
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Assisting the Data Controller</h4>
                                    <p className="text-lg font-semibold">
                                        Data processors must assist data controllers in ensuring compliance with their obligations under data protection laws.
                                        This includes aiding in responding to data subject rights requests, data breach notifications, and conducting data
                                        protection impact assessments.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </div>
    );
};
export default DataProcessor;
