import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  box-sizing: border-box;
  border-top: ${({type}) => type === 'outside' ? 'black solid 2px' : 'none'};
  top: ${({y}) => y * process.env.REACT_APP_CELL_SIZE}px;
  left: ${({x}) => x * process.env.REACT_APP_CELL_SIZE}px;
  background-color: ${({type}) => getShelfColor(type)};
`;

function getShelfColor(type) {
    switch (type) {
        case 'path':
            return 'white';
        case 'multimedia':
            return '#DAE8FC';
        case 'games':
            return '#D5E8D4';
        case 'everydayShopping':
            return '#F8CECC';
        case 'childcare':
            return '#B0E3E6';
        case 'domesticAppliance':
            return '#B9C8D3';
        case 'promotions':
            return '#FBFBFB';
        case 'alcohol':
            return '#E1D5E7';
        case 'bedding':
            return '#FFF2CC';
        case 'DIY':
            return '#FFE6CC';
        default:
            return 'white';
    }
}

function Cell({x, y, type}) {
    return (
        <StyledContainer x={x} y={y} type={type}/>
    );
}

export default Cell;
