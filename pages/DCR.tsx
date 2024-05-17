import Link from 'next/link';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const DCR = () => {
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
                            <h4>Controller and Processor relationships</h4>
                            <p className="pt-12 text-lg font-semibold">
                                The Data Protection Act has obligations for both data controllers (“Controllers”) and data processors (“Processors”). <br />
                                One such obligation is the obligation on Controllers and Processors to enter into a legally binding contract governing the
                                processing of personal data when a Processor is engaged to process personal data on the instruction of a Controller (a “Data
                                Processing Contract”). <br /> Obligation on Controllers and Processors under the DPA to enter into Data Processing Contract Then
                                introduction of the DPA means that the obligations on Controllers and Processors engaged in the processing of personal data are
                                broadened and strengthened.
                            </p>
                        </div>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">
                                Transfers of Personal Data to Third Countries or International Organizations
                            </h2>
                            <p className="pt-12 text-lg font-semibold">
                                Flows of personal data to and from another country are necessary for international trade and international co-operation.
                                However, the transfer of such personal data from the anywhere to controllers and processors located outside Somalia in third
                                countries should not undermine the level of protection of the individuals concerned, with a third country being any country
                                outside Somalia. Therefore, transfers to third countries or international organizations should be done in full compliance with
                                Chapter v of the Data Protection Act.
                            </p>

                            <p className="pt-12 text-lg font-semibold">
                                Article 30 – Transfers on the basis of an adequacy decision The first thing to consider when transferring personal data to a
                                third country is if there is an “adequacy decision”. An adequacy decision means that Somalia has decided that a third country or
                                an international organization ensures an adequate level of data protection. When assessing the adequacy of the level of
                                protection, Somalia takes into account elements such as the laws, respect for human rights and freedoms, national security, data
                                protection rules, the existence of a data protection authority and binding commitments entered into by the country in respect of
                                data protection.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};
export default DCR;
