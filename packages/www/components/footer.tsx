import React from 'react';
import Container from './container';
import Link from 'next/link';
import danieLogo from '../public/assets/images/logo.svg';

const Footer: React.FC = () => {
    return (
        <footer className="text bg-accent-1">
            <div>
                <Container>
                    <div className="w-full text-center text-m py-8 text-white">
                        Secretarium © 2020 All Rights Reserved<br />
                        <Link href="/legal"><a className="text-light-blue text-xs">Privacy policy</a></Link>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
