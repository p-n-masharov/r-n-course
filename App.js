import { ImageBackground, StyleSheet, View } from 'react-native';
import { EndScreen, GameScreen, StartScreen } from "./screens";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [activeScreenNumber, setActiveScreenNumber] = useState(0);
  const [pickedNumber, setPickedNumber] = useState();

  const onPickNumber = (value) => {
    setPickedNumber(value)
    setActiveScreenNumber(1)
  };

  return (
    <LinearGradient colors={['#fff', '#acc7ff']} style={styles.wholeScreen}>
      <ImageBackground
        style={styles.wholeScreen}
        source={require('./assets/images/dices.jpg')}
        resizeMode={'cover'}
        imageStyle={styles.image}
      >
        {activeScreenNumber === 0 && <StartScreen onPickNumber={onPickNumber} />}
        {activeScreenNumber === 1 && <GameScreen />}
        {activeScreenNumber === 2 && <EndScreen />}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wholeScreen: {
    flex: 1,
  },
  image: {
    opacity: 0.25,
  }
});
