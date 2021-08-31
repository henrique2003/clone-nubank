import React from 'react'
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  translateY: Animated.Value
}

const Tabs: React.FC<Props> = ({ translateY }) => {
  return (
    <Animated.View style={[styles.container,
      {
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp'
          })
        }]
      }, {
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp'
        })
      }]}>
      <ScrollView
        contentContainerStyle={styles.tabsContentContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.tabItem}>
          <MaterialIcons size={24} color="#fff" name="person-add" />
          <Text style={styles.tabText}>Indicar amigos</Text>
        </View>
        <View style={styles.tabItem}>
          <MaterialIcons size={24} color="#fff" name="chat-bubble-outline" />
          <Text style={styles.tabText}>Cobrar</Text>
        </View>
        <View style={styles.tabItem}>
          <MaterialIcons size={24} color="#fff" name="arrow-downward" />
          <Text style={styles.tabText}>Depositar</Text>
        </View>
        <View style={styles.tabItem}>
          <MaterialIcons size={24} color="#fff" name="arrow-upward" />
          <Text style={styles.tabText}>Transferir</Text>
        </View>
        <View style={styles.tabItem}>
          <MaterialIcons size={24} color="#fff" name="lock" />
          <Text style={styles.tabText}>Bloquear cartao</Text>
        </View>
      </ScrollView>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 20
  },
  tabsContentContainer: {
    paddingStart: 10,
    paddingEnd: 20
  },
  tabItem: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    marginLeft: 10,
    padding: 10,
    justifyContent: 'space-between'
  },
  tabText: {
    fontSize: 13,
    color: '#fff'
  }
})

export default Tabs
