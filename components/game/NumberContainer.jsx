import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.nunberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nunberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default NumberContainer;
