import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import './App.css';
import Homepage from './components/Homepage'

injectGlobal`
    html, body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
        @media screen and (max-width: 360px) {
            font-size: 14px;
        }
        @media screen and (max-width: 768px) {
            font-size: 16px;
        }
        font-size: 18px;
    };
    button {
        cursor: pointer;
    }
    a {
        cursor: pointer;git
    }
`

const Wrapper = styled.div`
    text-align: center;
`


class App extends Component {
  render() {
    return (
      <Wrapper>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <Homepage/>
      </Wrapper>
    );
  }
}

export default App;