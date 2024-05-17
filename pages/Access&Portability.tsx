import Link from 'next/link';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const AP = () => {
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
                            <h4>Access and Portability</h4>
                            <p className="pt-12 text-xl font-bold text-black">
                                Despite having certain similarities, the rights to data portability and access are separate. Making sure people are aware of
                                both rights is important so that there is no misunderstanding about which right is being used.
                            </p>
                        </div>
                        <div className="text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className="text-[24px] font-extrabold text-black">Responding to access and portability requests</h2>
                            <p className="pt-12 text-lg font-semibold">
                                Every person has the right to ask for free and easily available access to their personal data. Should you obtain one of these
                                requests, you must:
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
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white ">
                                        Inform the person if their personal data is being processed.
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
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white ">
                                        Without excessive delay and, in any case, within a month, provide a copy of the personal data being processed
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
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white ">
                                        Tell them about the processing, including its goals, the categories of personal data it is processing, who will receive
                                        their data, and so forth.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p className="pt-12 text-xl font-semibold text-black/80">
                            While a person has the right to access any or all of their personal data, in cases where a controller handles a significant amount
                            of that person's data, the controller should be able to ask the person to specify their request by identifying the data or
                            processing activities they wish to access or learn about. This request for clarification should not be used to delay responding to
                            the request; it should only be made when it is logically necessary. When a controller requests such clarification, the person should
                            respond as quickly as possible. The controller shall continue to make an effort to comply with the initial request, even if the
                            person declines to provide additional information. When the processing is governed by a contract or consent, the individual may
                            request a "portable" copy of their personal data to be delivered to them or another organization.
                        </p>
                        <p className="pt-12 text-xl font-semibold text-black/80">
                            The term "right to data portability" refers to this. A format that is widely used and machine readable should be utilized to provide
                            the data.
                        </p>
                        <p className="pt-12 text-xl font-semibold text-black/80">
                            Since the DPA does not specify a specific process for submitting a legitimate request for access or portability, an individual may
                            submit a request verbally or in writing. It is advised that controllers note the timing and specifics of any spoken requests so they
                            can make sure they follow through and don't misunderstand them. Controllers might wish to send follow-up letters to individuals to
                            make sure they have grasped the request correctly.
                        </p>
                        <p className="pt-12 text-xl font-semibold text-black/80">
                            Similar to the previous point about the possible structure of a request, if controllers have a specific staff member or point of
                            contact assigned to handle inquiries, getting in touch with them will typically be the most effective approach for someone to
                            receive a response to promptly, but it should not be considered mandatory.
                        </p>
                        <div className="mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className="text-[24px] font-extrabold text-black">Limitations on access or portability requests</h2>
                            <p className="pt-12 text-xl font-semibold text-black/80">
                                Under Article 20(1) DPA, in limited circumstances, where an access request is ‘manifestly unfounded or excessive’, a controller
                                may, where appropriate, refuse to act on a request. This is, however, a high threshold to meet, and the controller must be able
                                to prove that the request was manifestly unfounded or excessive, in particular taking into account whether the request is
                                repetitive. There should be very few cases where a controller can justify a refusal of a request on this basis. There is a
                                general limitation on the exercise of the right of access under Article 20(1) DPA, which states that the right to obtain a copy
                                of the personal data undergoing processing should not negatively impact (‘adversely affect’) the rights and freedoms of others,
                                such as privacy, trade secrets, or intellectual property rights. However, where a controller does have concerns about the impact
                                of complying with a request, their response should not simply be a refusal to provide all information to the individual, but to
                                endeavor to comply with the request insofar as possible whilst ensuring adequate protection for the rights and freedoms of
                                others. Whilst the rights of access and portability are fundamental data protection rights, they are not absolute ones, and are
                                subject to a number of limited exceptions. If a controller considers that it is justified in withholding certain information in
                                response to an access or portability request it must identify an exemption under the Data Protection Act 2023, provide an
                                explanation as to why it applies, and demonstrate that reliance on the exemption is necessary and proportionate.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};
export default AP;
