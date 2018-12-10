import React, {Component} from "react";
import {Image, Dimensions, TouchableOpacity, ScrollView} from "react-native";
import {connect} from "react-redux";
import {
    Container,
    Content,
    Item,
    Input,
    Button,
    Icon,
    View,
    Text
} from "native-base";
import {Field, reduxForm} from "redux-form";
import {setUser} from "../../actions/user";
import styles from "./styles";

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {height, width} = Dimensions.get('window');

const background = require("../../../images/shadow.png");

const validate = values => {
    const error = {};
    error.email = "";
    error.password = "";
    var ema = values.email;
    var pw = values.password;
    if (values.email === undefined) {
        ema = "";
    }
    if (values.password === undefined) {
        pw = "";
    }
    if (ema.length < 8 && ema !== "") {
        error.email = "too short";
    }
    if (!ema.includes("@") && ema !== "") {
        error.email = "@ not included";
    }
    if (pw.length > 12) {
        error.password = "max 11 characters";
    }
    if (pw.length < 5 && pw.length > 0) {
        error.password = "Weak";
    }
    return error;
};

class SignUp1 extends Component {
    static propTypes = {
        setUser: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
        this.renderInput = this.renderInput.bind(this);
    }

    setUser(name) {
        this.props.setUser(name);
    }

    renderInput({
                    input,
                    label,
                    type,
                    meta: {touched, error, warning},
                    inputProps
                }) {
        var hasError = false;
        if (error !== undefined) {
            hasError = true;
        }
        return (
            <Item error={hasError}>
                <Icon active name={input.name === "email" ? "person" : "unlock"}/>
                <Input
                    style={{
                        backgroundColor: '#4b5053',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#767a7d',
                    }}
                    placeholder={input.name === "email" ? "EMAIL" : "PASSWORD"}
                    {...input}
                />
                {hasError
                    ? <Item style={{borderColor: "transparent"}}>
                        <Icon active style={{color: "red", marginTop: 5}} name="bug"/>
                        <Text style={{fontSize: 15, color: "red"}}>{error}</Text>
                    </Item>
                    : <Text />}
            </Item>
        );
    }

    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Content style={{marginLeft: 20, marginRight: 20}}
                             scrollEnabled={false}
                    >
                        <ScrollView style={{height: height}}>
                            <View style={{
                                // backgroundColor: '#00bcd2',
                                width: width,
                                height: 45,
                                marginTop: 20,
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingLeft: 10,
                                marginLeft: -20,
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
                                <View style={{width: 50, alignItems: 'center', marginLeft: -10}}>
                                    <TouchableOpacity onPress={() => {
                                        // this.props.navigation.navigate.pop();
                                        this.props.navigation.goBack()
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
                                        color: 'white',
                                        fontSize: 18
                                    }}>SIGN UP</Text>
                                </View>
                                <View style={{width: 50, alignItems: 'center'}}>
                                </View>
                            </View>
                            <View>
                                <Button
                                    block
                                    success
                                    style={{
                                        justifyContent: 'space-around',
                                        backgroundColor: '#0085bd',
                                        paddingRight: 50,
                                        marginTop: 5,
                                        paddingLeft: 5,
                                    }}
                                    onPress={() => {
                                        //this.forgetPassword()
                                    }}
                                >
                                    <FontAwesome
                                        name='linkedin'
                                        style={{color: '#fff'}}
                                        size={20}
                                    />
                                    <Text>SIGN IN WITH LINKEDIN</Text>
                                </Button>
                                <Button
                                    block
                                    success
                                    style={{
                                        justifyContent: 'space-around',
                                        backgroundColor: '#2d82ef',
                                        paddingRight: 50,
                                        marginTop: 10,
                                        paddingLeft: 5,
                                    }}
                                    onPress={() => {
                                        console.log(this.props);
                                    }}
                                >
                                    <FontAwesome
                                        name='google'
                                        style={{color: '#fff'}}
                                        size={20}
                                    />
                                    <Text>SIGN IN WITH GOOGLE</Text>
                                </Button>
                                <Button
                                    block
                                    success
                                    style={{
                                        justifyContent: 'space-around',
                                        backgroundColor: '#385698',
                                        paddingRight: 50,
                                        marginTop: 10,
                                        paddingLeft: 5,
                                    }}
                                    onPress={() => {
                                        // this.props.navigation.navigate("Home")
                                    }}
                                >
                                    <FontAwesome
                                        name='facebook'
                                        style={{color: '#fff'}}
                                        size={20}
                                    />
                                    <Text>SIGN IN WITH FACEBOOK</Text>
                                </Button>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 20
                            }}>
                                <View style={styles.seperator}/>
                                <Text style={{
                                    paddingHorizontal: 3,
                                    color: 'white'
                                }}>or sign up via email</Text>
                                <View style={styles.seperator}/>
                            </View>
                            <View>
                                <View style={{
                                    paddingBottom: 10,
                                }}>
                                    <Text style={styles.inputLabel}>FIRST NAME</Text>
                                    <Input
                                        style={styles.input}
                                    />
                                </View>
                                <View style={{
                                    paddingBottom: 10,
                                }}>
                                    <Text style={styles.inputLabel}>LAST NAME</Text>
                                    <Input
                                        style={styles.input}
                                    />
                                </View>
                                <View style={{
                                    paddingBottom: 10,
                                }}>
                                    <Text style={styles.inputLabel}>EMAIL</Text>
                                    <Input
                                        style={styles.input}
                                    />
                                </View>
                                <View style={{
                                    paddingBottom: 10,
                                }}>
                                    <Text style={styles.inputLabel}>PASSWORD</Text>
                                    <Input
                                        style={styles.input}
                                    />
                                </View>
                                <Button
                                    block
                                    style={{
                                        backgroundColor: '#01cbbb',
                                        marginTop: 10,
                                    }}
                                    onPress={() => {
                                        // this.props.navigation.navigate("Home")
                                        this.props.navigation.navigate("SignUp2")

                                    }}
                                >
                                    <Text>SIGN UP</Text>
                                </Button>
                            </View>
                        </ScrollView>
                    </Content>
                </View>
            </Container>
        );
    }
}
const LoginSwag = reduxForm(
    {
        form: "test",
        validate
    },
    function bindActions(dispatch) {
        return {
            setUser: name => dispatch(setUser(name))
        };
    }
)(SignUp1);
LoginSwag.navigationOptions = {
    header: null
};
export default LoginSwag;
