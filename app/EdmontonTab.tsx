import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import CityLink from '../components/Link';
import StyledText from '../components/Infostyle';

const EdmontonTab: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.cityName}>Edmonton</Text>

      <CityLink cityName='Edmonton' cityURL='https://www.edmonton.ca/'/>
      <View style ={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/edmonton.jpg')}></Image>
      </View>

    <StyledText>Facts about Edmonton: </StyledText>
        <StyledText>Edmonton has the largest cowboy boot in the world.</StyledText>
        <StyledText>The lowest temperature ever recorded in Edmonton was −49.4°C.</StyledText>
        <StyledText>As of the last count, there are 19 breweries in Edmonton and its suburbs.</StyledText>
    
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

  imageContainer: {
    flex: 1,                    
    justifyContent: 'center',   
    alignItems: 'center',
  },

  image:{
    height: 200,
    width: 350,
  },

});

export default EdmontonTab;
