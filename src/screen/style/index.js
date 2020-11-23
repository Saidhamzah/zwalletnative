import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage as fp} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  zwalletIcon: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: fp(5),
    fontWeight: 'bold',
    color: '#6379F4',
    paddingTop: hp('12%'),
    paddingBottom: hp('12%'),
  },
  positionCenter: {
    alignItems: 'center',
  },
  bodyBackground: {
    backgroundColor: '#E5E5E5',
  },
  formBoxAuth: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: hp('84%'),
    width: wp('100%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 8,
  },
  formInputUsernameFilled: {
    width: 350,
    height: 50,
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderBottomColor: '#6379F4',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  
  formInputUsername: {
    width: wp(90),
    height: 50,
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderBottomColor: 'rgba(169, 169, 169, 0.6)',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  label: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20
},
card: {
backgroundColor: '#FFFFFF',
borderRadius: 10,
    padding: 15,
marginBottom: 20,
    elevation: 3,
    flex: 1
},
title: {
    color: '#7A7886',
    fontSize: 16,
    marginBottom: 10
},
value: {
    color: '#514F5B',
    fontSize: 18,
    fontWeight: 'bold'
}, 
buttonPrimary: {
    alignItems: 'center',
    backgroundColor: '#6379F4',
    width: '100%',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 15,
    marginTop: 40
},
buttonGrey: {
    backgroundColor: '#DADADA',
    alignItems: 'center',
    width: '100%',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 15,
    marginTop: 40
},
  formTitle: {
    paddingTop: hp('9%'),
    paddingBottom: hp('4%'),
    fontFamily: 'NunitoSans-Regular',
    fontSize: fp(4),
    fontWeight: 'bold',
    color: '#3A3D42',
  },
  formTitleReset: {
    paddingTop: hp('4'),
    paddingBottom: hp('4'),
    fontFamily: 'NunitoSans-Regular',
    fontSize: fp(4),
    fontWeight: 'bold',
    color: '#3A3D42',
  },
  formDesc: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: fp(2),
    textAlign: 'center',
    color: 'rgba(58, 61, 66, 0.6)',
    marginHorizontal: wp(4),
    paddingBottom: hp(6),
    marginVertical: wp(2),
    lineHeight: hp(4),
  },
  formDescSuccess: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: fp(2),
    textAlign: 'center',
    color: 'rgba(58, 61, 66, 0.6)',
    marginHorizontal: wp(9),
    paddingBottom: hp(6),
    marginVertical: wp(2),
    lineHeight: hp(3),
  },
  formInputEmail: {
    width: wp(90),
    height: 50,
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderBottomColor: 'rgba(169, 169, 169, 0.6)',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  formSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  formInputEmailFilled: {
    width: 350,
    height: 50,
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderBottomColor: '#6379F4',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  formInputPassword: {
    width: 350,
    height: 50,
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderBottomColor: 'rgba(169, 169, 169, 0.6)',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    marginTop: 20,
  },
  formInputSearch: {
    width: '95%',
    backgroundColor: 'rgba(58, 61, 66, 0.1)',
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 12,
    marginHorizontal: wp(3),
  },
  formInputPasswordFilled: {
    width: 350,
    height: 50,
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderBottomColor: '#6379F4',
    fontFamily: 'NunitoSans-Regular',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    marginTop: 20,
  },
  forgotPassword: {
    color: 'rgba(58, 61, 66, 0.8)',
  },
  positionEnd: {
    alignItems: 'flex-end',
    marginRight: wp(4),
    marginTop: hp(2),
  },
  positionStart: {
    alignItems: 'flex-start',
    marginRight: wp(4),
    marginTop: hp(2),
  },
  positionEndReset: {
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 100,
    alignItems: 'center',
  },
  buttonSubmit: {
    backgroundColor: '#DADADA',
    marginTop: hp(6),
    padding: 7,
    width: wp(90),
    borderRadius: 12,
  },
  textUnderButton: {
    color: 'rgba(58, 61, 66, 0.8)',
    marginTop: wp(5),
  },
  buttonSubmitFilled: {
    backgroundColor: '#6379F4',
    marginTop: hp(6),
    padding: 7,
    width: wp(90),
    borderRadius: 12,
  },
  textButtonLogin: {
    color: '#88888F',
    fontFamily: 'NunitoSans-Regular',
    textTransform: 'capitalize',
  },
  textButtonLoginFilled: {
    color: 'white',
    fontFamily: 'NunitoSans-Regular',
    textTransform: 'capitalize',
  },
  col12: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signUpButton: {
    marginTop: wp(5),
    color: '#6379F4',
  },
  pincodePosition: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFCFF',
    height: '100%',
    fontFamily: 'NunitoSans-Regular',
  },
  navbar: {
    flexDirection: 'row',
    marginTop: 25,
    paddingRight: 25,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  boxBalance: {
    backgroundColor: '#6379F4',
    padding: 30,
    margin: 14,
    borderRadius: 20,
  },
  balanceNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#FFFFFF',
    borderRadius: 10,
  },
  button: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#6379F4',
  },
  buttonGrey: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#E5E8ED',
  },
  buttonWhite: {
    paddingVertical: 5,
    borderRadius: 3,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  contentHistory: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    paddingHorizontal:16,
    marginHorizontal:16,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  contentTopup: {
    fontFamily: 'NunitoSans-Regular',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  font50p: {
    paddingVertical: hp('1%'),
  },
  contentNote: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
    padding: 15,
    alignItems: 'center',
  },
  textLeft:{
    fontFamily:'NunitoSans-Regular',
    paddingHorizontal: 16,
    paddingTop:16
  }
});
