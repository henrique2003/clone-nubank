import React from 'react'
import { View, StyleSheet, Text, Animated } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { HandlerStateChangeEvent, PanGestureHandler, PanGestureHandlerEventPayload, State } from 'react-native-gesture-handler'

import Header from '../components/Header'
import Tabs from '../components/Tabs'
import Menu from '../components/Menu'

const Main: React.FC = () => {
  let offset = 0
  const translateY = new Animated.Value(0)

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  )

  function onHandlerStateChange (event: HandlerStateChangeEvent<PanGestureHandlerEventPayload>): void {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let open = false
      const { translationY } = event.nativeEvent

      offset += translationY as number

      if (translationY >= 100) {
        open = true
      } else {
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: open ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = open ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View style={[styles.card, {
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp'
              })
            }]
          }]}>
            <View style={styles.cardHeader}>
              <MaterialIcons name="attach-money" size={28} color="#666" />
              <MaterialIcons name="visibility-off" size={28} color="#666" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.title}>Saldo disponivel</Text>
              <Text style={styles.description}>R$ 4.002</Text>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.lastNotification}>Ultima transferencia realizada as 4:00 dessa manha.</Text>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>
      <Tabs translateY={translateY} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b10ae',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginStart: 20,
    marginEnd: 20,
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30
  },
  cardContent: {
    flex: 1,
    paddingStart: 30,
    paddingEnd: 30,
    justifyContent: 'center'
  },
  cardFooter: {
    padding: 30,
    backgroundColor: '#eee',
    borderRadius: 4
  },
  title: {
    fontSize: 13,
    color: '#999'
  },
  description: {
    fontSize: 32,
    marginTop: 3,
    color: '#333'
  },
  lastNotification: {
    color: '#333',
    fontSize: 12
  }
})

export default Main
