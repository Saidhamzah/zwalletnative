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


const ResetEmail = (props) => {
	const inputPassword = useRef()
	const [email, setEmail]	= useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const toResetPassword = () => {
		props.navigation.navigate('ResetPassword')
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
							<Text style={styles.formTitleReset}>Reset Password</Text>
							<Text style={styles.formDesc}>Enter your Zwallet e-mail so we can send you a password reset link.</Text>
						</View>
						<View style={styles.positionCenter} >
							<View >
								<View>								
								<TextInput 
									style={email != '' ? styles.formInputEmailFilled : styles.formInputEmail}
									placeholder='Enter your email'
									autoCapitalize={'none'}
									value={email}
									onChangeText={(text) => setEmail(text)}
									onSubmitEditing={() => inputPassword.current.focus()}
									returnKeyType="next"
								/>
								</View>
							</View>
						</View>
						
						<View style={styles.positionEndReset}>
							<Button style={ styles.buttonSubmitFilled } onPress={() => toResetPassword()}>
								<Text style={styles.textButtonLoginFilled}> Confirm</Text>
							</Button>
						</View>	
					</View>
				</View>
			</ScrollView>
		</Fragment>
	)

}

export default ResetEmail
