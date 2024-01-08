import React from 'react';
import { View, ImageBackground } from 'react-native';
import {styles} from './styles';
import House from '../../svg/House';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.mainBackground} resizeMode="cover" source={require('../../assets/Login.png')}>
                <House/>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen;