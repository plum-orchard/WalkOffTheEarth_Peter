import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    padding: 200px;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,.7);

    z-index: 550;
    text-align:center;

    h1{
        color:white;
        font-size:3rem;
        text-align:center;
        line-height:140%;
    }

    div{
        width:100vw;
        height:100vh;
        top:0;
        left:0;
    }

`;

const Title = styled.h1`
    display:block;
    font-size:3rem;
    line-height:140%;
    text-align:center;
    color:white;
`;

const SubTitle = styled.h3`
    font-size:1.2rem;
    line-height:140%;
    text-align:center;
    color:white;
    width:90%;
    max-width:360px;
`;

const DiscountLabel = styled.h4`
    font-size:1.4rem;
    line-height:140%;
    text-align:center;
    color:white;
    width:90%;
    max-width:360px;
`;

const DiscountCode = styled.p`
    font-size:1rem;
    line-height:140%;
    text-align:center;
    color:white;
    width:90%;
    max-width:360px;
`;

const CloseModal = styled.button`
    font-size:1rem;
    line-height:100%;
    padding:16px 24px;
    border:1px solid #fff;
    border-radius:2px;
    color:#fff;
    transition: all .3s;
`;

class PrizeModal extends Component{
    render(){ 
        return(
            <Wrapper>
                <div>
                    <h1>You Win!</h1>
                </div>
            </Wrapper>
            // <Wrapper>
            //     <Title>Complete!</Title>
            //     <SubTitle>You've completed all of the activities and earned a one time discount code for the tour merch!</SubTitle>
            //     {"\n"}
            //     <DiscountLabel>DISCOUNT CODE:</DiscountLabel>
            //     <DiscountCode>ABC123</DiscountCode>
            // </Wrapper>
        )
    }
}


export default PrizeModal