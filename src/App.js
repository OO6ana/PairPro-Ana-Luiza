import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0.4rem;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`
export const RobotoFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
`
export const Container = styled.div`
  width: 100%;
  height: 12.5rem;
  background-color: #FFFFFF;

  h1{
    color: #373737;
    font-size: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const MenuBox = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    li{
      display: inline;
      color: #373737;
      text-align: left;
      size: 24px;
      font-weight: 700;
    }
    li:hover{
      color: #fff;
      background-color: #373737;
      border: 1px solid #136497;
      transition: all .5s;
      border: 5px solid transparent;
    }
`
export const TextCenter = styled.div`
  background-color: #F2F4F1;
  p{
    color: #373737;
    font-size: 30px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const CenterBox = styled.div``
export const ImgBox = styled.div``
export const TextInfo = styled.div`
  p:first-child{
    font-size: 40px;
    color: #373737;
    font-weight: 600;
  }
`
export const Divider = styled.div`
    width: 10vh;
    height: 1px;
    background-color: #000;
    margin: 12px 0;
`
export const FGray = styled.div`
  background-color: #DFE4DE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p:first-child{
    color: #373737;
    font-size: 40px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4.2px;
  }
  p{
    color: #373737;
    font-size: 20px;
    letter-spacing: 2.05px;
  }
  input{
    border: none;
    background-color: #EFF1EE;
    width: 658px;
    height: 85px;
    font-size: 15px;
  }
  button{
    border: 6px solid #373737;
    background-color: #DFE4DE;
    margin: 15px 0;
    cursor: pointer;
    font-size: 24px;
    transition: 0.2s;
    letter-spacing: 2.05px;
  }
  button:hover{
    background-color: #EFF1EE;
  }
`
export const FWhite = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F2F4F1;
`
export const ImgFooter = styled.div``
export const FBlueDark = styled.div`
  width: 100%;
  height: 60px;
  background-color: #446061;
  padding: 65px;

  p{
    font-size: 10px;
    color: #ffff;
    opacity: 0.5;
    letter-spacing: 1.68px;
  }
`

export default function App(){
  return(
    <>
    <GlobalStyle/>
  <header>
      <Container>
        <MenuBox>
          <h2>RC</h2>
          <nav>
            <ul>
              <li>ABOUT</li>
              <li>RECIPES</li>
              <li>SUBSCRIBE</li>
            </ul>
          </nav>
        </MenuBox>
        <h1>RECIPES</h1>
      </Container>
  </header>

  <main>
    <TextCenter>
      <p>LATEST RECIPES</p>
    </TextCenter>
    <Divider></Divider>
    <CenterBox>
      <ImgBox>
      <img src="image./header-fundo" alt="imagem de colher com sal grosso"></img>
      </ImgBox>
      <TextInfo>
      <p>ABOUT</p>
      <Divider></Divider>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem,
        eu tincidunt libero velit sit amet velit. Nunc in euismod urna.
        Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur
        lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec
        mollis sagittis, enim risus euismod nisi, quis rutrum quam augue
        id mauris. Pellentesque mattis hendrerit semper. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis.</p>
      </TextInfo>
    </CenterBox>
  </main>

  <footer>
    <FGray>
      <p>subscribe</p>
      <p>Sign up for newsletter</p>
      <input placeholder="Your E-mail"/>
      <button>SUBMIT</button>
    </FGray>
    <FWhite>
      <ImgFooter></ImgFooter>
      <MenuBox>
      <nav>
            <ul>
            <li>ABOUT</li>
              <li>RECIPES</li>
              <li>SUBSCRIBE</li>
            </ul>
          </nav>
      </MenuBox>
    </FWhite>
    <FBlueDark>
      <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</p>
    </FBlueDark>
  </footer>
    </>
  )
}