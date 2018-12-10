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

class CustomerSupport extends Component {
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
                            }}>CUSTOMER SUPPORT</Text>
                        </View>
                        <View style={{width: 50, alignItems: 'center'}}>
                        </View>
                    </View>
                    <Content>
                        <View style={{backgroundColor: '#edf1f5'}}>
                            <View style={{margin: 20}}>
                                <View style={{
                                    alignSelf: 'center',
                                    width: 75,
                                    height: 75,
                                    borderRadius: 37,
                                    backgroundColor: 'grey'
                                }}>
                                </View>
                                <View style={{alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={styles.largeTxt}>Marion</Text>
                                    <Text style={styles.mediumTxt}>We're here to answer your questions about
                                        EndroseView. Sometimes we're busy helping other users but we'll get back to you
                                        as soon as possible.</Text>
                                    <Text style={styles.smallTxt}>Typically replies in a few hours.</Text>
                                </View>
                            </View>
                        </View>

                    </Content>
                    <View style={{ flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'flex-end',alignContent:'flex-end'}}>
                        <View style={{backgroundColor: '#edf1f5', height: 50}}>
                            <Text style={styles.mediumTxt}>Send a message...</Text>
                        </View>
                    </View>
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
)(CustomerSupport);
LoginSwag.navigationOptions = {
    header: null
};
export default LoginSwag;
