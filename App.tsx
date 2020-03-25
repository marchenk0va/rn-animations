import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BounceButton from './src/components/buttons';
import {NavigationContainer} from '@react-navigation/native';
import {BounceButton, SubmitButton} from './src/components/buttons';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.title}>RN Animations</Text>
        <BounceButton />
        <SubmitButton />
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
    marginVertical: 14,
  },
});

export default App;
