
import React, { Component } from 'react';
import {
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    AsyncStorage,
    ActivityIndicator,
    TouchableHighlight,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Alert,
    Platform
} from 'react-native';



import { Container, Content, Item, Input, Button, Icon, View, Text, CheckBox } from 'native-base';


import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const {height, width} = Dimensions.get('window');

import {TextField} from 'react-native-material-textfield';

// import { login } from '../../actions/auth'
import styles from './styles';

import i18 from '../../lib/i18';
var I18n = new i18();

import {login} from '../../lib/api';
import {API_SIGNIN} from '../../lib/services';
// import {appAuthToken} from '../../lib/appAuthToken'


class ForgetPassword extends Component {

    static propTypes = {
        login: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    save(){
        Alert.alert(
            I18n.t('Common.information'),
            "Şifrenizi değiştirmek için e-posta adresinize gelen maili onaylayınız",
            [
                {text: 'Tamam'}
            ],
            {
                cancelable: false
            }
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <Container style={styles.container}>
                    <Content scrollEnabled={false}>

                        {/*<View style={styles.logo}>*/}
                        {/*<Image*/}
                        {/*resizeMode={'contain'}*/}
                        {/*source={require('./img/register_logo.png')}/>*/}
                        {/*</View>*/}
                        <View style={{
                            // backgroundColor: '#00bcd2',
                            width: width,
                            height: 45,
                            marginTop:20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 10,
                            paddingRight: 10,
                            zIndex: 25,
                            overflow: 'visible',
                            shadowColor: 'black',
                            shadowOpacity: .2,
                            shadowOffset: {
                                width: 0,
                                height: 1
                            },
                        }}>
                            <View style={{width:50,alignItems:'center'}}>
                                <TouchableOpacity onPress={() => {
                                    Actions.pop()
                                }} activeOpacity={0.8} style={{color:'#fff'}}>
                                    <Icon
                                        name='ios-arrow-back'
                                        style={{color:'#fff'}}
                                        size={32}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1,alignItems:'center'}}>
                                <Text style={{color:'rgb(253,212,9)',fontSize:18}}>{I18n.t('Signin.forgotPassword').toUpperCase()}</Text>
                            </View>
                            <View style={{width:50,alignItems:'center'}}>

                            </View>

                        </View>

                        <View style={styles.content}>

                            <View style={{}}>
                                <View
                                    style={styles.inputWrapSignUp}
                                >
                                    <TextField
                                        autoFocus={false}
                                        autoCorrect={false}
                                        ref='email'
                                        fontSize={14}
                                        labelFontSize={18}
                                        textColor={'#fff'}
                                        baseColor={'#ccc'}
                                        tintColor={'#ccc'}
                                        errorColor={'#fff'}
                                        autoCapitalize='none'
                                        returnKeyType='next'
                                        onChangeText={(email) => this.setState({email})}
                                        enablesReturnKeyAutomatically={true}
                                        keyboardType='email-address'
                                        placeholderTextColor={'#c5c5c5'}
                                        value={this.state.email}
                                        // label='Kullanıcı Adı (Email Adresiniz)'
                                        label={I18n.t('Signin.email').toUpperCase()}
                                        allowFontScaling={false}
                                        onEndEditing={() => {
                                            //this.onFinishedEditing('email')
                                        }}
                                    />
                                </View>

                            </View>


                            <View style={{flex:1, paddingTop: 10}}>


                                <Button
                                    rounded
                                    block
                                    light
                                    style={{height: 55,backgroundColor:'rgb(253,212,9)'}}
                                    onPress={ () => {
                                        this.save()
                                    }}
                                >
                                    <Text style={{
                                        color: '#000',
                                        fontWeight: 'bold',
                                        fontSize:16
                                    }}>{I18n.t('Signin.forgotPassword').toUpperCase()}</Text>
                                </Button>




                            </View>

                        </View>
                    </Content>
                </Container>

            </View>
        );
    }
}


function mapStateToProps (state) {
    return {
        appData: state.appData
    }
}

function mapDispatchToProps (dispatch) {
    return {
        login: (parameters) => dispatch(login(parameters))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
