import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import CityLink from '../components/Link';

const EdmontonTab: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.cityName}>Edmonton</Text>

      <CityLink cityName='Edmonton' cityURL='https://www.edmonton.ca/'/>
      <Image style={styles.image} source={require('../assets/edmonton.jpg')}></Image>


    <Text>Facts about Edmonton: </Text>
        <Text>Edmonton has the largest cowboy boot in the world.</Text>
        <Text>The lowest temperature ever recorded in Edmonton was −49.4°C.</Text>
        <Text>As of the last count, there are 19 breweries in Edmonton and its suburbs.</Text>
    
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

  image:{
    
    height: 200,
    width: 350,
  },
});

export default EdmontonTab;
