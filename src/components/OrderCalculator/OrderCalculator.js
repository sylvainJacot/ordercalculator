import React from "react";
import {OrderListItem} from "./OrderListIem";
import {FoodData} from "../FoodData";

export class OrderCalculator extends React.Component{
    render(){
        return (
            <>
                {Object.values(FoodData).map((item, index) => (

                <OrderListItem key={index} name={item.name}/>

                ))}
            </>
        );
    }
};