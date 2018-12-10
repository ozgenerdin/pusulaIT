import React, {Component} from 'react';
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


import {Container, Content, Item, Input, Button, Icon, View, Text} from 'native-base';
import {TextField} from 'react-native-material-textfield';
import CheckBox from 'react-native-modest-checkbox';

import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {register, login} from '../../lib/api';
import {API_REGISTER} from '../../lib/services';

const {height, width} = Dimensions.get('window');


// import { login } from '../../actions/auth'
import styles from './styles';

import i18 from '../../lib/i18';

var I18n = new i18();

import {API_SIGNIN} from '../../lib/services';

// import {appAuthToken} from '../../lib/appAuthToken'


class SignUp extends Component {

    static propTypes = {
        login: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            passwordAgain: '',
            isChecked: true,
        };
    }


    signUp() {
        //  DUMMY TOKEN
        let that = this;
        let user = {};
        user.username = this.state.username;
        user.email = this.state.email;
        user.password = this.state.password;

        const parameters = {
            username: user.username,
            email: user.email,
            password: user.password,
            scope: 'read write',

        };

        /*
        let userKey = '';
        AsyncStorage.setItem('user', userKey, () => {
            console.log('saved');
        });
        */

        let signUp = register(API_REGISTER, parameters).then(response => {
            console.log(response);
            if (response.email){
                console.log("signup_success");
                that.signIn();
                //this.props.getUserData();
            }
            //that.setState({token: token});
        });
    }

    signIn(){
        const parameters = {
            username: this.state.email,
            password: this.state.password,
            scope: 'read write',
            grant_type: 'password',
            client_secret: 'cuckoo',
            client_id: 'cuckoo',
        };
        let signin =  login(API_SIGNIN, parameters).then(response => {
            console.log(response);
            if (response.access_token) {
                AsyncStorage.setItem('token', response.access_token, () => {
                    //console.log(this.state);
                    Actions.profileInfo();
                });
            }
            else
                console.log("error_signin")
            //that.setState({token: token});
        });


        console.log(signin)
    }

    validateSignUp() {
        let user = {};

        user.username = this.state.username;
        user.email = this.state.email;
        user.password = this.state.password;

        let regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let chk_email = regex_email.test(user.email);

        if (!this.state.isChecked) {

        }

        if (!chk_email) {
            Alert.alert(
                I18n.t('Common.information'),
                "Lütfen geçerli bir E-posta adresi giriniz.",
                [
                    {text: 'Tamam'}
                ],
                {
                    cancelable: false
                }
            );
        }

        if (user.username !== '' && chk_email) {
            let userKey = JSON.stringify(user);
            console.log(userKey);
            this.signUp();
        }
    }

    termsOfUsage() {
        Actions.termsOfUsage();
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
                            marginTop: 20,
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
                            <View style={{width: 50, alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => {
                                    Actions.pop()
                                }} activeOpacity={0.8} style={{color: '#fff'}}>
                                    <Icon
                                        name='ios-arrow-back'
                                        style={{color: '#fff'}}
                                        size={32}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Text style={{
                                    color: 'rgb(253,212,9)',
                                    fontSize: 18
                                }}>{I18n.t('Signin.signupText').toUpperCase()}</Text>
                            </View>
                            <View style={{width: 50, alignItems: 'center'}}>

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
                                        ref='username'
                                        fontSize={14}
                                        labelFontSize={18}
                                        textColor={'#fff'}
                                        baseColor={'#ccc'}
                                        tintColor={'#ccc'}
                                        errorColor={'#fff'}
                                        autoCapitalize='none'
                                        returnKeyType='next'
                                        onChangeText={(username) => this.setState({username})}
                                        enablesReturnKeyAutomatically={true}
                                        keyboardType='email-address'
                                        placeholderTextColor={'#c5c5c5'}
                                        value={this.state.username}
                                        // label='Kullanıcı Adı (Email Adresiniz)'
                                        label={I18n.t('Signin.userName').toUpperCase()}
                                        allowFontScaling={false}
                                        onEndEditing={() => {
                                            //this.onFinishedEditing('email')
                                        }}
                                    />
                                </View>
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
                                <View
                                    style={styles.inputWrapSignUp}
                                >
                                    <TextField
                                        ref='password'
                                        textColor={'#fff'}
                                        labelFontSize={18}
                                        baseColor={'#ccc'}
                                        tintColor={'#ccc'}
                                        errorColor={'#fff'}
                                        fontSize={14}
                                        autoCapitalize='none'
                                        onFocus={this.onFocus}
                                        onChangeText={(password) => this.setState({password})}
                                        secureTextEntry={true}
                                        enablesReturnKeyAutomatically={true}
                                        placeholderTextColor={'#c5c5c5'}
                                        value={this.state.password}
                                        label={I18n.t('Signin.password').toUpperCase()}
                                        onEndEditing={() => {
                                            //this.onFinishedEditing('password')
                                        }}
                                    />
                                </View>
                                <View
                                    style={styles.inputWrapSignUp}
                                >
                                    <TextField
                                        ref='passwordAgain'
                                        textColor={'#fff'}
                                        labelFontSize={18}
                                        baseColor={'#ccc'}
                                        tintColor={'#ccc'}
                                        errorColor={'#fff'}
                                        fontSize={14}
                                        autoCapitalize='none'
                                        onFocus={this.onFocus}
                                        onChangeText={(passwordAgain) => this.setState({passwordAgain})}
                                        secureTextEntry={true}
                                        enablesReturnKeyAutomatically={true}
                                        placeholderTextColor={'#c5c5c5'}
                                        value={this.state.passwordAgain}
                                        label={I18n.t('Signin.passwordAgain').toUpperCase()}
                                        onEndEditing={() => {
                                            //this.onFinishedEditing('password')
                                        }}
                                    />
                                </View>

                            </View>

                            <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 150}}>
                                <View>
                                    <CheckBox
                                        custom
                                        checkedComponent={<Image source={require('./../../../images/check@2x.png')}
                                                                 style={{
                                                                     alignItems: 'center',
                                                                     width: 30,
                                                                     height: 30
                                                                 }}/>}
                                        uncheckedComponent={<Image source={require('./../../../images/checkbox@2x.png')}
                                                                   style={{
                                                                       alignItems: 'center',
                                                                       width: 30,
                                                                       height: 30
                                                                   }}/>}
                                        label={I18n.t('Signin.readUserAgreement')}
                                        containerStyle={{
                                            marginTop: 10,
                                            marginLeft: 0,
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}
                                        labelStyle={{
                                            color: 'white',
                                            textDecorationLine: 'underline',
                                            marginLeft: 10,
                                            marginTop: 2,
                                            fontSize: 13
                                        }}
                                        onPress={this.termsOfUsage.bind(this)}

                                        checked={this.state.isChecked}
                                        onChange={(isChecked) => this.setState({isChecked: !this.state.isChecked})}
                                    />
                                </View>
                            </View>
                            <View style={{flex: 1, paddingTop: 10}}>
                                <Button
                                    rounded
                                    block
                                    light
                                    style={{height: 55, backgroundColor: 'rgb(253,212,9)'}}
                                    onPress={() => {
                                        this.validateSignUp()
                                    }}
                                >
                                    <Text style={{
                                        color: '#000',
                                        fontWeight: 'bold',
                                        fontSize: 16
                                    }}>{I18n.t('Signin.signupText').toUpperCase()}</Text>
                                </Button>
                            </View>
                        </View>
                    </Content>
                </Container>

            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        appData: state.appData,
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (parameters) => dispatch(login(parameters))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
