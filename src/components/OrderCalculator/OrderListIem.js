import React, {useState} from "react";
import styled from "styled-components";
import {Counter} from "./Counter";
import {foodData} from "../FoodData";

const OrderListItemWrapper = styled.div`
display: flex;
`;

export class OrderListItem extends React.Component {
   render() {
       const {name} = this.props;
    return (
        <OrderListItemWrapper>
            <h1>{name}</h1>
            <Counter/>
        </OrderListItemWrapper>
    );
   }
};

