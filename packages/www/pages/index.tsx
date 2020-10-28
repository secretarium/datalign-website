import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import styles from './index-styles.module.css';
import PostTitle from '../components/post-title';
import Container from '../components/container';

const Index: React.FC = () => {
    return (
        <>
            <Layout>
                <Head>
                    <title>DANIE</title>
                </Head>
                <section id="banner" className={`${styles.banner} bg-blue-900`}>
                    <Container padding="p-0 md:p-5">
                        <div className="py-8 pb-32 flex flex-col lg:flex-row text-center md:text-left text-blue-500">
                            <div className="px-12 md:px-8 lg:w-2/3">
                                <PostTitle>DANIE</PostTitle>
                                <p className="text-xl text-white">
                                    A community of financial institutions harnessing the latest privacy enhancing technology to collaborate and share insights securely.
                                </p>
                            </div>
                            {/* <div className="lg:w-2/3 items-center lg:items-end overflow-hidden md:pl-0" style={{
                                // maxHeight: '50rem'
                                height: '50rem'
                            }}>
                                <div className={styles.bannerImageContainer}>
                                    <img alt="Main screen" src={mockOne} className={styles.bannerImageOne} />
                                </div>
                            </div> */}
                        </div>
                    </Container>
                </section>
                <section id="join" className="bg-blue-100">
                    <Container>
                        <div className="flex">
                            <div className="w-full text-center px-8 py-20">
                                <h2 className="text-2xl md:text-3xl pb-5 text-gray-900">
                                    Join the DANIE community launch event
                                </h2>
                                <h3 className="text-xl md:text-2xl text-blue-500 pb-16">
                                    The future of secure data collaboration.
                                </h3>
                                <p className="text-lg pb-12">
                                    Wednesday 28th October<br />
                                    4pm - 6pm CET, 3pm - 5pm GMT, 11am - 12pm Eastern Time
                                </p>
                                <p className="text-lg pb-12 text-blue-500">
                                    RSVP: <a href="mailto:community@danie.tech">community@danie.tech</a>
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export default Index;
