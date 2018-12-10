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

class Add1 extends Component {
    static propTypes = {
        setUser: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    setUser(name) {
        this.props.setUser(name);
    }

    render() {
        return (
            <Container>
                <View style={styles.container}>

                    <View style={{
                        backgroundColor: '#373c40',
                        width: width,
                        height: 45,
                        marginTop: 20,
                        flexDirection: 'row',
                        alignItems: 'center',

                        zIndex: 25,
                        left: 0,
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
                                // this.props.navigation.navigate.pop();
                                this.props.navigation.navigate('DrawerOpen')
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
                            }}>PROGRESS: 1/3</Text>
                        </View>
                        <View style={{width: 50, alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => {
                                // this.props.navigation.navigate.pop();
                                this.props.navigation.navigate('Add2')
                            }} activeOpacity={0.8} style={{color: '#fff'}}>
                                <Icon
                                    name='ios-arrow-forward'
                                    style={{color: '#fff'}}
                                    size={32}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Content>
                        <View style={{alignItems: 'center', padding: 20}}>
                            <Text style={styles.largeTxt}>
                                Skills
                            </Text>
                            <Text>
                                Endorsers will verify the skills they have seen and endorse your top skills.
                            </Text>
                            <Text>
                                Minimum 5 skills required.
                            </Text>
                        </View>
                        <View style={{paddingLeft: 20, paddingRight: 20}}>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Software Engineering'}
                                    placeholderTextColor={'grey'}
                                    editable={false}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Data Science'}
                                    placeholderTextColor={'grey'}
                                    editable={false}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Finance/Accounting'}
                                    placeholderTextColor={'grey'}
                                    editable={false}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Marketing'}
                                    placeholderTextColor={'grey'}
                                    editable={false}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Consulting and Strategy'}
                                    placeholderTextColor={'grey'}
                                    editable={false}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Design'}
                                    placeholderTextColor={'grey'}
                                    editable={false}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Product & Project Delivery'}
                                    placeholderTextColor={'grey'}
                                    editable={false}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'People and Culture'}
                                    placeholderTextColor={'grey'}
                                    editable={false}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Sales'}
                                    placeholderTextColor={'grey'}
                                    editable={false}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'Office Management/Support'}
                                    placeholderTextColor={'grey'}
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
)(Add1);
LoginSwag.navigationOptions = {
    header: null
};
export default LoginSwag;
