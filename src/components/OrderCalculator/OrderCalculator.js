import React from "react";
import {OrderListItem} from "./OrderListIem";
import {foodData} from "../FoodData";

export class OrderCalculator extends React.Component{
    render(){
        return (
            <>
                {foodData.map((item, index) => (
                <OrderListItem key={index} name={item.name}/>
                ))}
            </>
        );
    }
};