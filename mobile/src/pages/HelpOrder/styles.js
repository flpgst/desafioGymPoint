import styled from 'styled-components/native'
import Button from '~/components/Button'

export const Container = styled.SafeAreaView`
  flex: 1;
`
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 }
})``

export const SubmitButton = styled(Button)`
  margin: 25px 30px -5px 30px;
`
