import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';

export default (props) => (
  <View style={styles.center}>
    <Text style={styles.text}>Page 1</Text>
    <TouchableOpacity onPress={ props.onBack }>
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  text: {
    color: '#fff', fontSize: 30
  }
});