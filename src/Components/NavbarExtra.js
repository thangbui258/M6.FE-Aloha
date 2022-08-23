import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Container from "@mui/material/Container";


export default function NavbarExtra({onLog,idModal}) {
    return (
            <div>
                <nav
                    className="bg-white px-2 sm:px-4 py-2.5 bg-white fixed w-full h-16 z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-200">
                    <div className="container flex flex-wrap justify-between items-center ">
                        <div className="flex p-2 ">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ccc] text-xl  hover:text-black ml-16" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M11 17l-5-5m0 0l5-5m-5 5h12"/>
                                </svg>
                            </button>
                            <h2 className="text-[#000000DE] ml-4 font-sans text-xl">My Wallets</h2>

                        </div>
                        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                             id="navbar-sticky">
                            <button onClick={onLog} className="flex" data-modal-toggle={idModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                </svg>Create Wallet
                            </button>
                            {/*<label htmlFor="#navbar-sticky" ></label>*/}
                        </div>
                    </div>
                </nav>
            </div>

    );
}