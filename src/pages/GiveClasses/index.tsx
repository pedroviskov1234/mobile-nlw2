import React from 'react'
import { View, ImageBackground, Text } from 'react-native'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

function GivClasses() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        resizeMode="contain" 
        source={giveClassesBgImage} 
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>

        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web
        </Text>
      </ImageBackground>

      <RectButton style={styles.okButton}> 
        <Text style={styles.okButtonText}>Tudo Bem</Text>
      </RectButton>
    </View>
  )

  
}

export default GivClasses