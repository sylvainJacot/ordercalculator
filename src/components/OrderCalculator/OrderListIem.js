import React from "react";
import styled from "styled-components";
import {Counter} from "./Counter";

const OrderListItemWrapper = styled.div`
display: flex;
`;

export const OrderListItem = (name) => {
    return (
        <OrderListItemWrapper>
            <h1>{name}</h1>
            <Counter/>
        </OrderListItemWrapper>
    );
};