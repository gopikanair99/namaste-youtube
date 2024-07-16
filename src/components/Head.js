import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex justify-evenly col-span-1">
                <img onClick={() => handleToggle()} className="h-8 cursor-pointer" alt="menu" src="https://www.svgrepo.com/show/506792/burger-menu-left.svg"/>
                <img className="h-8 bg-white" alt="youtube" src="https://i.pinimg.com/736x/3a/36/20/3a36206f35352b4230d5fc9f17fcea92.jpg"/>
            </div>
            <div className="col-span-10 px-52">
                <input className="border rounded-l-2xl w-80 ml-80 px-2 py-1 text-left" type="text" />
                <button className="border rounded-r-xl px-2 py-1">Search</button>
            </div>
            <div className="col-span-1">
                <img className="h-9" alt="use" src="https://openclipart.org/download/247319/abstract-user-flat-3.svg"/>
            </div>
        </div>
    );
};

export default Head;