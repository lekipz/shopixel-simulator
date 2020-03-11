import React from "react";
import Cell from "./Cell";
import styled from "styled-components";
import data from "../assets/shop";

const StyledContainer = styled.div`
  width: ${process.env.REACT_APP_CELL_SIZE * 13}px;
  height: ${process.env.REACT_APP_CELL_SIZE * 9}px;
  position: relative;
  border: blue solid 1px;
`;

function Shop() {
    return (
        <StyledContainer>
            {data.shop.map(({x, y, type}, index) =>
                <Cell key={index} x={x} y={y} type={type}/>
            )}
        </StyledContainer>
    );
}

export default Shop;
