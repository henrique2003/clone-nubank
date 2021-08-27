import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import Logo from '../images/Nubank_Logo.png'

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={Logo} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30
  }
})

export default Header
