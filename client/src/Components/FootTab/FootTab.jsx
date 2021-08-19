import React from "react";
import {RiHandbagLine} from "react-icons/ri";
import {IoFastFoodOutline} from "react-icons/io5";
import {BiDrink} from "react-icons/bi";
import {IoNutritionOutline} from "react-icons/io5";


const MobileTab = () => {
    return <>
    <div className="lg:hidden bg-white shadow-2xl p-3 fixed bottom-0 z-10 w-full flex items-center md:justify-evenly justify-between text-gray-500 border">
        <div className="flex flex-col items-center text-2xl mr-6">
            <RiHandbagLine/>
            <h5 className="text-sm">Delivery</h5>
        </div>
        <div className="flex flex-col items-center text-2xl">
            <IoFastFoodOutline/>
            <h5 className="text-sm">Dining Out</h5>
        </div>
        <div className="flex flex-col items-center text-2xl">
            <BiDrink/>
            <h5 className="text-sm">Night Life</h5>
        </div>
        <div className="flex flex-col items-center text-2xl ml-6">
            <IoNutritionOutline/>
            <h5 className="text-sm">Nutrition</h5>
        </div>
    </div>
    </>;
}

const LargeTab = () => {
    return <>
        <div className="hidden lg:flex gap-14 container px-20 mx-auto">
            <div className="flex items-center gap-3">

                <div className="w-12 h-12 relative">
                    <div className="w-full h-full absolute -z-10 hover:bg-red-100 mix-blend-multiply rounded-full"></div>
                    <img src="https://zomato.runnr.in/assets/services-bike-25b97ce6cfe032fd51c72a44b4f72c282d64875800fe1932c4e6b98f6fb928f4.png" 
                    alt="delivery" 
                    className="rounded-full w-full h-full" 
                    />                
                </div>
                <h3 className="text-xl text-gray-500 font-semibold">Delivery</h3>
            </div>
            <div className="flex items-center gap-3">

            <div className="w-12 h-12 relative">
                <div className="w-full h-full absolute -z-10 hover:bg-gray-200 mix-blend-multiply rounded-full"></div>
                <img src="https://cdn.iconscout.com/icon/free/png-256/dinner-plate-2-532639.png" 
                alt="delivery" 
                className="rounded-full w-full h-full" 
                />                
            </div>
            <h3 className="text-xl text-gray-500 font-semibold">Dining Out</h3>
            </div>
            <div className="flex items-center gap-3">

            <div className="w-12 h-12 relative">
                <div className="w-full h-full absolute -z-10 hover:bg-yellow-100 mix-blend-multiply rounded-full"></div>
                <img src="https://static.thenounproject.com/png/1073467-200.png" 
                alt="delivery" 
                className="rounded-full w-full h-full p-1" 
                />                
            </div>
            <h3 className="text-xl text-gray-500 font-semibold">NightLife</h3>
            </div>
            <div className="flex items-center gap-3">

            <div className="w-12 h-12 relative">
                <div className="w-full h-full absolute -z-10 hover:bg-green-100 mix-blend-multiply rounded-full"></div>
                <img src="https://static.thenounproject.com/png/2130454-200.png" 
                alt="delivery" 
                className="rounded-full w-full h-full" 
                />                
            </div>
            <h3 className="text-xl text-gray-500 font-semibold">Nutrition</h3>
            </div>
    </div>

    </>;
}

const FootTab = () => {
    return <>
        <div>
            <MobileTab/>
            <LargeTab/>
        </div>
    </>;
}


export default FootTab;