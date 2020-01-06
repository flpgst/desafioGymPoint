import styled from 'styled-components'
import { darken, lighten } from 'polished'

export const Title = styled.h1`
  margin: 50px auto;
  padding-left: 250px;
  color: #fff;
  display: flex;
  flex-direction: row;
  float: left;
`

export const Buttons = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-end;
  margin: 50px auto;

  button {
    width: 150px;
    background: #fff;
    height: 44px;
    font-weight: bold;
    color: #ee4d64;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    margin: 10px;

    &:hover {
      background: ${lighten(0.1, '#ee4d64')};
      color: #eee;
    }
  }
`

export const Container = styled.div`
  clear: both;
  max-width: 900px;
  margin: 50px auto;
  width: ${props => props.width || '350px'};
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

      :disabled {
        background: #ccc;
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
    background: ${props => (props.flat ? 'none' : 'red')};
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
export const List = styled.table`
  border: 0;
  padding: 10px;
  margin: 10px;
  border-collapse: collapse;
  width: 900px;

  tbody {
    &:hover {
      background: #eee;
    }
  }
  th {
    font-weight: bold;
    font-size: 16px;
    padding: 10px;
    margin: 10px;
  }
  td {
    text-align: center;
    justify-content: center;
    justify-items: center;
    align-items: center;

    button {
      background: none;
      color: ${props => props.color};
      font-weight: normal;
      padding: 10px;

      &:hover {
        background: none;
      }
    }
  }
`
