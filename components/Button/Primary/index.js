import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, onPress, style }) => {
  const handlePress = () => {
    onPress && onPress();
  };

  return (
    <View style={{ ...styles.outerContainer, ...style }}>
      <Pressable
        style={
          ({ pressed }) => pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={handlePress}
        android_ripple={{ color: '#2374ff' }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = new StyleSheet.create({
  outerContainer: {
    borderRadius: 4,
    overflow:     'hidden'
  },
  innerContainer: {
    backgroundColor: '#0055ff',
    padding:         8,
    elevation:       4,
    minHeight:       32,
    justifyContent:  'center',
  },
  text:           {
    color:     '#FFF',
    textAlign: 'center',
  },
  pressed:        {
    backgroundColor: '#2374ff',
  },
});

export { PrimaryButton };
