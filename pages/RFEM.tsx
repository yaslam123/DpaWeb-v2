import Link from 'next/link';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const RFEM = () => {
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
                            <h4>Rules for Electronic and Direct Marketing</h4>
                            <p className="pt-12 text-lg font-semibold">
                                In somalia, direct electronic marketing is regulated by the Data Protection Acts (DPA) and the General Data Protection
                                Regulation (GDPR). Key rules include obtaining explicit consent before sending electronic marketing communications, providing
                                opt-out options, and ensuring transparency about data processing practices. Additionally, individuals must be given the
                                opportunity to easily unsubscribe from marketing communications. Violations can result in fines and legal consequences.
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
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Consent</h4>
                                    <p className="text-lg font-semibold">
                                        Marketers must obtain explicit consent from individuals before sending electronic marketing communications. This consent
                                        must be freely given, specific, informed, and unambiguous.
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
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Opt-out</h4>
                                    <p className="text-lg font-semibold">
                                        Every marketing communication must include a clear and easy-to-use opt-out mechanism, allowing recipients to unsubscribe
                                        from further communications.
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
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Transparency</h4>
                                    <p className="text-lg font-semibold">
                                        Marketers must provide clear and transparent information about their identity and contact details in every marketing
                                        communication.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 pt-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    04
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Data Protection Principles</h4>
                                    <p className="text-lg font-semibold">
                                        All processing of personal data for electronic marketing purposes must comply with the data protection principles
                                        outlined in the DPA and the GDPR, including lawfulness, fairness, and transparency.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 pt-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    05
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Data Subject Rights</h4>
                                    <p className="text-lg font-semibold">
                                        Individuals have the right to access, rectify, and erase their personal data held by marketers. Marketers must respond
                                        to such requests in a timely manner.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 pt-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    06
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Security Measures</h4>
                                    <p className="text-lg font-semibold">
                                        Adequate security measures must be in place to protect personal data from unauthorized access, disclosure, alteration,
                                        or destruction.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 pt-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    07
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Data Transfer</h4>
                                    <p className="text-lg font-semibold">
                                        If personal data is transferred outside the European Economic Area (EEA), marketers must ensure that the receiving
                                        country provides an adequate level of data protection or implement appropriate safeguards.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 pt-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    08
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Children’s Data</h4>
                                    <p className="text-lg font-semibold">
                                        Special protections apply when processing personal data of children for electronic marketing purposes. Parental consent
                                        may be required for marketing directed at children.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p className="pt-12 text-[18px] font-bold text-black">
                            Non-compliance with these rules can result in penalties, fines, and legal consequences. It’s essential for marketers to stay
                            informed about data protection regulations and ensure compliance with the DPA and GDPR
                        </p>
                    </div>
                </section>
            </section>
        </div>
    );
};
export default RFEM;
