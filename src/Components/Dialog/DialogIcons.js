import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {closeDialogWallet} from "../../Features/DiaLogSlice/openDialogMyWalletSlice";
import {closeDialogIcons} from "../../Features/DiaLogSlice/openDialogIconsSlice";

export default function DialogIcons() {
    const [icons, setIcons] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:8080/icon/').then(result => {
            setIcons(result.data.data);
        })
    },[])
    console.log(icons)

    const handleCloseDialogIcons = () => {
        dispatch(closeDialogIcons(false))
    }


    return (

        <div>
            <div
                className="justify-center  items-center flex overflow-x-hidden overflow-y-auto modal-dialog modal-dialog-scrollable fixed inset-0 z-50 outline-none focus:outline-none"
                tabIndex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div
                        className="border-0 rounded-[5px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div
                            className="flex items-start p-5 border-b border-solid border-slate-200 rounded-t">
                            <button className="pt-1 text-[#757575]" onClick={handleCloseDialogIcons}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                            </button>
                            <span className="pl-[15px] text-[20px] font-sans">
                                Select icon
                            </span>
                        </div>
                        {/*body*/}
                        <div className="modal-body relative w-[496px] h-[600px] flex-auto p-4">
                            <ul className="grid grid-cols-8 grid-rows-4 gap-2 grid-flow-row">
                                {icons.map((icon,index)=>{
                                    return(
                                        <li className="" key={index}><button className=" hover:bg-[#F0F9F1]"><img src={icon?.url} alt="thinh"/></button></li>
                                    )
                                })}
                            </ul>
                        </div>
                        {/*footer*/}
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"/>
        </div>

    )
}