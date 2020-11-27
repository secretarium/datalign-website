import React from 'react';
import Layout from '../components/layout';
import styles from './index-styles.module.css';
import PostTitle from '../components/post-title';
import Container from '../components/container';
import macbookPro from '../public/assets/images/macbookProDataline.svg';
import secreteriumLogoPartners from '../public/assets/images/secretarium.svg';
import intel from '../public/assets/images/intel.svg';
import swisscom from '../public/assets/images/swisscom.svg';
import macWhite from '../public/assets/images/whiteMac.svg';
import Head from 'next/head';

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>DATALIGN Privacy Notice</title>
            </Head>
            <Layout>
                <div className={styles.lightTriangle}></div>
                <section className={`overflow-hidden ${styles.logoBackground}`} >
                    <Container>
                        <div className={styles.darkTriangle}></div>
                        <div className="text-left py-8 pb-32 flex flex-col lg:flex-row  text-medium-blue">
                            <div className="sm:w-2/3 md:px-12 md:px-8 lg:w-1/2 text-white">
                                <PostTitle>Datalign <br></br> by Secretarium</PostTitle>
                                <p className="z-10 sm:text-base md:text-xl text-light-blue font-bold">
                                    Enabling collborative insight on confidential data since 2018
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>
                <Container >
                    <div className="flex ">
                        <div className="w-full text-center px-8 py-20 ">
                            <h2 className="text-2xl md:text-3xl pb-5 text-accent-1 font-extrabold">
                                Provably confidential collaboration with peers
                            </h2>
                            <h3 className="text-xl md:text-2xl text-light-blue pb-4 font-bold">
                                We provide next generation benchmarking for data reconciliation.
                            </h3>
                            <p className="text-lg pb-12 text-accent-1 font-semibold ">
                                Datalign allows you to collaborate with peers, without having to rely on a trusted
                                third-party, in a fully privacy-preserving and automated way
                            </p>
                        </div>
                    </div>
                </Container>
                <section className='bg-gray-200  overflow-hidden '>
                    <Container >
                        <div className="md:flex">
                            <div className="block text-center w-full md:w-w-1/2 md:text-left px-8 py-16 ">
                                <h2 className="  text-2xl md:text-3xl pb-5 text-accent-1 font-extrabold ">
                                    Data is never disclosed
                                </h2>
                                <h3 className="  text-lg text-light-blue pb-4 font-bold lg:text-2xl">
                                    Datalign is built on a confidential computing technology top make sure data submissions are kept in secret
                                </h3>
                                <p className=" text-accent-1 text-lg md:pb-12 font-semibold">
                                    Meaning you can pool your data with peers whils making sure nobody, including us can see your data.
                                </p>
                            </div>
                            <div className='md:w-1/2  lg:pt-0 '>
                                <img alt='computerMac' src={macbookPro} className={`${styles.iconMacPro}`} />
                            </div>
                        </div>
                    </Container>
                </section>
                <section className='bg-medium-blue transform'>
                    <Container>
                        <div className="flex ">
                            <div className=" w-full text-center px-8 py-20 inline ">
                                <h2 className="text-white text-2xl md:text-3xl pb-5 md:font-extrabold ">
                                    Datalign benchmarks all types of datasets
                                </h2>
                                <h3 className="text-white text-xl md:text-2xl pb-4 font-bold">
                                    Now you can compare sensitive data with peers, without worrying about data privacy.
                                </h3>
                                <p className="text-white text-lg pb-12 font-semibold">
                                    Datalign allows you to compare all kinds of data metrics, like client reference data, commercial margins and product prices, while perserving total secrey and anonyminity
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className='bg-gray-200'>
                    <Container >
                        <div className="md:flex ">
                            <div className='sm:block sm:pl-16 pt-4 md:float-left md:pt-16 lg:pt-8'>
                                <img alt='computerMac' src={macWhite} className={`${styles.iconMac} `} />
                            </div>
                            <div className="text-center sm:w-full pt-4 sm:block md:w-2/3 md:text-left md:px-8 md:py-20 md:float-right md:inline">
                                <h2 className="text-2xl md:text-3xl pb-5 text-accent-1 font-extrabold">
                                    What makes Datalign Unique?
                                </h2>
                                <h3 className="text-xl md:text-2xl text-light-blue pb-4 font-bold">
                                    Datalign is a decentralised solution built for collaboration.
                                </h3>
                                <p className="text-lg pb-12 text-accent-1 font-semibold">
                                    Each party has control of their own data, but no ties to the other participants. Datalign is easy to use and can process more than 2000 records per second
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className='bg-medium-blue  transform -skew-y-3'>
                    <Container>
                        <div className="flex">
                            <div className="w-full text-center px-8 py-20 transform skew-y-3">
                                <h2 className="text-2xl md:text-3xl pb-5 text-white font-bold lg:text-4xl">
                                    The only tested solution proven to maintain complete privacy for data collaboration
                                </h2>
                                <p className="text-lg md:text-2xl pb-12 font-bold text-white">
                                    Datalign has been used by some of the largest banks in the world and has alredy been trailed to succesfullt reconcile millions of records across peers securely
                                </p>
                                <p className="text-lg  md:text-2xl pb-12 text-white ">
                                    It is part of the product suite for the DANIE group: a community of finacical instiations harnessing the altes pricvacy and enhancing technology to collaborate and share insight securely.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>
                <Container>
                    <div>
                        <div className="w-full text-center px-8 py-20">
                            <h2 className="text-2xl md:text-3xl pb-5 text-accent-1 font-extrabold lg:text-5xl">
                                Who's behind Datalign?
                            </h2>
                            <div className="sm:w-full text-accent-1 text-base md:text-xl text-center lg:flex ">
                                <div className='md:w-1/2 inline-block'><div className='sm:w-full flex justify-center pt-8 md:pt-16  '><img alt='logo' src={secreteriumLogoPartners} className={styles.partnerLogo} /></div><div className='sm:text-lg md:block text-accent-1' ><h1 className='text-light-blue font-bold'>Secretarium</h1><br></br>Datalign is built by Secretarium a deep tech start up specliaisng in cryptography, Privacy Enhancing Technologies and privacy</div></div>
                                <div className='sm:pt-6 md:w-1/2 inline-block'><div className='sm:w-full flex justify-center pt-8 md:pt-16'><img alt='intel' src={intel} className={styles.partnerLogo} /></div><div className='sm:text-lg md:block text-accent-1'><h1 className='pt-4 text-light-blue font-bold'>Intel</h1><br></br>Datalign by Secretarium is supported by Intel with the latest hardware and engineering collaboration</div></div>
                                <div className='sm:pt-6 md:w-1/2 inline-block'><div className='sm:w-full flex justify-center pt-8 md:pt-16'><img alt='swisscom' src={swisscom} className={styles.partnerLogo} /></div><div className='sm:text-lg md:block text-accent-1'><h1 className='text-light-blue font-bold'>Swisscom</h1><br></br>Datalign can be hosted by Secretarium's partner Swisscom to benefit from Swiss privacy law and neutral jurisdiction </div></div>
                            </div>
                        </div>
                    </div>
                </Container>
                <section className='bg-gray-200'>
                    <Container>
                        <div className="flex">
                            <div className="w-full text-center px-8 py-20">
                                <h2 className="text-2xl md:text-3xl pb-5 text-accent-1 font-extrabold">
                                    Partner Enquiries
                                </h2>
                                <h3 className="text-base md:text-xl  text-accent-1 ">
                                    If you're interested in finding out more about technology, or how confidential computing could help you collaborate better on data, we'd love to hear from you at  <p className="text-lg pb-12 text-blue-500">
                                        <a href="mailto:contact@datalign.co.uk">contact@datalign.co.uk</a>
                                    </p>
                                </h3>
                            </div>
                        </div>
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export default Index;
