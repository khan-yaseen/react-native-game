import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setPickedNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (pickedNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
