import Link from 'next/link';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const DB = () => {
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
                            <h4>Data Breach</h4>
                        </div>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Understanding Data Breach</h2>
                            <p className="pt-12 text-lg font-semibold">
                                A data breach is a security incident in which sensitive, protected, or confidential data is accessed, disclosed, or stolen by
                                unauthorized individuals. Data breaches can have serious consequences, including financial losses, reputational damage, and
                                legal penalties. Understanding the causes and implementing effective strategies to prevent and respond to data breaches is
                                crucial for any organization.
                            </p>
                        </div>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">What Constitutes a Data Breach?</h2>
                            <p className="pt-12 text-lg font-semibold">A data breach can involve various types of data, including:</p>
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
                                        Personal Data: Information that can identify an individual, such as names, addresses, phone numbers, and email
                                        addresses.
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
                                        Financial Data: Credit card numbers, bank account details, and other financial information.
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
                                        Health Data: Medical records and health-related information.
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
                                        Confidential Business Information: Trade secrets, proprietary information, and other sensitive business data.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Common Causes of Data Breaches</h2>
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
                                        Cyber Attacks: Hacking, phishing, and malware attacks designed to steal data.
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
                                        Insider Threats: Unauthorized access or data theft by employees or other insiders.
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
                                        Human Error: Accidental data disclosure due to negligence or mistakes.
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
                                        Physical Theft: Theft of devices or documents containing sensitive information.
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
                                        Weak Security Practices: Inadequate security measures, such as weak passwords or unencrypted data. Physical Theft: Theft
                                        of devices or documents containing sensitive information.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Steps to Prevent Data Breaches</h2>
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
                                        Strong Password Policies: Implement and enforce strong password policies, including the use of complex passwords and
                                        regular password changes.
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
                                        Employee Training: Educate employees on recognizing phishing attempts and other social engineering tactics.
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
                                        Access Controls: Use role-based access control (RBAC) to limit access to sensitive data to only those who need it for
                                        their work.
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
                                        Regular Software Updates: Ensure all software and systems are kept up-to-date with the latest security patches.
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
                                        Data Encryption: Encrypt sensitive data both in transit and at rest to protect it from unauthorized access.
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
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Multi-Factor Authentication (MFA): Implement MFA to add an extra layer of security beyond just passwords.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Impact of a Data Breach</h2>
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
                                        Loss of Privacy: Unauthorized access to personal information can lead to identity theft and privacy violations.
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
                                        Financial Loss: Both individuals and organizations can suffer financial losses due to data breaches.
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
                                        Reputation Damage: Organizations can face significant reputational harm, losing trust with customers and partners.
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
                                        Legal Consequences: Non-compliance with data protection laws can result in legal penalties and fines.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Responding to a Data Breach</h2>
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
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Immediate Containment and Assessment</h4>
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Contain the Breach: Take immediate steps to stop the breach and prevent further data loss.
                                    </p>
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Assess the Impact: Determine the extent of the breach, what data was affected, and the potential risks.
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
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Notification and Communication</h4>
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Inform Affected Individuals: Notify individuals whose personal data has been compromised, providing them with
                                        information on the breach and steps they can take to protect themselves.
                                    </p>
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Report to Authorities: Report the breach to Somalia's Data Protection Authority as required by law.
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
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Investigation and Remediation</h4>
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Conduct an Investigation: Investigate the cause of the breach and identify vulnerabilities that were exploited.
                                    </p>
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Implement Remediation Measures: Address the vulnerabilities and enhance security measures to prevent future breaches.
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
                                    <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Review and Update Policies</h4>
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Policy Review: Review and update data protection and security policies to strengthen defences.
                                    </p>
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        Employee Training: Provide training to employees on data protection best practices and how to prevent breaches. mplement
                                        Remediation Measures: Address the vulnerabilities and enhance security measures to prevent future breaches.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <p className="pt-12 text-lg font-semibold">
                                In Somalia, safeguarding personal and sensitive data is critical for maintaining trust and ensuring compliance with data
                                protection regulations. Understanding and effectively managing data breaches helps protect individuals' rights and promotes a
                                secure and trustworthy data environment.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};
export default DB;
