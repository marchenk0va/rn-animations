import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BounceButton from './BounceButton';
import SubmitButton from './SubmitButton';

const Buttons = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RN Animations</Text>
      <BounceButton />
      <SubmitButton />
    </View>
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

export default Buttons;
