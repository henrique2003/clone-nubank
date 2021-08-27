import React from 'react'
import { View, StyleSheet } from 'react-native'

import Header from '../components/Header'

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b10ae'
  }
})

export default Main
