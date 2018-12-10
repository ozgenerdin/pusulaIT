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
    ListItem,
    Left,
    Right
} from "native-base";
import {Field, reduxForm} from "redux-form";
import {setUser} from "../../actions/user";
import styles from "./styles";

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {height, width} = Dimensions.get('window');

const background = require("../../../images/shadow.png");

class Profile extends Component {
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
                            }}>PROFILE</Text>
                        </View>
                        <View style={{width: 50, alignItems: 'center'}}>
                        </View>
                    </View>
                    <Content>
                        <View style={{backgroundColor: '#edf1f5', height: 200}}>
                            <View style={{margin: 20}}>
                                <View style={{
                                    alignSelf: 'center',
                                    width: 100,
                                    height: 100,
                                    borderRadius: 50,
                                    backgroundColor: 'grey'
                                }}>
                                </View>
                                <View style={{
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 15
                                }}>
                                    <Text style={styles.largeTxt}>NAME SURNAME</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <ListItem button onPress={() => {
                                this.props.navigation.navigate('PersonalInfo')
                            }}>
                                    <Left>
                                        <Text>PERSONAL INFO</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="arrow-forward"/>
                                    </Right>
                            </ListItem>
                            <ListItem button onPress={() => {
                                this.props.navigation.navigate('EmailAddresses')
                            }}>
                                <Left>
                                    <Text>EMAIL</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward"/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text>PASSWORD</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward"/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text>ACCESS REQUESTS</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward"/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text>CLOSE ACCOUNT</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward"/>
                                </Right>
                            </ListItem>
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
)(Profile);
LoginSwag.navigationOptions = {
    header: null
};
export default LoginSwag;
