import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>What is your dream?</Text>
      <Text>A. Meet Laboon again</Text>
      <Text>B. Become pirate king</Text>
      <Text>C. Become the best swordsman</Text>
      <Text>D. Discover the world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
