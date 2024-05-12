/* eslint-disable max-len */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { toggleDirection, toggleTheme } from '../../store/themeConfigSlice';

const Header = (props: any) => {
    const router = useRouter();

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        if (window.innerWidth < 1024) {
            setShowMenu(!showMenu);
        } else {
            setShowMenu(false);
        }
    };
    const handleclick = () => {
        console.log('hi');
    };

    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <header className={`top-0 z-50 bg-black/10 duration-300 ${props.className} `}>
            <div className="!bg-green-500 container">
                <div className="flex items-center justify-between py-5 lg:py-0">
                    <Link href="/">
                        <img src="/assets/logo/DPA LOGO-01.png" alt="plurk" className="header_logo" />
                    </Link>
                    <div className="flex items-center">
                        <div onClick={() => toggleMenu()} className={`overlay fixed inset-0 z-[51] bg-black/60 lg:hidden ${showMenu ? '' : 'hidden'}`}></div>
                        <div className={`menus ${showMenu ? 'overflow-y-auto ltr:!right-0 rtl:!left-0' : ''}`}>
                            <div className="border-b border-gray/10 ltr:text-right rtl:text-left lg:hidden">
                                <button onClick={() => toggleMenu()} type="button" className="p-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6 text-black dark:text-white"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <ul onClick={() => toggleMenu()}>
                                <li>
                                    <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/E-Services" className={router.pathname === '/E-Services' ? 'active' : ''}>
                                        Services
                                    </Link>
                                </li>
                                <li className="group relative" onClick={(e) => e.stopPropagation()}>
                                    <Link
                                        href="#"
                                        className={
                                            router.pathname === '/act' ||
                                            router.pathname === '/Regulations' ||
                                            router.pathname === '/Guidelines' ||
                                            router.pathname === '/Procedures'
                                                ? 'active'
                                                : ''
                                        }
                                    >
                                        Resources{' '}
                                        <div className="transition duration-500 group-hover:rotate-180 ltr:ml-2 rtl:mr-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </Link>
                                    <div className="submenu" onClick={() => toggleMenu()}>
                                        <Link href="/act" className={router.pathname === '/act' ? 'active' : ''}>
                                            Act
                                        </Link>
                                        <Link href="/Regulations" className={router.pathname === '/Regulations' ? 'active' : ''}>
                                            {' '}
                                            Data Protection Authority Regulations{' '}
                                        </Link>
                                        {/* <Link href="/Guidelines" className={router.pathname === '/Guidelines' ? 'active' : ''}>
                                            {' '}
                                            Guidelines{' '}
                                        </Link> */}
                                        <Link href="/Procedures" className={router.pathname === '/Procedures' ? 'active' : ''}>
                                            {' '}
                                            Procedures{' '}
                                        </Link>
                                    </div>
                                </li>
                                <li className="group relative" onClick={(e) => e.stopPropagation()}>
                                    <Link href="#" className={router.pathname === '/' || router.pathname === '/' ? '' : ''}>
                                        Guidelines{' '}
                                        <div className="transition duration-500 group-hover:rotate-180 ltr:ml-2 rtl:mr-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </Link>
                                    <div className="submenu" onClick={() => toggleMenu()}>
                                        <Link href="/forPublic" className={router.pathname === '/forPublic' ? '' : ''}>
                                            For The Public
                                        </Link>
                                        <Link href="/forOrg" className={router.pathname === '/forOrg' ? '' : ''}>
                                            {' '}
                                            For Organisations &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/about-us" className={router.pathname === '/about-us' ? 'active' : ''}>
                                        About Us
                                    </Link>
                                </li>

                                <li className="relative items-center before:absolute before:top-1/2 before:h-[30px] before:w-[2px] before:-translate-y-1/2 before:bg-gray/30 ltr:before:-left-[5px] rtl:pr-9 rtl:before:-right-[2px] lg:inline-flex"></li>

                                <li className="group relative" onClick={(e) => e.stopPropagation()}>
                                    <Link href="#" className={router.pathname === '/' || router.pathname === '/' ? '' : ''}>
                                        Languages
                                        <div className="transition duration-500 group-hover:rotate-180 rtl:mr-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </Link>
                                    <div className="submenu" onClick={() => toggleMenu()}>
                                        <Link href="#" className={router.pathname === '#' ? '' : ''}>
                                            Somali
                                        </Link>
                                        <Link href="#" className={router.pathname === '#' ? '' : ''}>
                                            {' '}
                                            English &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </Link>
                                    </div>
                                </li>

                                <li
                                    className={`${showSearch ? '!w-full' : ''}
                  search-bar absolute hidden w-0 overflow-hidden bg-black transition-all duration-500 ltr:right-0 rtl:left-0 lg:block`}
                                >
                                    <form action="" className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="w-full border-b border-white bg-transparent py-1 outline-none ltr:pl-2 ltr:pr-8 rtl:pr-2 rtl:pl-8"
                                        />
                                    </form>
                                </li>
                            </ul>
                        </div>
                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
                            onClick={() => toggleMenu()}
                        >
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                <path
                                    d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

// btn flex bg-white text-black hover:bg-black hover:text-white md:mt-[60px]
