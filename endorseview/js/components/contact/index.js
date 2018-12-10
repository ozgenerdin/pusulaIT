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

class ContactUs extends Component {
    static propTypes = {
        setUser: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};
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
                                    name='ios-menu'
                                    style={{color: '#fff'}}
                                    size={32}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={{
                                color: 'white',
                                fontSize: 18
                            }}>CONTACT US</Text>
                        </View>
                        <View style={{width: 50, alignItems: 'center'}}>
                        </View>
                    </View>
                    <Content>
                        <View style={{paddingLeft: 20, paddingRight: 20, marginTop: 30}}>
                            <Text>YOUR NAME</Text>
                            <View style={{
                                paddingBottom: 10, paddingTop: 5
                            }}>
                                <Input
                                    style={styles.input}
                                    placeholder={'name'}
                                    placeholderTextColor={'grey'}
                                    editable={true}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Text style={{paddingBottom: 5}}>YOUR EMAIL</Text>
                                <Input
                                    style={styles.input}
                                    placeholder={'mail'}
                                    placeholderTextColor={'grey'}
                                    editable={true}
                                />
                            </View>
                            <View style={{
                                paddingBottom: 10,
                            }}>
                                <Text style={{paddingBottom: 5}}>MESSAGE</Text>
                                <Input
                                    style={styles.inputMessage}
                                    editable={true}
                                />
                            </View>
                            <Button style={{marginTop: 10, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#01cbbb', width: width-40}}>
                                <Text>SUBMIT</Text>
                            </Button>
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
    },
    function bindActions(dispatch) {
        return {
            setUser: name => dispatch(setUser(name))
        };
    }
)(ContactUs);
LoginSwag.navigationOptions = {
    header: null
};
export default LoginSwag;
