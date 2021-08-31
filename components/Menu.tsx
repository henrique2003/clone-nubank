import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  translateY: Animated.Value
}

const Menu: React.FC<Props> = ({ translateY }) => {
  return (
    <Animated.ScrollView
      style={[styles.container, {
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1]
        })
      }]}
    >
      <View style={styles.code}>
        <QRCode
          value="http://facebook.github.io/react-native/"
          size={80}
          backgroundColor="#fff"
          color="#8b10ae"
        />
      </View>
      <View style={styles.nav}>
        <View style={styles.navItem}>
          <MaterialIcons name="help-outline" size={20} color="#fff" />
          <Text style={styles.navText}>Me ajuda</Text>
        </View>
        <View style={styles.navItem}>
          <MaterialIcons name="person-outline" size={20} color="#fff" />
          <Text style={styles.navText}>Perfil</Text>
        </View>
        <View style={styles.navItem}>
          <MaterialIcons name="credit-card" size={20} color="#fff" />
          <Text style={styles.navText}>Congiguracao do cartao</Text>
        </View>
        <View style={styles.navItem}>
          <MaterialIcons name="smartphone" size={20} color="#fff" />
          <Text style={styles.navText}>Configuracao do app</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutButtonText}>Sair do app</Text>
      </TouchableOpacity>
    </Animated.ScrollView>
  )
}

const { create, hairlineWidth } = StyleSheet

const styles = create({
  container: {
    marginStart: 30,
    marginEnd: 30
  },
  code: {
    backgroundColor: '#fff',
    padding: 10,
    alignSelf: 'center'
  },
  nav: {
    marginTop: 30,
    borderTopWidth: hairlineWidth,
    borderBottomWidth: hairlineWidth,
    borderBottomColor: 'rgba(255, 255, 255 , 0.8)',
    borderTopColor: 'rgba(255, 255, 255 , 0.8)'
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
    paddingTop: 12,
    borderBottomWidth: hairlineWidth,
    borderBottomColor: 'rgba(255, 255, 255 , 0.8)'
  },
  navText: {
    fontSize: 15,
    marginStart: 20,
    color: '#fff'
  },
  signOutButton: {
    borderWidth: hairlineWidth,
    borderColor: 'rgba(255, 255, 255 , 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 15
  },
  signOutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    textTransform: 'uppercase'
  }
})

export default Menu
