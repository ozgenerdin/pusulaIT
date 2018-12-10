
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

import IconF from 'react-native-vector-icons/FontAwesome';


import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';


import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const {height, width} = Dimensions.get('window');

import {TextField} from 'react-native-material-textfield';

// import { login } from '../../actions/auth'
import styles from './styles';

import i18 from '../../lib/i18';
var I18n = new i18();

import {register,login} from '../../lib/api';
import {API_SIGNIN} from '../../lib/services';
// import {appAuthToken} from '../../lib/appAuthToken'


class Login extends Component {

    static propTypes = {
        login: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }



    async login() {

        const parameters = {
            username: this.state.email,
            password: this.state.password,
            scope: 'read write',
            grant_type: 'password',
            client_secret: 'pregnant',
            client_id: 'pregnant'
        };

        console.log(parameters);

        let signin = await login(API_SIGNIN, parameters);

        console.log(signin);

        if(signin.access_token){
            // appAuthToken.storeSessionToken(signin.access_token).then(() => {
            //     Actions.home();
            // });

            AsyncStorage.setItem('token', signin.access_token, () => {
                Actions.home();
            });

        }else {
            Actions.blankPage();
        }

        // this.props.login(parameters);

        console.log(signin);
    }

    signUp(){
        Actions.signUp();
    }

    signIn(){
        const parameters = {
            username: this.state.email,
            password: this.state.password,
            scope: 'read write',
            grant_type: 'password',
            client_secret: 'pregnant',
            client_id: 'pregnant',
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

    forgetPassword(){
        Actions.forgetPassword();
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

                                <View style={styles.logo}>

                                </View>
                                <View style={styles.content}>

                                <View style={{}}>
                                    <View
                                        style={styles.inputWrap}
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
                                            label={I18n.t('Signin.userName').toUpperCase()}
                                            allowFontScaling={false}
                                            onEndEditing={() => {
                                                //this.onFinishedEditing('email')
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={styles.inputWrap}
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

                                </View>
                                <View style={{flex:1, paddingTop: 10, flexDirection:'column',justifyContent:'space-between'}}>

                                    <Button
                                        transparent
                                        block
                                        style={{}}
                                        onPress={() => {
                                            this.forgetPassword()
                                        }}
                                    >
                                        <Text style={{color: 'rgb(253,212,9)',fontSize:16,fontWeight:'500'}}>{I18n.t('Signin.forgotPassword2').toUpperCase()}</Text>
                                    </Button>

                                    <Button
                                        rounded
                                        block
                                        light
                                        style={{height: 55,backgroundColor:'rgb(253,212,9)'}}
                                        onPress={ () => {
                                                this.signIn()
                                        }}
                                    >
                                        <Text style={{
                                            color: '#000',
                                            fontWeight: 'bold',
                                            fontSize:16
                                        }}>{I18n.t('Signin.signin').toUpperCase()}</Text>
                                    </Button>



                                        <Button  block transparent
                                                style={{ height: height < 600 ? 30 : 35}}
                                                onPress={this.signUp.bind(this)}>
                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                fontSize:14
                                            }}>
                                                <Text style={{color:'#fff',fontWeight: 'bold',fontSize:14}}>{I18n.t('Signin.signup').toUpperCase()}</Text>
                                            </View>
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



export default connect(mapStateToProps, mapDispatchToProps)(Login);
