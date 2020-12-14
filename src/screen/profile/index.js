import React, { useEffect, useRef, useState } from 'react';
import style from '../style/index';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar, SafeAreaView, Image, Dimensions, Switch, TextInput,PermissionsAndroid} from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import ImagePicker from 'react-native-image-picker';
import CustomDrawer from '../sidebar/customDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import {getHome} from '../../redux/actions/Home';
import {Users} from '../../redux/actions/Users';
import {imageURI} from '../../utils';
import Edit from '../../assets/icon/edit-profile.svg'
import Arrow from '../../assets/icon/arrow-right.svg'
import {AuthLogout} from '../../redux/actions/Auth';
import {editProfile} from '../../redux/actions/Profile'
export default function Profile({navigation}){
    const dispatch = useDispatch();
    const bs = useRef()
    const fall = new Animated.Value(1)
    const Auth = useSelector((s) => s.Auth);
    const User = useSelector((s) => s.User);
    // const [notif, setNotif] = useState(isNotification)
    const userData = User.data;
    const [name, setName] = useState(userData.fullName)
    const [inputActive, setInputActive] = useState(false)
    const {success} = useSelector((s)=> s.ProfileNumber)
    const photoCamera = () => {
        ImagePicker.launchCamera({
            mediaType: 'photo'
        }, (response) => {
            console.log(response,'ini response')
            const formData = new FormData()
            formData.append('img', {
                uri: response.uri,
                name: response.fileName,
                type: response.type
            })
            // dispatch(editPhoto(formData, token))
        })
    }
    const onLogout = () => {
        dispatch(AuthLogout())
    }
    useEffect(() => {
        if (success) {
            const authorization = {Authorization: Auth.data.token.token};
            // console.log(authorization,'users nih')
            dispatch(Users(authorization));
        }
    }, [success]);
    const photoLibrary = () => {
        ImagePicker.launchImageLibrary({
            mediaType: 'photo',
        }, (response) => {
            console.log(response)
            const formData = new FormData()
            formData.append('img', {
                uri: response.uri,
                name: response.fileName,
                type: response.type
            })
            const authorization = {Authorization: Auth.data.token.token};
            dispatch(editProfile(authorization,formData))
        })
    }

    const editName = () => {
        console.log(name)
        // dispatch(editUser({name}, token))
    }

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    )

    const renderContent = () => (
        <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <View style={{marginBottom: 40}}>
                <TouchableOpacity style={styles.panelButton} onPress={photoCamera}>
                    <Text style={styles.panelButtonTitle}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.panelButton} onPress={photoLibrary}>
                    <Text style={styles.panelButtonTitle}>Choose From Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.panelButton}
                    onPress={() => bs.current.snapTo(1)}>
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    return (
        <>
            <StatusBar backgroundColor='#FAFCFF' barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <ScrollView style={{height: '100%', backgroundColor: '#FAFCFF'}}>
                        <View style={styles.bottom}>
                            <View style={{alignItems: 'center', marginBottom: 45}}>
                                <View style={{paddingBottom: 15}}>
                                    <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                                        <Image style={{borderRadius: 10, width:80, height:80, marginBottom: 10}} 
                                        source={{uri:`${imageURI}/${userData.img}` }} 
                                        />
                                    </TouchableOpacity>
                                    <View style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'center'}}>
                                        <Edit width={11} height={11} />
                                        <Text style={{color:'#7A7886', marginLeft: 7}}>Edit</Text>
                                    </View>
                                </View>
                                {inputActive ? (
                                    <TextInput 
                                        style={{fontWeight: 'bold', color: '#4D4B57', fontSize: 24, marginBottom: 10}}
                                        value={name}
                                        onChangeText={name => setName(name)}
                                        onSubmitEditing={editName}
                                    />
                                ) : (
                                    <TouchableOpacity onPress={() => setInputActive(true)}>
                                        <Text style={{fontWeight: 'bold', color: '#4D4B57', fontSize: 24, marginBottom: 10}}>{userData.fullName}</Text>
                                    </TouchableOpacity>
                                )}
                                <Text style={{color:'#7A7886', fontSize: 16}}>{userData.phoneNumber==62||userData.phoneNumber==0? `No phone number registered`: '+'+userData.phoneNumber}</Text>
                            </View>
                            <View>
                                <RectButton 
                                onPress={() =>navigation.navigate("Info")}
                                 style={styles.field}>
                                    <Text style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>Personal Information</Text>
                                    <Arrow width={28} height={28} />
                                </RectButton>
                                <RectButton onPress={() => 
                                    navigation.navigate("ChangePassword")
                                    } style={styles.field}>
                                    <Text style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>Change Password</Text>
                                    <Arrow width={28} height={28} />
                                </RectButton>
                                <RectButton 
                                onPress={() => navigation.navigate("ChangePin")} 
                                style={styles.field}>
                                    <Text style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>Change PIN</Text>
                                    <Arrow width={28} height={28} />
                                </RectButton>
                                <View style={styles.field}>
                                    <Text style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>Notification</Text>
                                    <Switch 
                                        trackColor={{true: '#6379F4', false: 'rgba(169, 169, 169, 0.4)'}}
                                        thumbColor="#FFFFFF"
                                        // value={isNotification}
                                        // onValueChange={setNotif}
                                    />
                                </View>
                                <RectButton onPress={onLogout} style={styles.field}>
                                    <Text style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>Logout</Text>
                                </RectButton>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
            <BottomSheet 
                ref={bs}
                snapPoints={[360, 0]}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction
                enabledContentGestureInteraction={false}
                enabledContentTapInteraction
                renderHeader={renderHeader}
                renderContent={renderContent}
            />
       </>
    )
}

const styles = StyleSheet.create({
    top: {
        paddingTop: StatusBar.currentHeight * 1.8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16
    },
    bottom: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    field: {
        backgroundColor: '#E5E8ED',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('screen').width - 32
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#6379F4',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
})
