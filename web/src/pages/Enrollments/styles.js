import styled from 'styled-components'

export const ProgramList = styled.table`
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

export const Program = styled.td``
