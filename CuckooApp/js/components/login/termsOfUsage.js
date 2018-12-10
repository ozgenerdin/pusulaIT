
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
            isChecked:true,
        };
    }



    signUp(){
        Actions.signUp();
    }

    termOfUsePage(){
        Actions.termOfUsePage();
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
                                <Text style={{color:'#fff',fontSize:18}}>{I18n.t('Signin.termsOfUsage').toUpperCase()}</Text>
                            </View>
                            <View style={{width:50,alignItems:'center'}}>

                            </View>

                        </View>

                        <View style={styles.content}>

                            <Text style={{color:'rgb(253,212,9)'}}>
                                {I18n.t('Signin.termsOfUsageText')}
                            </Text>

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



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
