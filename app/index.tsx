import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import credentials from '../credentials.json';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  Index: undefined; 
  Home: undefined;  
  Tabs: undefined;  
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Index'>;

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const validateInput = () => {
    // Validate username length
    if (username.length < 5) {
        setErrorMessage('Username must be at least 5 characters long.');
        return false;
    }
    // Validate password complexity
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
        setErrorMessage('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.');
        return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (validateInput()) {
      const user = credentials.users.find((user: { username: string; password: string }) => user.username === username && user.password === password);
      if (user) {
        setSuccessMessage('Login successful!');
        setErrorMessage('');
        navigation.navigate('Home');  
      } else {
        setErrorMessage('Invalid username or password.');
        setSuccessMessage('');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the App!</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      {successMessage ? <Text style={styles.success}>{successMessage}</Text> : null}
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F0F0F0', 
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc', 
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff', 
  },
  buttonContainer: {
    backgroundColor: '#007BFF', 
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 10,
  },
  error: {
    color: 'red',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  success: {
    color: 'green',
    marginBottom: 12,
    fontWeight: 'bold',
  },
});

export default Login;

