import React from 'react';
import { View, ImageBackground } from 'react-native';
import {styles} from './styles';
import Church from '../../svg/Church';
import Girl from '../../svg/Girl';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.mainBackground} resizeMode="cover" source={require('../../assets/Home.png')}>
            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/background.png')}>
                <View style={styles.innerContentContainer}>
                    <Church style={styles.churchStyle}/>
                    <Girl style={styles.girlStyle}/>
                </View>
            </ImageBackground>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen;