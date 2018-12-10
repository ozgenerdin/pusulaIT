import React, {Component} from "react";
import {Image, Dimensions, TouchableOpacity} from "react-native";
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

class SignUp3 extends Component {
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
                    <Content padder style={{marginLeft: 20, marginRight: 20}}>
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
                                }}>PROGRESS: 2/4</Text>
                            </View>
                            <View style={{width: 50, alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate("SignUp4")
                                }} activeOpacity={0.8} style={{color: '#fff'}}>
                                    <Icon
                                        name='ios-arrow-forward'
                                        style={{
                                            height: 32,
                                            width:32,
                                            color: '#fff'
                                        }}
                                        size={32}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.text}>
                                What are you interested in?
                            </Text>
                        </View>
                        <View style={{...styles.textView, marginTop: 5, marginBottom: 5}}>
                            <Text style={{...styles.text, color:'#acadae', fontSize: 12}}>
                                Endorsers will verify the have seen and endorse your top skills.
                            </Text>
                            <Text style={{...styles.text, color:'#acadae'}}>
                                (Please add at least 5 skills)
                            </Text>
                        </View>
                        <View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Entnography Studies'}
                                    placeholderTextColor={'white'}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'User Modelling'}
                                    placeholderTextColor={'white'}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Storyboarding'}
                                    placeholderTextColor={'white'}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Prototyping'}
                                    placeholderTextColor={'white'}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Responsive Design'}
                                    placeholderTextColor={'white'}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Cognitive Psychology'}
                                    placeholderTextColor={'white'}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Usability Testing'}
                                    placeholderTextColor={'white'}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'User Flows'}
                                    placeholderTextColor={'white'}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Interaction Design'}
                                    placeholderTextColor={'white'}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Mobile App Design'}
                                    placeholderTextColor={'white'}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'User Interface Design'}
                                    placeholderTextColor={'white'}
                                />
                            </View>
                        </View>
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
)(SignUp3);
LoginSwag.navigationOptions = {
    header: null
};
export default LoginSwag;
