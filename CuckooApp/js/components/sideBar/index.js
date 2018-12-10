import React, {Component} from 'react';
import {
    View,
    AsyncStorage,
    Image,
} from 'react-native';
import {H3} from 'native-base';
import {connect} from 'react-redux';
import {Content, Text, Icon, ListItem} from 'native-base';
import {Actions} from 'react-native-router-flux';

import IconF from 'react-native-vector-icons/FontAwesome';

import {closeDrawer} from '../../actions/drawer';
import {setIndex} from '../../actions/list';

import styles from './style';

class SideBar extends Component {

    static propTypes = {
        // setIndex: React.PropTypes.func,
        closeDrawer: React.PropTypes.func,
        navigateTo: React.PropTypes.func,
    }

    navigateTo(route) {
        this.props.navigateTo(route, 'home');
    }

    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }


    componentDidMount() {
        var user = AsyncStorage.getItem('user').then((res) => {
            user = JSON.parse(res);
            this.setState({user: user});
        });
    }

    render() {
        return (
            <Content style={styles.sidebar}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.profilePicWrapper}>
                        <Image style={styles.profilePic}
                               source={require('../../../profile.jpg')}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            paddingLeft: 10,
                            justifyContent: "center",
                        }}>
                            <H3 style={{color: 'white'}}>MY CUCKOO</H3>
                            <Text style={{color: 'white'}}>
                                {this.state.user ? this.state.user.username : ""}
                            </Text>
                        </View>
                        <IconF style={{marginBottom:20,marginLeft:10,fontSize:35,color:'#fff'}} name='angle-double-right'/>
                    </View>
                </View>
                <ListItem style={styles.listItem} button onPress={() => {
                    Actions.home();
                    this.props.closeDrawer();
                }}>
                    <IconF style={styles.icon} name='home'/>
                    <Text style={styles.itemText}>
                        HOMEPAGE
                    </Text>
                </ListItem>
                <ListItem style={styles.listItem} button onPress={() => {
                    Actions.blankPage();
                    this.props.closeDrawer();
                }}>
                    <IconF style={styles.icon} name='credit-card'/>
                    <Text style={styles.itemText}>
                        LAGGUAGE MARKET
                    </Text>
                </ListItem>
                <ListItem style={styles.listItem} button onPress={() => {
                    Actions.blankPage();
                    this.props.closeDrawer();
                }}>
                    <IconF style={styles.icon} name='server'/>
                    <Text style={styles.itemText}>
                        CAMPAIGNS
                    </Text>
                </ListItem>
                <ListItem style={styles.listItem} button onPress={() => {
                    Actions.blankPage();
                    this.props.closeDrawer();
                }}>
                    <IconF style={styles.icon} name='car'/>
                    <Text style={styles.itemText}>
                        LUGGAGE SHUTTLE SERVICE
                    </Text>
                </ListItem>
                <ListItem style={styles.listItem} button onPress={() => {
                    Actions.blankPage();
                    this.props.closeDrawer();
                }}>
                    <IconF style={styles.icon} name='shopping-cart'/>
                    <Text style={styles.itemText}>
                        CUCKOO SHOPPING
                    </Text>
                </ListItem>
                <ListItem style={styles.listItem} button onPress={() => {
                    Actions.settings();
                    this.props.closeDrawer();
                }}>
                    <IconF style={styles.icon} name='gear'/>
                    <Text style={styles.itemText}>
                        SETTINGS
                    </Text>
                </ListItem>
            </Content>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
        setIndex: index => dispatch(setIndex(index)),
    };
}

export default connect(null, bindAction)(SideBar);
