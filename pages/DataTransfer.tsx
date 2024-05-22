import Link from 'next/link';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const DataTransfer = () => {
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
                            <h4>Data Transfer</h4>
                        </div>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Understanding Data Transfer</h2>
                            <p className="pt-12 text-lg font-semibold">
                                Data transfer involves the movement of data from one location to another, which could be within the same organization or across
                                different entities. In today's digital age, the seamless and secure transfer of data is crucial for effective communication and
                                operational efficiency.
                            </p>
                        </div>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Importance of Secure Data Transfer</h2>
                            <p className="pt-12 text-lg font-semibold">
                                Ensuring the security of data during transfer is vital to protect sensitive information from unauthorized access and breaches.
                                At DPA Somalia, we emphasize the following key aspects:
                            </p>
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
                                            Confidentiality: Data should only be accessible to authorized individuals.
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
                                            Integrity: Data should remain accurate and unaltered during transfer.
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
                                            Availability: Data should be available to authorized users when needed.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                <h2 className=" text-[24px] font-extrabold text-black">Best Practices for Secure Data Transfer</h2>
                                <p className="pt-12 text-lg font-semibold">
                                    To maintain the security and integrity of data, we recommend the following best practices:
                                </p>
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
                                                Encryption: Always use encryption to protect data during transfer. This ensures that even if data is
                                                intercepted, it cannot be read without the proper decryption key.
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
                                                Authentication: Implement strong authentication mechanisms to verify the identity of users accessing the data.
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
                                                Access Control: Limit access to data to only those who need it for their work. Use role-based access control to
                                                manage permissions.
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
                                                Regular Audits: Conduct regular audits of data transfer processes to identify and address potential
                                                vulnerabilities.
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
                                            <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                                Use Secure Channels: Transfer data over secure channels such as HTTPS, VPNs, or other encrypted protocols.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                <h2 className=" text-[24px] font-extrabold text-black">Responsibilities and Duties</h2>
                                <p className="pt-12 text-lg font-semibold">
                                    As part of our commitment to data protection, DPA Somalia outlines the following responsibilities and duties for
                                    organizations handling data transfers:
                                    <span className="mt-5">
                                        <br /> Data Controllers: Responsible for determining the purposes and means of data processing, including the transfer
                                        of data. They must ensure compliance with data protection regulations and implement appropriate safeguards.{' '}
                                    </span>{' '}
                                    <span className="mb-5">
                                        {' '}
                                        <br />
                                        Data Processors: Handle data on behalf of data controllers. They must adhere to the instructions provided by data
                                        controllers and ensure the security of data during transfer. <br />
                                    </span>{' '}
                                    <span>
                                        {' '}
                                        Employees: All employees involved in data transfer must be trained in data protection principles and follow the
                                        established protocols to ensure data security.
                                    </span>
                                </p>
                            </div>
                            <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                <h2 className=" text-[24px] font-extrabold text-black">Legal and Regulatory Compliance</h2>
                                <p className="pt-12 text-lg font-semibold">
                                    Organizations must comply with relevant data protection laws and regulations when transferring data. In Somalia, this
                                    includes adhering to the Data Protection Act, which mandates the secure handling and transfer of personal data.
                                    Non-compliance can result in legal penalties and damage to an organization's reputation.
                                </p>
                            </div>
                            <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                <h2 className=" text-[24px] font-extrabold text-black">Practical Advice for Organizations</h2>
                                <p className="pt-12 text-lg font-semibold">
                                    Data Transfer Agreements: Establish clear agreements with third parties involved in data transfer. These agreements should
                                    outline the responsibilities and expectations for data security. <br /> Monitoring and Reporting: Implement monitoring
                                    systems to detect and respond to suspicious activities during data transfer. Establish reporting mechanisms for any data
                                    breaches or security incidents. <br /> Employee Training: Regularly train employees on data protection and secure data
                                    transfer practices. Awareness and education are key to preventing data breaches. <br /> Data Minimization: Transfer only the
                                    data that is necessary for the intended purpose. Reducing the amount of data transferred minimizes the risk of exposure.{' '}
                                    <br /> By following these guidelines, organizations can ensure the secure transfer of data and maintain compliance with data
                                    protection laws. For further information or assistance, please contact DPA Somalia at [dpa infor].
                                </p>
                            </div>
                        </div>
                        {/* <ul>
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
                                        The processing is carried out by a public authority or body.
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
                                        The core activities of the controller or the processor consist of processing operations, which require regular and
                                        systematic monitoring of data subjects on a large scale.
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
                                        The core activities of the controller or the processor consist of processing on a large scale of special categories of
                                        data or personal data relating to criminal convictions and offences.
                                    </p>
                                </div>
                            </li>
                        </ul> */}
                    </div>
                </section>
            </section>
        </div>
    );
};
export default DataTransfer;
