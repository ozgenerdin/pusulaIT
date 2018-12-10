import React, {Component} from "react";
import {Image, Dimensions} from "react-native";
import {connect} from "react-redux";
import {
    Container,
    Content,
    Item,
    Input,
    Button,
    Icon,
    Left,
    Body,
    Right,
    View,
    Text
} from "native-base";
import {Field, reduxForm} from "redux-form";
import {setUser} from "../../actions/user";
import styles from "./styles";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const background = require("../../../images/shadow.png");
const {height, width} = Dimensions.get('window');
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

class Login extends Component {
    static propTypes = {
        setUser: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            name: "",

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
                        color: 'white',
                        borderRadius: 10,
                        borderWidth: 2,
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
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Container style={styles.container}>
                    <Content scrollEnabled={false}>
                        <View style={styles.logo}>
                            <Text style={{
                                color: 'white',
                                fontSize: 30,
                            }}>
                                ENDORSEVIEW
                            </Text>
                        </View>
                        <View style={styles.inputFields}>
                            <View style={{
                                paddingBottom: 15,
                            }}>
                                <Text style={styles.inputLabel}>E-mail</Text>
                                <Input
                                    style={styles.input}
                                />
                            </View>
                            <Text style={styles.inputLabel}>Password</Text>
                            <Input style={styles.input}/>
                            <Button
                                block
                                success
                                style={{
                                    backgroundColor: '#01cbbb',
                                    marginTop: 20,
                                    paddingLeft: 5,
                                }}
                                onPress={() => {
                                    navigate('Home')
                                }}
                            >
                                <Text>SIGN IN</Text>
                            </Button>
                            <View style={{
                                paddingTop: 10,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                alignItems: 'center',

                            }}>
                                <Text style={{color: 'white'}}>DON'T HAVE AN ACCOUNT?</Text>
                                <Button
                                    style={{paddingLeft: 5}}
                                    transparent
                                    onPress={() => {
                                        this.props.navigation.navigate("SignUp1")
                                    }}
                                >
                                    <Text style={{color: '#00d0c0', fontSize: 16, fontWeight: '500'}}>
                                        SIGN UP
                                    </Text>
                                </Button>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <View style={styles.seperator}/>
                                <Text style={{
                                    paddingHorizontal: 3,
                                    color: 'white'
                                }}>or</Text>
                                <View style={styles.seperator}/>
                            </View>
                            <Button
                                block
                                success
                                style={{
                                    justifyContent: 'space-around',
                                    backgroundColor: '#0085bd',
                                    paddingRight: 50,
                                    marginTop: 20,
                                    paddingLeft: 5,
                                }}
                                onPress={() => {
                                    this.forgetPassword()
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
                                    marginTop: 20,
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
                                    marginTop: 20,
                                    paddingLeft: 5,
                                }}
                                onPress={() => {
                                    console.log(this.props);
                                    this.props.navigation.navigate("Home")
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
                    </Content>
                </Container>
            </View>
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
)(Login);
LoginSwag.navigationOptions = {
    header: null
};
export default LoginSwag;
