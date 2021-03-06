import { StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { RFPercentage as fp } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    zwalletIcon :{
        fontFamily : 'NunitoSans-Regular',
        fontSize : fp(5),
        fontWeight : 'bold',
        color: '#6379F4',
        paddingTop : hp('12%'),
        paddingBottom : hp('12%')
        
    },
    positionCenter : {
        alignItems : 'center'
    },
    bodyBackground : {
        backgroundColor : '#E5E5E5',

    }, 
    formBoxLogin:{
        backgroundColor : 'white',
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,
        height : hp('75%'),
        width : wp('100%')
    },
    formTitle : {
        paddingTop : hp('9%'),
        paddingBottom : hp('4%'),
        fontFamily : 'NunitoSans-Regular',
        fontSize : fp(4),
        fontWeight : 'bold',
        color : '#3A3D42'
    },
    formDesc : {
        fontFamily : 'NunitoSans-Regular',
        fontSize : fp(3),
        textAlign : "center",
        color: 'rgba(58, 61, 66, 0.6)',
        marginHorizontal : wp(4),
        paddingBottom : hp(6)        
    },
    formInputEmail : {
        width : wp(90),
        height : 50,
        borderTopColor : 'white',
        borderRightColor : 'white',
        borderLeftColor : 'white',
        borderBottomColor : 'rgba(169, 169, 169, 0.6)',
        borderWidth : 1,
        borderRadius : 5,
        marginVertical : 5,
    },
    formInputEmailFilled : {
        width : 350,
        height : 50,
        borderTopColor : 'white',
        borderRightColor : 'white',
        borderLeftColor : 'white',
        borderBottomColor : '#6379F4',
        borderWidth : 1,
        borderRadius : 5,
        marginVertical : 5,
    },
    formInputPassword : {
        width : 350,
        height : 50,
        borderTopColor : 'white',
        borderRightColor : 'white',
        borderLeftColor : 'white',
        borderBottomColor : 'rgba(169, 169, 169, 0.6)',
        borderWidth : 1,
        borderRadius : 5,
        marginVertical : 5,
        marginTop : 20,
    },
    formInputPasswordFilled : {
        width : 350,
        height : 50,
        borderTopColor : 'white',
        borderRightColor : 'white',
        borderLeftColor : 'white',
        borderBottomColor : '#6379F4',
        borderWidth : 1,
        borderRadius : 5,
        marginVertical : 5,
        marginTop : 20,
    },
    forgotPassword : {
        color : 'rgba(58, 61, 66, 0.8)'
    },
    positionEnd : {
        alignItems :'flex-end',
        marginRight : wp(4),
        marginTop : hp(2)
    },
    buttonSubmit : {
        backgroundColor : '#DADADA',
        marginTop : hp(6),
        padding: 7,
        width : wp(90),
        borderRadius : 12
    },
    textUnderButton : {
        color: 'rgba(58, 61, 66, 0.8)',
        marginTop : wp(5)
    },
    buttonSubmitFilled : {
        backgroundColor : '#6379F4',
        marginTop : hp(6),
        padding: 7,
        width : wp(90),
        borderRadius : 12  
    },
    textButtonLogin : {
        color : '#88888F'   
    },
    textButtonLoginFilled : {
        color : 'white' ,
    },
    col12 : {
        flexDirection : 'row',
        alignSelf : 'center'
    },
    signUpButton : {
        marginTop : wp(5),
        color : '#6379F4'
    },
    pincodePosition : {
        alignItems : 'center',
    }
})