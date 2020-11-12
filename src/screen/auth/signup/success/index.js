import React, {useRef, useState, Fragment} from 'react';
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback,
	KeyboardAvoidingView,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import styles from '../../../style/index';
import SuccessIcon from '../../../../assets/icon/success.svg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const SuccessRegister = (props) => {
	const inputPassword = useRef();
	const [pincode, setPincode] = useState('');
	const [loading, setLoading] = useState(false);

	const onSubmit = () => {
		props.navigation.navigate('Home');
	};

	const toSuccess = () => {
		props.navigation.navigate('SuccessRegister');
	};
	const toLogin = () => {
		props.navigation.navigate('Login');
	};

	return (
		<Fragment>
			<ScrollView>
				<View style={styles.positionCenter}>
					<View>
						<Text style={styles.zwalletIcon}> Zwallet</Text>
					</View>

					<KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="height" enabled   keyboardVerticalOffset={1}>
					<View style={styles.formBoxAuth}>
						<View style={[styles.positionCenter,{paddingTop:40}]}>
							<SuccessIcon/>
							<Text style={styles.formTitle}>PIN Successfully Created</Text>
							<Text style={styles.formDescSuccess}>
							Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!
							</Text>
						</View>


						<View style={styles.positionCenter}>
							<Button
								style={ styles.buttonSubmitFilled
								} onPress={() => toLogin()}>
								<Text
									style={styles.textButtonLoginFilled
									}>
									Login Now
								</Text>
							</Button>
						</View>
					</View>
					</KeyboardAvoidingView>	
				</View>
			</ScrollView>
		</Fragment>
	);
};

export default SuccessRegister;
