import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Icon from 'react-native-vector-icons/MaterialIcons'

import SignIn from './pages/SignIn'
import Checkin from './pages/Checkin'
import HelpOrder from './pages/HelpOrder'
import HelpOrderDetail from './pages/HelpOrder/Detail'
import HelpOrderNew from './pages/HelpOrder/New'

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn
        }),
        App: createBottomTabNavigator(
          {
            Checkin,
            HelpOrder: {
              screen: createStackNavigator(
                { HelpOrder, HelpOrderDetail, HelpOrderNew },
                {
                  defaultNavigationOptions: {
                    title: false,
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20
                    }
                  }
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Pedir Ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                )
              }
            }
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4e62',
              inactiveTintColor: '#999'
            }
          }
        )
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign'
      }
    )
  )
