import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import credentials from '../credentials.json';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const validateInput = () => {
        if (username.length < 4 || username.length > 8) {
            setErrorMessage('Username must be at least 5 characters long.');
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
            const user = credentials.users.find((user: { username: string; password: string }) => user.username === username && user.password === password);
            if (user) {
                setSuccessMessage('Login successful!');
                setErrorMessage('');
            } else {
                setErrorMessage('Invalid username or password.');
                setSuccessMessage('');
            }
        }
    };

    return (
        <View style={styles.container}>
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
            <Button title="Login" onPress={handleLogin} color="#007BFF" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    input: {
        height: 50,
        borderColor: '#007BFF',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 12,
        paddingHorizontal: 10,
        fontSize: 16,
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