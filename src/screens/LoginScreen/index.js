import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import {styles} from './styles';
import House from '../../assets/svg/House';
import AppInput from '../../components/AppInput';
import Button from '../../components/Button'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.mainBackground} resizeMode="cover" source={require('../../assets/Login.png')}>
                <View style={styles.itemContainer}>
                <House style={{marginLeft: 25}}/>
                <View style={styles.titleContainer}>
                <Text style={styles.title}>Login to your Account</Text>
                </View>
                <AppInput source={require('../../assets/people.png')} placeholder="Username"/>
                <AppInput source={require('../../assets/key.png')} placeholder="Password" text='Forgot'/>
                <Button title="Sign In"/>
                </View>
                <View style={styles.bottom}>
                <Text style={styles.item}>Dont have an account? <Text style={styles.signUpStyle}>Signup</Text></Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default React.memo(LoginScreen);