import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-45deg, #aa4d64, #ee4d64);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  width: 350px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #ee4d64;
  }

  img {
    width: 150px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }

  input {
    background: white;
    color: #333;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    margin: 5px 0;
    width: 300px;

    &::placeholder {
      color: #999;
    }
  }

  span {
    color: #ee4d64;
    align-self: flex-start;
    margin: 0 0 10px;
  }

  button {
    background: #ee4d64;
    margin: 5px 0 0;
    height: 44px;
    font-weight: bold;
    color: white;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#ee4d64')};
    }
  }

  a {
    text-decoration: none;
    color: white;
    margin-top: 15px;
    opacity: 0.8;
    font-size: 16px;

    &:hover {
      opacity: 1;
    }
  }
`
