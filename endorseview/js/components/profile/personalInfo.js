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

class PersonalInfo extends Component {
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
                            }}>PERSONAL INFO</Text>
                        </View>
                        <View style={{width: 50, alignItems: 'center'}}>
                        </View>
                    </View>
                    <Content>
                        <View style={{marginLeft: 20, marginRight: 20, marginTop: 20, justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{paddingBottom: 5}}>First Name</Text>
                                    <Input
                                        style={styles.inputTime}
                                        editable={true}
                                    />
                                </View>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{paddingBottom: 5}}>Last Name</Text>
                                    <Input
                                        style={styles.inputTime}
                                        editable={true}
                                    />
                                </View>
                            </View>
                            <View style={{
                                paddingBottom: 10, paddingTop: 10
                            }}>
                                <Text style={{paddingBottom: 5}}>
                                    Email
                                </Text>
                                <Input
                                    style={styles.input}
                                    editable={true}
                                />
                            </View>
                            <Text style={styles.greenTxt}>Manage, add or remove email addresses.</Text>
                            <View style={{
                                paddingBottom: 10, paddingTop: 10
                            }}>
                                <Text style={{paddingBottom: 5}}>
                                    Your EndorseView URL
                                </Text>
                                <View style={{
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    alignSelf: 'center'
                                }}>
                                    <Input
                                        style={styles.inputBorderless}
                                        editable={true}
                                    />
                                    <Button style={{
                                        height: 40,
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#01cbbb'
                                    }}>
                                        <Text>Change</Text>
                                    </Button>
                                </View>
                            </View>
                            <Button style={{
                                marginTop: 50,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#01cbbb',
                                width: width - 40
                            }}>
                                <Text>SAVE</Text>
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
)(PersonalInfo);
LoginSwag.navigationOptions = {
    header: null
};
export default LoginSwag;
