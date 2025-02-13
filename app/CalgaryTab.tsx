import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import CityLink from '../components/Link';
import StyledText from '../components/Infostyle';

const CalgaryTab: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.cityName}>Calgary</Text>

    <CityLink cityName='Calgary' cityURL='https://www.calgary.ca/home.html' />
    <View style = {styles.imageContainer}>
    <Image style={styles.image} source={require('../assets/calgary.jpg')}></Image>
    </View>
    <StyledText>Facts about Calgary: </StyledText>
    <StyledText>Calgary sits at 1,048 m (3,438 feet) above sea level.</StyledText>
    <StyledText>More than 120 languages are spoken in the city.</StyledText>
    <StyledText>The coldest temperature ever recorded in Calgary was -45 °C.</StyledText>

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

export default CalgaryTab;
