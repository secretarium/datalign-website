import React from 'react';
import Link from 'next/link';
import navBarStyles from './nav-bar-styles.module.css';
import mainLogo from '../public/assets/images/mainLogo.png';

type NavBarProps = {
    fixedToggle?: boolean;
};

const NavBar: React.FC<NavBarProps> = ({ fixedToggle }) => {

    return (
        <div className={`${navBarStyles.navBarWrapper} ${fixedToggle ? '' : navBarStyles.fixedToggle} bg-medium-blue overflow-visible`}>
            <div className={`container mx-auto px-5 md:text-center ${navBarStyles.navBar}`}>
                <nav className="flex items-center  flex-wrap">
                    <Link href="/" >
                        <a className={`sm:pl-2 z-10 flex flex-shrink-0 text-white ${navBarStyles.logoWrapper} `}>
                            <img src={mainLogo} alt="Secretarium" className="inline-block z-10" />
                        </a>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
