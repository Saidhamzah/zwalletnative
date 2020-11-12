import React,{useRef, useState, Fragment} from 'react'
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback
} from 'react-native'
import {Button, Text} from 'react-native-paper'	
import styles from '../../style/index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MailIcon from '../../../assets/icon/grey-mail.svg'

const Login = (props) => {
	const inputPassword = useRef()
	const [email, setEmail]	= useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const onSubmit = () => {
		props.navigation.navigate('Dashboard');
	};

	const toRegister = () => {
		props.navigation.navigate('RegisterForm')
	}
	const toReset = () => {
		props.navigation.navigate('ResetEmail')
	}

	return(
		<Fragment>
			<ScrollView >
				<View style={styles.positionCenter}>
					<View>
						<Text style={styles.zwalletIcon}> Zwallet</Text>
					</View>
					<View style={styles.formBoxAuth} > 
						<View style={styles.positionCenter}>
							<Text style={styles.formTitle}>Login</Text>
							<Text style={styles.formDesc}>Login to your existing account to access all the features in Zwallet.</Text>
						</View>
						<View style={styles.positionCenter} >
							<View >
									{/* <MailIcon />							 */}
								<View >	
								<TextInput 
									style={email != '' ? styles.formInputEmailFilled : styles.formInputEmail}
									placeholder='Enter your e-mail'
									autoCapitalize={'none'}
									value={email}
									onChangeText={(text) => setEmail(text)}
									onSubmitEditing={() => inputPassword.current.focus()}
									returnKeyType="next"
								/>
								</View>
							</View>
						</View>
						<View style={styles.positionCenter}>
							
							<TextInput 
								ref={inputPassword}
								style={password != '' ? styles.formInputPasswordFilled : styles.formInputPassword}
								placeholder='Enter your password'
								autoCapitalize={'none'}
								value={password}
								secureTextEntry={true}
								returnKeyType="send"
								returnKeyLabel="masuk"
								onChangeText={(text) => setPassword(text)}
								onSubmitEditing={() => onSubmit()}
							/>
							
						</View>

							


						<View style={styles.positionEnd}>
						<TouchableNativeFeedback onPress={() => toReset()}>
								<Text style={styles.forgotPassword}>
								Forgot password?
								</Text>
							</TouchableNativeFeedback>
						</View>

						<View style={styles.positionCenter}>
							<Button style={email && password != '' ? styles.buttonSubmitFilled : styles.buttonSubmit} onPress={() => onSubmit()}>
								<Text style={email && password != '' ? styles.textButtonLoginFilled : styles.textButtonLogin}> Login</Text>
							</Button>
						</View>						

						<View style={styles.col12}>
							<Text style={styles.textUnderButton}>Don’t have an account? Let’s </Text>
							<TouchableNativeFeedback onPress={() => toRegister()}>
								<Text style={styles.signUpButton}>
									Sign Up
								</Text>
							</TouchableNativeFeedback>
						</View>
					</View>
				</View>
			</ScrollView>
		</Fragment>
	)

}

export default Login
