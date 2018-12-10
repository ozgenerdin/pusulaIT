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
    Text,
    CheckBox
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

class Add2 extends Component {
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
                            }}>PROGRESS: 2/3</Text>
                        </View>
                        <View style={{width: 50, alignItems: 'center'}}>
                        </View>
                    </View>
                    <Content>
                        <View style={{alignItems: 'center', padding: 20}}>
                            <Text style={styles.largeTxt}>
                                Work history
                            </Text>
                            <Text style={{...styles.mediumTxt,marginTop: 20}}>
                                Import your Linkedln profile.
                            </Text>
                            <Button style={{alignSelf: 'center', marginTop: 10, backgroundColor:'#4d9fcb'}}>
                                <Text>GET LINKEDIN PDF</Text>
                            </Button>
                            <View style={{marginTop: 10, alignItems: 'center'}}>
                                <Text style={styles.largeTxt}>
                                    Add or edit your work history
                                </Text>
                                <Text style={styles.mediumTxt}>
                                    We need at least 1 position.
                                </Text>
                            </View>
                        </View>
                        <View style={{paddingLeft: 20, paddingRight: 20}}>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Text style={{paddingBottom: 5}} t>
                                    Company Name
                                </Text>
                                <Input
                                    style={styles.input}
                                    editable={true}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Text style={{paddingBottom: 5}}>
                                    Job Title
                                </Text>
                                <Input
                                    style={styles.input}
                                    editable={true}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Text style={{paddingBottom: 5}}>
                                    Time Period
                                </Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Input
                                        style={styles.inputTime}
                                        editable={true}
                                    />
                                    <Text style={{alignSelf: 'center', paddingLeft: 5, paddingRight: 5}}>-</Text>
                                    <Input
                                        style={styles.inputTime}
                                        editable={true}
                                    />
                                </View>
                                <View style={{flexDirection: 'row', alignItem: 'center', marginTop: 15,}}>
                                    <CheckBox checked={true} color='green'/>
                                    <Text style={{paddingLeft: 15, fontSize: 12, color: 'grey'}}>
                                        Manage, add or remove email addresses.
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Text style={{paddingBottom: 5}}>
                                    City or Town
                                </Text>
                                <Input
                                    style={styles.input}
                                    editable={true}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Text style={{paddingBottom: 5}}>
                                    Job Title
                                </Text>
                                <Input
                                    style={styles.input}
                                    editable={true}
                                />
                            </View>
                            <Button style={{alignSelf: 'center', justifyContent: 'center', backgroundColor: '#c9d579', marginTop: 10, width: width-40}}>
                                <Text>+ ADD POSITION</Text>
                            </Button>
                            <View style={{paddingBottom:30}}>
                            <Button style={{marginTop: 50, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#01cbbb', width: width-40}}>
                                <Text>SAVE & CONTINUE</Text>
                            </Button>
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
)(Add2);
LoginSwag.navigationOptions = {
    header: null
};
export default LoginSwag;
