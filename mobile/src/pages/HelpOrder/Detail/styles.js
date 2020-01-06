import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
`
export const Content = styled.View`
  padding: 5px;
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

export const HeaderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #666;
`

export const ContentText = styled.Text`
  margin-top: 20px;
  color: #666;
  line-height: 26px;
  font-size: 14px;
`
