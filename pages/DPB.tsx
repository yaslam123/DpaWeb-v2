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
                                This guidance note, on ‘Data Protection Basics’, aims to address some of the most common questions about data protection law and
                                to clarify the basic principles underlying data protection. This guidance covers the different laws which apply in a data
                                protection context and when they apply, as well as the meaning of ‘personal data’ and ‘processing’, and how to identify a ‘data
                                controller’ and what their obligations are. It aims to explain the requirement for a ‘legal basis’ to justify the processing of
                                personal data, and outline the rights which individual ‘data subjects’ have and how they can exercise them. It also sets out the
                                basics of the rules around electronic direct marketing as well as the use of cookies and other similar technologies. This
                                guidance should assist both data subjects, as well as data controllers, particularly where read in advance of submitting a
                                request to a data controller or a query to the DPC.
                            </p>
                        </div>
                        <a className="font-bold text-primary" download href="/assets/legal/data protection basics .pdf">
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
