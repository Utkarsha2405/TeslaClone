import React from 'react'
import styled from 'styled-components'
import  img from '../teslacloneimages/model-s.jpg'


function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order online for touchless delivery</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>
          Custom Order
        </LeftButton>
        <RightButton>
          Existing Inventory
        </RightButton>
      </ButtonGroup>
      </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${img}); 
background-size: 100vw 100vh;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between; // vertical
align-items: center // horizontal
`
const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`
const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;

`
const LeftButton = styled.div`
 background-color: rgba(23, 26, 32, 0.8);
 height: 40px;
 width: 250px;
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 100px;
 opacity: 0.85;
 text-transform: uppercase;
 font-size: 12px;
 cursor: pointer;


`
const RightButton = styled(LeftButton)`
`
const DownArrow = styled.div`

`
