import styled from 'styled-components/native'
import Button from '~/components/Button'

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

export const SubmitButton = styled(Button)`
  margin: 5px 30px;
`
export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#666'
})`
  height: 300px;
  font-size: 15px;
  margin-left: 10px;
`
