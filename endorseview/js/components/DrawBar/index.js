import React from "react";
import {AppRegistry, Image, TouchableOpacity} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
    Button,
    Text,
    View,
    Container,
    List,
    ListItem,
    Content,
    Icon
} from "native-base";
const routes = ["Home", "KnowledgeBase", "RequestSupport", "ContactUs", "CustomerSupport"];
const routeTitles = {
    Home: "Dashboard",
    KnowledgeBase: "Knowledge Base",
    RequestSupport: "Request Support",
    ContactUs: "Contact Us",
    CustomerSupport: "Customer Support",
};
const routeIcons = {
    Home: "home",
    KnowledgeBase: "book",
    RequestSupport: "life-ring",
};

export default class DrawBar extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={{
                paddingLeft: 15,
                backgroundColor: '#01cbbd'
            }}>
                <Content>

                    <TouchableOpacity
                        style={{
                            height: 120,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        onPress={() => navigate("DrawerClose")}
                    >
                        <Image
                            square
                            style={{height: 80, width: 70}}
                            source={{
                                uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
                            }}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}
                        >
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{
                                    height: 80,
                                    width: 80,
                                    borderWidth: 1,
                                    borderRadius: 40,
                                    borderColor: 'white',
                                    backgroundColor: 'transparent',
                                }}/>
                                <View style={{
                                    paddingLeft: 10,
                                }}>
                                    <Text style={{color: 'white'}}>İsim</Text>
                                    <Text style={{color: 'white'}}>Soyisim</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <FontAwesome
                            name='sign-out'
                            style={{color: '#fff', paddingRight: 15}}
                            size={32}
                        />
                    </View>

                    <List
                        style={{paddingTop: 10}}
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    style={{
                                        borderBottomWidth: 0,
                                    }}
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}
                                >
                                    <FontAwesome
                                        name={routeIcons[data]}
                                        style={{color: '#fff'}}
                                        size={20}
                                    />
                                    <Text style={{
                                        paddingLeft: 10,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: 18,
                                    }}>
                                        {routeTitles[data]}
                                    </Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}
