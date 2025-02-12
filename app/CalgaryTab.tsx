import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CalgaryTab: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.cityName}>Calgary</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  cityName: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CalgaryTab;
