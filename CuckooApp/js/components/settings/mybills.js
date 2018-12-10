import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {View, Dimensions, Image, ScrollView} from 'react-native';
const {width, height} = Dimensions.get('window');

import {
    Container,
    Header,
    Title,
    Content,
    Text,
    List,
    ListItem,
    Button,
    Icon,
    Left,
    Right,
    Body
} from 'native-base';

import {openDrawer} from '../../actions/drawer';
import IconF from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class MyBills extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        index: React.PropTypes.number,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func,
    }

    render() {
        const {props: {name, index, list}} = this;

        return (
            <View style={{flex:1, width: width}}>
                <Container>
                    <Content padder
                             style={{backgroundColor: '#f6f6f6'}}
                             scrollEnabled={false}
                    >
                        <ScrollView style={{height: 350}}>
                            <ListItem style={{
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: '#ededed',
                                backgroundColor: 'white',
                                marginLeft: 0,
                                paddingVertical: 18,
                                alignItems: 'center'
                            }}>

                                <Left style={{flexDirection: 'row', alignItems: 'center'}}>

                                    <Image style={{
                                        marginLeft:20,
                                    }}
                                           source={require('../../../images/ic_pdf.png')}
                                    />
                                    <Text style={{color: '#04519c', fontWeight: '400', paddingLeft: 10}}>2017_06_02-THY12</Text>
                                </Left>

                                <Right>
                                    <IconF style={{
                                        color: 'gray',
                                        fontSize: 30,
                                        paddingRight: 15,
                                    }} name="angle-right"/>
                                </Right>
                            </ListItem>
                            <ListItem style={{
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: '#ededed',
                                backgroundColor: 'white',
                                marginLeft: 0,
                                marginTop:10,
                                paddingVertical: 18,
                                alignItems: 'center'
                            }}>

                                <Left style={{flexDirection: 'row', alignItems: 'center'}}>

                                    <Image style={{
                                        marginLeft:20,
                                    }}
                                           source={require('../../../images/ic_pdf.png')}
                                    />
                                    <Text style={{color: '#04519c', fontWeight: '400', paddingLeft: 10}}>2017_06_02-THY13</Text>
                                </Left>

                                <Right>
                                    <IconF style={{
                                        color: 'gray',
                                        fontSize: 30,
                                        paddingRight: 15,
                                    }} name="angle-right"/>
                                </Right>
                            </ListItem>
                            <ListItem style={{
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: '#ededed',
                                backgroundColor: 'white',
                                marginLeft: 0,
                                marginTop:10,
                                paddingVertical: 18,
                                alignItems: 'center'
                            }}>

                                <Left style={{flexDirection: 'row', alignItems: 'center'}}>

                                    <Image style={{
                                        marginLeft:20,
                                    }}
                                           source={require('../../../images/ic_pdf.png')}
                                    />
                                    <Text style={{color: '#04519c', fontWeight: '400', paddingLeft: 10}}>2017_06_02-THY14</Text>
                                </Left>

                                <Right>
                                    <IconF style={{
                                        color: 'gray',
                                        fontSize: 30,
                                        paddingRight: 15,
                                    }} name="angle-right"/>
                                </Right>
                            </ListItem>
                            <ListItem style={{
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: '#ededed',
                                backgroundColor: 'white',
                                marginLeft: 0,
                                marginTop:10,
                                paddingVertical: 18,
                                alignItems: 'center'
                            }}>

                                <Left style={{flexDirection: 'row', alignItems: 'center'}}>

                                    <Image style={{
                                        marginLeft:20,
                                    }}
                                           source={require('../../../images/ic_pdf.png')}
                                    />
                                    <Text style={{color: '#04519c', fontWeight: '400', paddingLeft: 10}}>2017_06_02-THY15</Text>
                                </Left>

                                <Right>
                                    <IconF style={{
                                        color: 'gray',
                                        fontSize: 30,
                                        paddingRight: 15,
                                    }} name="angle-right"/>
                                </Right>
                            </ListItem>
                            <ListItem style={{
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: '#ededed',
                                backgroundColor: 'white',
                                marginLeft: 0,
                                marginTop:10,
                                paddingVertical: 18,
                                alignItems: 'center'
                            }}>

                                <Left style={{flexDirection: 'row', alignItems: 'center'}}>

                                    <Image style={{
                                        marginLeft:20,
                                    }}
                                           source={require('../../../images/ic_pdf.png')}
                                    />
                                    <Text style={{color: '#04519c', fontWeight: '400', paddingLeft: 10}}>2017_06_02-THY16</Text>
                                </Left>

                                <Right>
                                    <IconF style={{
                                        color: 'gray',
                                        fontSize: 30,
                                        paddingRight: 15,
                                    }} name="angle-right"/>
                                </Right>
                            </ListItem>
                        </ScrollView>
                    </Content>
                </Container>
            </View>

        );
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


export default connect(mapStateToProps, bindAction)(MyBills);
