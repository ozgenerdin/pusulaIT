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

class SignUp5 extends Component {
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
                                }}>PROGRESS: 4/4</Text>
                            </View>
                            <View style={{width: 50, alignItems: 'center'}}>

                            </View>
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.text}>
                                Select your job preferences so we know what you are interested in.
                            </Text>
                        </View>
                        <View style={{...styles.textView, marginTop: 5, marginBottom: 5}}>
                            <Text style={{...styles.text, color: '#acadae', fontSize: 12}}>
                                Job preferences are private.
                            </Text>
                        </View>
                        <View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <View style={{...styles.textView, marginBottom: 10}}>
                                    <Text style={{...styles.text}}>
                                        What is your current job status?
                                    </Text>
                                </View>
                                <Input
                                    style={styles.input}
                                    placeholder={'Not actively looking for work'}
                                    placeholderTextColor={'white'}
                                    editable={false}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Considering next career move'}
                                    placeholderTextColor={'white'}
                                    editable={false}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Actively looking for work'}
                                    placeholderTextColor={'white'}
                                    editable={false}
                                />
                            </View>
                        </View>
                        <View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <View style={{...styles.textView, marginBottom: 10}}>
                                    <Text style={{...styles.text}}>
                                        What is your preffered work type?
                                    </Text>
                                </View>
                                <Input
                                    style={styles.input}
                                    placeholder={'Permanent'}
                                    placeholderTextColor={'white'}
                                    editable={false}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Contract'}
                                    placeholderTextColor={'white'}
                                    editable={false}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Casual'}
                                    placeholderTextColor={'white'}
                                    editable={false}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Freelance'}
                                    placeholderTextColor={'white'}
                                    editable={false}
                                />
                            </View>
                        </View>
                        <View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <View style={{...styles.textView}}>
                                    <Text style={{...styles.text}}>
                                        What is your notice period or next availability?
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Now'}
                                    placeholderTextColor={'white'}
                                    editable={false}
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
)(SignUp5);
LoginSwag.navigationOptions = {
    header: null
};
export default LoginSwag;
