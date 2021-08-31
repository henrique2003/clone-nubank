import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Logo from '../images/Nubank_Logo.png'

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={Logo} />
        <Text style={styles.title}>Henrique</Text>
      </View>
      <MaterialIcons size={20} name="keyboard-arrow-down" color="#fff" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8
  }
})

export default Header
