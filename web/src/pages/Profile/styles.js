import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  width: 350px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

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
        color: #333;
      }
    }
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.2);
    margin: 20px 0 20px;
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

  > button {
    width: calc(100% - 50px);
    background: red;
    margin: 10px 0 10px;
    height: 44px;
    font-weight: bold;
    color: white;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, 'red')};
    }
  }
`
