import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TaskManager from './src/TaskManager';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TaskManager />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});