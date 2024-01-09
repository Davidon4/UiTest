import {StyleSheet} from 'react-native'
import { colors } from '../../utils/colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 15
    },
    headerContainer:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userContainer:{
        flexDirection: 'row'
    },
    userName:{
        alignSelf: 'center',
        marginLeft: 8,
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Roboto-Medium'
    },
    notification:{
        alignSelf: 'center'
    },
    notificationContainer:{
        backgroundColor: colors.background,
        padding: 15,
        borderRadius: 8
    },
    cardContainer:{
        backgroundColor: colors.primary,
        height: hp('25%'),
        borderRadius: 10,
        padding: 10
    },
    innerCardContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    amount:{
        color: colors.white,
        fontWeight: '700',
        fontSize: 32,
        fontFamily: 'PTMono-Regular',
        lineHeight: 32
    },
    balance:{
        color: colors.white
    }
})