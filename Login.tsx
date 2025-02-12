import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import credentials from './credentials.json';

type LoginScreenNavigationProp = StackNavigationProp<{
    Home: undefined; 
}>;

interface Props {
    navigation: LoginScreenNavigationProp;
}

const Login: React.FC<Props> = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateInput = () => {
        if (username.length < 4 || username.length > 8) {
            setErrorMessage('Username must be between 4 and 8 characters long.');
            return false;
        }
        if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long.');
            return false;
        }
        return true;
    };

    const handleLogin = () => {
        if (validateInput()) {
            const user = credentials.users.find(user => user.username === username);
            if (!user) {
                setErrorMessage('Username not found.');
            } else if (user.password !== password) {
                setErrorMessage('Incorrect password.');
            } else {
                setErrorMessage('');
                navigation.navigate('Home'); 
            }
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    error: {
        color: 'red',
        marginBottom: 12,
    },
});

export default Login; 