import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import {selectCategory} from "../../Features/DiaLogSlice/categorySlice";
import {closeDialogCategory} from "../../Features/DiaLogSlice/openDialogCategorySlice";
import {useDispatch, useSelector} from "react-redux";
import {closeDialogSelectWallet} from "../../Features/DiaLogSlice/openDialogWallet";
import axios from '../../axios/index'
import {selectWallet} from '../../Features/DiaLogSlice/walletSlice'

const DialogSelectWallet = () => {
    const dispatch = useDispatch();
    const selectWalletState=useSelector(state => state.value)
    const [listWallet, setListWallet] = useState([]);
    const user=JSON.parse(localStorage.getItem('alohaUser'));
    console.log(user)

    useEffect(() => {
        axios.post('wallet/render')
            .then(res => {
                setListWallet(res.data.data)
            })
    },[])


    return (
        <div className="bg-white border-gray-800">
            <div
                className="justify-center  items-center flex overflow-x-hidden modal-dialog modal-dialog-scrollable fixed inset-0 z-100 outline-none focus:outline-none"
                tabIndex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div
                        className="border-0 rounded-[5px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div
                            className="flex items-start p-5 border-0 rounded-t">
                            <button className="pt-1 text-[#757575]" onClick={() => dispatch(closeDialogSelectWallet())}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <span className="pl-[15px] text-[20px] font-sans">
                                Select Category
                            </span>
                        </div>

                        <div className="modal-body relative w-[500px] h-[490px] border-t-2 flex-auto p-4">
                            <ul className="m-auto p-4">
                                {listWallet.map((value, index) => {
                                    return (
                                        <div key={index} className="relative pl-8 pr-8 border-b-2 hover:cursor-pointer">
                                            <li className='m-auto grid grid-cols-2' onClick={()=>{
                                                dispatch(selectWallet(value.name))
                                            }}>
                                                {value.name}
                                            </li>
                                        </div>
                                    )
                                })}
                            </ul>
                        </div>


                        {/*body*/}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default DialogSelectWallet;