import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import { PrimaryButton } from '../../components';

const MAX_DIGITS = 2;

const StartScreen = ({ onPickNumber }) => {
  const [inputValue, setInputValue] = useState('');

  const resetInputValue = () => {
    setInputValue('');
  };

  const onConfirm = () => {
    const inputValueNumber = parseInt(inputValue);
    if (Number.isNaN(inputValueNumber) || inputValueNumber <= 0 || inputValueNumber > 99) {
      Alert.alert(
        'Invalid number', // TODO translate
        'It has to be from 1 to 99', // TODO translate
        [{text: 'Ok', style: 'destructive', onPress: resetInputValue}]
      )
      return;
    }

    onPickNumber(inputValueNumber);
  };

  const onReset = () => {
    resetInputValue();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        maxLength={MAX_DIGITS}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
      />
      <View style={styles.buttons}>
        <PrimaryButton style={styles.button} onPress={onReset}>
          Reset {/* // TODO translate */}
        </PrimaryButton>
        <PrimaryButton style={styles.button} onPress={onConfirm}>
          Confirm {/* // TODO translate */}
        </PrimaryButton>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#acc7ff',
    marginTop: 100,
    marginHorizontal: 40,
    borderRadius: 4,
    elevation: 2, // platform android
    shadowColor: 'black', // platform iOS
    shadowOffset: { // platform iOS
      width: 3,
      height: 3,
    },
    shadowRadius: 4, // platform iOS
    shadowOpacity: .1, // platform iOS
  },
  input: {
    width: 50,
    height: 50,
    borderRadius: 4,
    fontSize: 24,
    color: '#acc7ff',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  button: {
    flex: 1,
  },
});

export { StartScreen };
