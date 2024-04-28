import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // AntDesign has the Google logo icon

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.logo}
                />
            </View>
            <Text style={styles.title}>Welcome to Linear</Text>
            <Text style={styles.subtitle}>
                A place where you can track all your expenses and incomes...
            </Text>
            <Text style={styles.getStarted}>Let’s Get Started...</Text>
            <TouchableOpacity style={styles.buttonGoogle}>
                <AntDesign name="google" size={20} color="#4285F4" />
                <Text style={styles.buttonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonEmail}>
                <AntDesign name="mail" size={20} color="black" />
                <Text style={styles.buttonText}>Continue with Email</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.loginText}>Already have an account? Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    logoContainer: {
        marginBottom: 32,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#424242',
        textAlign: 'center',
        marginHorizontal: 50,
        marginBottom: 32,
    },
    getStarted: {
        fontSize: 16,
        color: '#424242',
        marginBottom: 16,
    },
    buttonGoogle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D0D0D0',
        borderRadius: 4,
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginBottom: 16,
        width: '80%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    buttonEmail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D0D0D0',
        borderRadius: 4,
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginBottom: 24,
        width: '80%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#424242',
    },
    loginText: {
        fontSize: 16,
        color: '#4285F4',
        textDecorationLine: 'none',
    },
});

export default WelcomeScreen;
