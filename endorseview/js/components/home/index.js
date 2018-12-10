import React, {Component} from "react";
import {View, TouchableOpacity, Dimensions, ScrollView} from "react-native";
import {connect} from "react-redux";
import BlankPage2 from "../blankPage2";
import Header from "../header";
import DrawBar from "../DrawBar";
import AppIntro from 'react-native-app-intro';

const {height, width} = Dimensions.get('window');

import {DrawerNavigator, NavigationActions} from "react-navigation";
import {
    Container,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right
} from "native-base";
import {Grid, Row} from "react-native-easy-grid";

import {setIndex} from "../../actions/list";
import {openDrawer} from "../../actions/drawer";
import styles from "./styles";

class Home extends Component {
    static navigationOptions = {
        header: null
    };
    static propTypes = {
        name: React.PropTypes.string,
        setIndex: React.PropTypes.func,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func
    };

    newPage(index) {
        this.props.setIndex(index);
        Actions.blankPage();
    }

    render() {
        const pageArray = [{
            title: 'Page 1',
            description: 'Description 1',
            fontColor: '#fff',
            level: 1,
            zIndex: 5
        }, {
            title: 'Page 2',
            description: 'Description 2',
            fontColor: '#fff',
            level: 1,
        }];
        console.log(DrawNav, "786785786");
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
                            }}>ENDORSEVIEW</Text>
                        </View>
                        <View style={{width: 50, alignItems: 'center'}}>

                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{flex: 0.9, borderWidth: 1}}>
                            <View style={{
                                flex: 3,
                                alignSelf: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>

                            </View>
                            <View style={{
                                flex: 1,
                                alignSelf: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 5,
                                paddingBottom: 30
                            }}>
                                <Text style={{fontSize: 20}}>GET ENDORSED. GET THE JOB.</Text>
                                <Text style={{fontSize: 16}}>
                                    GET MATCHED TO JOBS BY CAPTURING ENDORSMENTS FROM PEOPLE YOU'VE WORKED WITH
                                </Text>
                            </View>
                            <Button
                                block
                                style={{
                                    position: 'absolute',
                                    width: 150,
                                    height: 50,
                                    backgroundColor: '#c9d579',
                                    bottom: -25,
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onPress={() => {
                                    this.props.navigation.navigate('GetStarted')
                                }}
                            >
                                <Text style={{color: 'white'}}>
                                    GET STARTED
                                </Text>
                            </Button>
                        </View>
                        <ScrollView style={{flex: 1.1, flexWrap: 'wrap',height: 100}}>
                            <AppIntro
                                style={{flex:1}}
                                customStyles={{flex: 1}}
                                pageArray={pageArray}
                            />
                        </ScrollView>
                    </View>
                </View>
            </Container>
        )
            ;
    }
}

function bindAction(dispatch) {
    return {
        setIndex: index => dispatch(setIndex(index)),
        openDrawer: () => dispatch(openDrawer())
    };
}
const mapStateToProps = state => ({
    name: state.user.name,
    list: state.list.list
});

const HomeSwagger = connect(mapStateToProps, bindAction)(Home);
const DrawNav = DrawerNavigator(
    {
        Home: {screen: HomeSwagger},
        BlankPage2: {screen: BlankPage2}
    },
    {
        contentComponent: props => <DrawBar {...props} />
    }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({navigation}) => {
    DrawerNav = navigation;
    return {
        header: null
    };
};
export default DrawNav;
