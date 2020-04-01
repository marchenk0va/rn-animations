import React from 'react';
import {View, StyleSheet} from 'react-native';
import BounceButton from './BounceButton';
import SubmitButton from './SubmitButton';

const Buttons = () => {
  return (
    <View style={styles.container}>
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
});

export default Buttons;
