import Link from 'next/link';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const DPO = () => {
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
                            <h4>Data Controller</h4>
                        </div>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <p className="pt-12 text-lg font-semibold">
                                In the realm of data protection, a Data Controller is a key entity responsible for determining the purposes and means of
                                processing personal data. This role is crucial for ensuring that personal information is handled in compliance with applicable
                                data protection laws and regulations.
                            </p>
                        </div>
                        <h2 className=" text-[24px] font-extrabold text-black">Responsibilities of a Data Controller</h2>
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
                                        {' '}
                                        Defining Data Processing Activities:
                                    </h4>
                                    <p className="pb-3 text-[16px] font-semibold dark:text-white">
                                        The Data Controller decides why and how personal data is processed. This includes specifying the types of data
                                        collected, the purposes for which it is used, and the methods of processing.
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
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl"> Ensuring Lawful Processing:</h4>
                                    <p className="pb-3 text-[16px] font-semibold dark:text-white">
                                        The Data Controller must ensure that all data processing activities have a lawful basis. Common legal grounds include
                                        the consent of the data subject, the necessity of processing for the performance of a contract, compliance with a legal
                                        obligation, protection of vital interests, performance of a task carried out in the public interest, or legitimate
                                        interests pursued by the controller or a third party.
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
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl"> Obtaining Consent:</h4>
                                    <p className="pb-3 text-[16px] font-semibold dark:text-white">
                                        When processing is based on consent, the Data Controller is responsible for obtaining and documenting the data subject's
                                        consent. This consent must be informed, freely given, and revocable at any time.
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
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl"> Transparency and Communication:</h4>
                                    <p className="pb-3 text-[16px] font-semibold dark:text-white">
                                        The Data Controller must provide clear and transparent information to data subjects about how their data will be
                                        processed. This includes privacy notices that detail the identity of the controller, the purposes of processing, the
                                        legal basis for processing, data retention periods, and the rights of data subjects.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    05
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl"> Data Subject Rights:</h4>
                                    <p className="pb-3 text-[16px] font-semibold dark:text-white">
                                        The Data Controller is obligated to uphold the rights of data subjects. These rights include access to personal data,
                                        rectification of inaccurate data, erasure of data (the right to be forgotten), restriction of processing, data
                                        portability, and the right to object to processing.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    06
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl"> Data Security:</h4>
                                    <p className="pb-3 text-[16px] font-semibold dark:text-white">
                                        Implementing appropriate technical and organizational measures to protect personal data from unauthorized access,
                                        accidental loss, or destruction is a critical responsibility. This includes ensuring data integrity, confidentiality,
                                        and availability.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    07
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl"> Record Keeping:</h4>
                                    <p className="pb-3 text-[16px] font-semibold dark:text-white">
                                        The Data Controller must maintain records of data processing activities, including details of data categories, purposes
                                        of processing, data recipients, data transfers, and security measures in place.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    08
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">
                                        {' '}
                                        Data Protection Impact Assessments (DPIAs):
                                    </h4>
                                    <p className="pb-3 text-[16px] font-semibold dark:text-white">
                                        When processing activities are likely to result in high risks to the rights and freedoms of individuals, the Data
                                        Controller must conduct a Data Protection Impact Assessment to identify and mitigate those risks.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    09
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">
                                        {' '}
                                        Liaison with Data Protection Authorities:
                                    </h4>
                                    <p className="pb-3 text-[16px] font-semibold dark:text-white">
                                        The Data Controller must cooperate with the Data Protection Authority (DPA) in Somalia. This includes reporting data
                                        breaches, responding to investigations, and complying with any enforcement actions or guidelines issued by the DPA.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    10
                                </div>
                                <div className="lg:w-4/6">
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Training and Awareness:</h4>
                                    <p className="pb-3 text-[16px] font-semibold dark:text-white">
                                        Ensuring that employees and other relevant stakeholders are aware of data protection obligations and best practices is
                                        also a key responsibility of the Data Controller.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Importance of the Data Controller</h2>
                            <p className="pt-12 text-lg font-semibold">
                                With the establishment of data protection regulations in Somalia, the role of the Data Controller is vital for promoting trust
                                and confidence in how personal data is handled. Ensuring compliance with these regulations not only protects the rights and
                                privacy of individuals but also fosters a culture of accountability and transparency in data processing practices.
                            </p>
                        </div>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Key Duties</h2>
                            <p className="pt-12 text-lg font-semibold">
                                Data controllers have specific duties to ensure the security and compliance of data handling processes:
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
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Risk Assessment: Conduct a thorough risk assessment before handling data to identify potential threats and
                                        vulnerabilities. This includes evaluating the security measures of any third parties involved.
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
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Data Handling Agreements: Establish data handling agreements that define the terms and conditions for data processing,
                                        including the security measures that must be in place.
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
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Monitoring and Auditing: Regularly monitor and audit data handling processes to ensure compliance with established
                                        protocols and detect any anomalies or breaches.
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
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Incident Response: Develop and implement an incident response plan to address any data breaches or security incidents
                                        promptly. This includes notifying affected data subjects and relevant authorities.
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
export default DPO;
