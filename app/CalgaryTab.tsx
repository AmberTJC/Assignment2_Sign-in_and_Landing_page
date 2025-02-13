import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import CityLink from '../components/Link';

const CalgaryTab: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.cityName}>Calgary</Text>

    <CityLink cityName='Calgary' cityURL='https://www.calgary.ca/home.html' />
    <Image style={styles.image} source={require('../assets/calgary.jpg')}></Image>
    
    <Text>Facts about Calgary: </Text>
    <Text>Calgary sits at 1,048 m (3,438 feet) above sea level.</Text>
    <Text>More than 120 languages are spoken in the city.</Text>
    <Text>The coldest temperature ever recorded in Calgary was -45 °C.</Text>

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
  image:{
    
    height: 200,
    width: 350,
  },
});

export default CalgaryTab;
