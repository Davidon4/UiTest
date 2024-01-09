 import React from 'react';
 import { View, Image, Text, Pressable } from 'react-native';
 import { styles } from './styles';
 
const WalletScreen = () => {
    function Header () {
        return(
            <View style={styles.headerContainer}>
                <View style={styles.userContainer}>
                    <Image source={require('../../assets/user_2.png')}/>
                    <Text style={styles.userName}>Ajalla Ugo</Text>
                </View>
                <Pressable style={styles.notificationContainer}>
                <Image style={styles.notification} source={require('../../assets/notification.png')}/>
                </Pressable>
            </View>
        )
    }

    function Card () {
        return(
            <View style={styles.cardContainer}>
                <View style={styles.innerCardContainer}>
                    <View>
                    <Text style={styles.amount}><Text style={{fontSize: 10, verticalAlign: 'top'}}>{"\u20A6"}</Text>{(120000).toLocaleString()}
                    </Text>
                    <Text style={styles.balance}>Balance</Text>
                    </View>
                    <Image source={require('../../assets/purse.png')}/>
                </View>
                <View>
                    <View>
                    <Text>Account Number</Text>
                    <Text>9102356712</Text>
                    </View>
                    <View>
                        <Text>Bank</Text>
                        <Text>Access Bank</Text>
                    </View>
                </View>
            </View>
        )
    }
     return (
         <View style={styles.container}>
            <Header/>
            <Card/>
         </View>
     )
 }
 
 export default WalletScreen;