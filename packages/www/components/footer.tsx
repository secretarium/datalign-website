import React from 'react';
import Container from './container';
import Link from 'next/link';
import danieLogo from '../public/assets/images/logo.svg';

const Footer: React.FC = () => {
    return (
        <footer className="text">
            <div className="text-blue-900">
                <Container>
                    <div className="py-28 px-8 text-center">
                        <img alt="DANIE" src={danieLogo} style={{
                            height: '5rem',
                            margin: 'auto'
                        }} className="display-block" />
                    </div>
                    <hr />
                </Container>
            </div>
            <div>
                <Container>
                    <div className="w-full text-center text-m py-10 bg-white">
                        Secretarium © 2020 All Rights Reserved<br />
                        <Link href="/legal"><a className="text-blue-500">Privacy policy</a></Link>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
