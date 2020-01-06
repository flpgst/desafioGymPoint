import styled from 'styled-components/native'

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Time = styled.Text`
  font-size: 14px;
  color: #666;
`

export const Answered = styled.View`
  flex-direction: row;
  align-items: center;
`

export const AnsweredText = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.color};
`

export const Question = styled.Text`
  margin-top: 20px;
  color: #666;
  line-height: 26px;
  font-size: 14px;
`
