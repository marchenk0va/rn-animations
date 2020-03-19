import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BounceButton from './src/components/buttons';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.title}>RN Animations</Text>
        <BounceButton />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
