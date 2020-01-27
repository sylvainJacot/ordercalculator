import React, {useState} from "react";
import styled from "styled-components";

const CounterWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 80px;
`;

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <CounterWrapper>
                <button onClick={() => setCount(count - 1)}>-</button>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
            </CounterWrapper>
        </>
    );
};