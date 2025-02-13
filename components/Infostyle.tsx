import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface StyledProps extends TextProps{
    children: React.ReactNode;
}

const StyledText: React.FC<StyledProps> = ({children, style, ...props}) => {
    return <Text style = {[styles.infoText, style]}{...props}>{children}</Text>
}

const styles = StyleSheet.create({
    infoText: {
      fontSize: 18,
      color: '#333',    
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 5,
    },
  });
  
  export default StyledText;