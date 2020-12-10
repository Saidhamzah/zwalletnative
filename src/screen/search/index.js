import React, {useState} from 'react';
import style from '../style/index';
import {View, Text, TextInput, Image, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import ProfilePictSamuel from '../../assets/icon/Samuel.svg';
import SearchIcon from '../../assets/icon/search.svg';
import {useDispatch, useSelector} from 'react-redux';
import {getSearch, getSearchTransfer} from '../../redux/actions/Search';
import {RectButton} from 'react-native-gesture-handler';
export default function Search({navigation}) {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const User = useSelector((s) => s.User);
  const {isLogin} = useSelector((s) => s.Auth);
  const {data} = useSelector((s) => s.getSearch);
  const authorization = {Authorization: Auth.data.token.token};

  React.useEffect(() => {
    dispatch(getSearch(authorization));
  }, []);

  console.log(User.data.id, 'ini data');
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFCFF" />
      <SafeAreaView style={style.container}>
        <ScrollView>
          <View style={{width: '100%', position: 'relative'}}>
            <View style={{position: 'absolute', zIndex: 3, top: 15, left: 20}}>
              <SearchIcon width={24} height={24} />
            </View>
            <TextInput
              style={style.formInputSearch}
              placeholder="Search receiver here"
              placeholderTextColor="rgba(58, 61, 66, 0.4)"
              autoCapitalize={'none'}
              value={query}
              onChangeText={(text) => {
                setQuery(text);
                dispatch(getSearch(authorization, text));
              }}
              onSubmitEditing={() => dispatch(getSearch(authorization, query))}
              returnKeyType="search"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'flex-end',
            }}>
            <View style={{flex: 5, marginLeft: 17}}>
              <Text
                style={{
                  textAlign: 'right',
                  fontSize: 17,
                  fontWeight: '700',
                  color: 'black',
                  textAlign: 'left',
                }}>
                All Contacts
              </Text>
              <Text
                style={{
                  textAlign: 'right',
                  fontSize: 13,
                  fontWeight: '700',
                  color: 'grey',
                  textAlign: 'left',
                }}>
                  {data.data? (data.data.length+' contacts found'):('no contact found')}
              </Text>
            </View>
          </View>
          {data.data?
          data.data.map((item, index) => {
            return (
              <>
              {User.data.id==item.id ? (
                <>
                </>
              ):(
                <RectButton style={style.contentHistory} key={index} 
                onPress={() => {
                  dispatch(getSearchTransfer(authorization,item.id));
                  navigation.navigate('InputAmount');
                }}>
                  <View style={{flex: 5, flexDirection: 'row'}}>
                    <View>
                      <Image
                        style={{
                          borderRadius: 10,
                          width: 52,
                          height: 52,
                          marginRight: 20,
                        }}
                        source={{uri: item.img}}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        marginLeft: 10,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{fontSize: 16, fontWeight: 'bold'}}>
                        {item.fullName}
                      </Text>
                      <Text>
                        +{item.phoneNumber}
                      </Text>
                    </View>
                  </View>
                </RectButton>
                
              )}
              </>
            );
          })
          : 
          <Text></Text>
          }
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
