import Link from 'next/link';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const DPB = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Data Protection Basics | Data Protection Athourity</title>
            </Head>
            <section className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
                <section className="bg-white py-[4rem] md:py-[4rem] lg:py-[4rem]">
                    <div className="container">
                        <div className="heading text-center font-normal ltr:lg:text-left rtl:lg:text-right">
                            <h4>Data Protection Basics</h4>
                            <p className="pt-12 text-lg font-semibold">
                                Data Protection Basics: is a comprehensive guide aimed at demystifying the essentials of data protection. It covers a range of
                                topics including applicable laws, definitions of key terms such as 'personal data' and 'processing,' identification of data
                                controllers, and their corresponding obligations. The guide also clarifies the necessity of a 'legal basis' for processing
                                personal data, outlines the rights of data subjects, and offers insights into electronic direct marketing regulations and the
                                use of cookies and similar technologies. Whether you're a data subject or a data controller, this guide serves as a valuable
                                resource to understand the foundational principles of data protection.
                            </p>
                        </div>
                        <a className="font-bold text-primary" href="/assets/legal/data protection basics.pdf">
                            {' '}
                            <em>Data Protection Basics: Full Guidance Note</em>{' '}
                        </a>
                    </div>
                </section>
            </section>
        </div>
    );
};
export default DPB;
