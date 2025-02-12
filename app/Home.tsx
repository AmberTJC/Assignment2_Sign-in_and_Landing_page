import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalgaryTab from './CalgaryTab';
import EdmontonTab from './EdmontonTab';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={{ flex:1}}>
      <Text style={styles.welcomeText}>Welcome to My New App</Text>
      <Tab.Navigator>
        <Tab.Screen name="Calgary" component={CalgaryTab} />
        <Tab.Screen name="Edmonton" component={EdmontonTab} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 30,
    color: '#228b22',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Home;

