import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import React from 'react'
export default function App() {
  let x = 1;
  return (
    <SafeAreaView style={styles.container}>
      <Button title={"Click me"}/>
    </SafeAreaView>
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
