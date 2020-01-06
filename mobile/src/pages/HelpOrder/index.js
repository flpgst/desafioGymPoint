import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { withNavigationFocus } from 'react-navigation'
import { Container, List, SubmitButton } from './styles'
import HelpOrders from '~/components/HelpOrders'

import api from '~/services/api'

function HelpOrder({ navigation, isFocused }) {
  const [helpOrders, setHelpOrders] = useState()

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get('help-orders')
      setHelpOrders(response.data)
    }
    if (isFocused) {
      loadHelpOrders()
    }
  }, [isFocused])

  return (
    <Container>
      <SubmitButton onPress={() => navigation.navigate('HelpOrderNew')}>
        Novo Pedido de Ajuda
      </SubmitButton>
      <List
        data={helpOrders}
        keyExtractor={item => String(item._id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('HelpOrderDetail', { item })}
          >
            <HelpOrders data={item} />
          </TouchableOpacity>
        )}
      />
    </Container>
  )
}

export default withNavigationFocus(HelpOrder)
