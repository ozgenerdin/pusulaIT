import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {View, ScrollView, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

import {
    Container,
    Picker,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    List,
    ListItem,
    Right,
    Body
} from 'native-base';
import IconF from 'react-native-vector-icons/FontAwesome';

import {openDrawer} from '../../actions/drawer';
import styles from './styles';

class SettingsTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: 'TR',
            currencyType: 'EUR',
        };
    }

    static propTypes = {
        name: React.PropTypes.string,
        index: React.PropTypes.number,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func,
    }

    render() {
        const {props: {name, index, list}} = this;

        return (
            <Content
                style={{backgroundColor: '#f6f6f6', height: 150, marginBottom: 55}}
                scrollEnabled={true}
            >
                <ScrollView style={{
                    backgroundColor: '#f6f6f6',
                    height: 350,
                    marginBottom: 55,
                }}>
                    <ListItem style={styles.listItem} button onPress={() => {
                        Actions.profileInfo();
                    }}>
                        <View style={styles.listItemContainer}>
                            <View style={styles.listItemContent}>
                                <Text style={styles.blueText}>
                                    PROFİL BİLGİLERİ
                                </Text>
                            </View>
                            <View style={{
                                alignSelf: 'flex-end',
                                alignItems: 'flex-end',
                                marginRight: 25
                            }}>
                                <IconF style={styles.itemArrow} name='angle-right'/>
                            </View>
                        </View>
                    </ListItem>
                    <ListItem style={styles.listItem} button onPress={() => {
                        Actions.changePassword();
                    }}>
                        <View style={styles.listItemContainer}>
                            <View style={styles.listItemContent}>
                                <Text style={styles.blueText}>
                                    ŞİFREMİ DEĞİŞTİR
                                </Text>
                            </View>
                            <View style={{
                                alignSelf: 'flex-end',
                                alignItems: 'flex-end',
                                marginRight: 25
                            }}>
                                <IconF style={styles.itemArrow} name='angle-right'/>
                            </View>
                        </View>
                    </ListItem>
                    <ListItem style={styles.listItem} button onPress={() => {
                        //Actions.home();
                    }}>
                        <View style={styles.listItemContainer}>
                            <View style={styles.listItemContent}>
                                <Text style={styles.blueText}>
                                    PARA BİRİMİ
                                </Text>
                            </View>
                            <View style={{
                                alignSelf: 'flex-end',
                                alignItems: 'flex-end',
                                marginRight: 12,
                            }}>
                                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                    <View style={{paddingRight: 5}}>

                                        <Picker
                                            style={{height: 20}}
                                            textStyle={{
                                                color: 'gray',
                                                fontSize: 13,
                                                right: -10,
                                            }}
                                            iosHeader="PARA BİRİMİ"
                                            mode="dropdown"
                                            onValueChange={(currencyType) => this.setState({currencyType})}
                                            selectedValue={this.state.currencyType}
                                        >
                                            <Picker.Item label="DOLAR" value="USD"/>
                                            <Picker.Item label="EURO" value="EUR"/>
                                            <Picker.Item label="TÜRK LİRASI" value="TRK"/>
                                        </Picker>
                                    </View>
                                    <IconF style={styles.itemArrow} name='angle-right'/>
                                </View>
                            </View>
                        </View>
                    </ListItem>
                    <ListItem style={styles.listItem} button onPress={() => {
                        Actions.savedCards();
                    }}>
                        <View style={styles.listItemContainer}>
                            <View style={styles.listItemContent}>
                                <Text style={styles.blueText}>
                                    KAYITLI KARTLARIM
                                </Text>
                            </View>
                            <View style={{
                                alignSelf: 'flex-end',
                                alignItems: 'flex-end',
                                marginRight: 25
                            }}>
                                <IconF style={styles.itemArrow} name='angle-right'/>
                            </View>
                        </View>
                    </ListItem>
                    <ListItem itemDivider/>
                    <ListItem style={styles.listItem} button onPress={() => {
                        Actions.feedback();
                    }}>
                        <View style={styles.listItemContainer}>
                            <View style={styles.listItemContent}>
                                <Text style={styles.blueText}>
                                    GERİ BİLDİRİM YAP
                                </Text>
                            </View>
                            <View style={{
                                alignSelf: 'flex-end',
                                alignItems: 'flex-end',
                                marginRight: 25
                            }}>
                                <IconF style={styles.itemArrow} name='angle-right'/>
                            </View>
                        </View>
                    </ListItem>
                    <ListItem style={styles.listItem} button onPress={() => {
                        Actions.howToUse();
                    }}>
                        <View style={styles.listItemContainer}>
                            <View style={styles.listItemContent}>
                                <Text style={styles.blueText}>
                                    NASIL KULLANILIR
                                </Text>
                            </View>
                            <View style={{
                                alignSelf: 'flex-end',
                                alignItems: 'flex-end',
                                marginRight: 25
                            }}>
                                <IconF style={styles.itemArrow} name='angle-right'/>
                            </View>
                        </View>
                    </ListItem>
                    <ListItem style={styles.listItem} button onPress={() => {
                        //Actions.home();
                    }}>
                        <View style={styles.listItemContainer}>
                            <View style={styles.listItemContent}>
                                <Text style={styles.blueText}>
                                    BİLDİRİMLERİ AÇ/KAPAT
                                </Text>
                            </View>
                            <View style={{
                                alignSelf: 'flex-end',
                                alignItems: 'flex-end',
                                marginRight: 25
                            }}>
                                <IconF style={styles.itemArrow} name='angle-right'/>
                            </View>
                        </View>
                    </ListItem>
                    <ListItem style={styles.listItem} button onPress={() => {
                        //Actions.home();
                    }}>
                        <View style={styles.listItemContainer}>
                            <View style={styles.listItemContent}>
                                <Text style={styles.blueText}>
                                    UYGULAMA DİLİ
                                </Text>
                            </View>
                            <View style={{
                                alignSelf: 'flex-end',
                                alignItems: 'flex-end',
                                marginRight: 25
                            }}>
                                <Picker
                                    style={{height: 20}}
                                    textStyle={{
                                        color: 'gray',
                                        fontSize: 13,
                                        right: -20,
                                    }}
                                    iosHeader="UYGULAMA DİLİ"
                                    mode="dropdown"
                                    onValueChange={(language) => this.setState({language})}
                                    selectedValue={this.state.language}
                                >
                                    <Picker.Item label="TÜRKÇE" value="TR"/>
                                    <Picker.Item label="ENGLISH" value="EN"/>
                                    <Picker.Item label="DEUTSCH" value="DE"/>
                                </Picker>
                            </View>
                        </View>
                    </ListItem>
                    <ListItem itemDivider/>
                    <ListItem style={styles.listItem} button onPress={() => {
                        Actions.about();
                    }}>
                        <View style={styles.listItemContainer}>
                            <View style={styles.listItemContent}>
                                <Text style={styles.blueText}>
                                    HAKKINDA
                                </Text>
                            </View>
                            <View style={{
                                alignSelf: 'flex-end',
                                alignItems: 'flex-end',
                                marginRight: 25
                            }}>
                                <IconF style={styles.itemArrow} name='angle-right'/>
                            </View>
                        </View>
                    </ListItem>
                    <ListItem style={styles.listItem} button onPress={() => {
                        Actions.termsOfUsage();
                    }}>
                        <View style={styles.listItemContainer}>
                            <View style={styles.listItemContent}>
                                <Text style={styles.blueText}>
                                    KULLANIM ŞARTLARI
                                </Text>
                            </View>
                            <View style={{
                                alignSelf: 'flex-end',
                                alignItems: 'flex-end',
                                marginRight: 25
                            }}>
                                <IconF style={styles.itemArrow} name='angle-right'/>
                            </View>
                        </View>
                    </ListItem>
                </ScrollView>
            </Content>
        )
            ;
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
    };
}

const mapStateToProps = state => ({
    name: state.user.name,
    index: state.list.selectedIndex,
    list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(SettingsTab);
