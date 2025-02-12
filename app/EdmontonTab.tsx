import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EdmontonTab: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.cityName}>Edmonton</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  cityName: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default EdmontonTab;
