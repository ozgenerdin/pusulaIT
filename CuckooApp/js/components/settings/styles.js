const React = require('react-native');
import {TouchableOpacity, Image, AsyncStorage, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const {StyleSheet} = React;
export default {
    container: {
        backgroundColor: '#FBFAFA',
    },

    upperContainer: {
        backgroundColor: '#04519c',
    },

    row: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 15,
        alignItems: 'center',
    },
    mt: {
        marginTop: 18,
    },
    profilePic: {
        height: 90,
        width: 90,
        borderRadius: 45,
        borderColor: 'white',
    },
    profilePicSmall: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderColor: 'white',
    },
    profilePicWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 50,
    },
    profilePicWrapperSmall: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 35,
        width: 35,
        borderWidth: 2,
        borderColor: '#fdd409',
        borderRadius: 35,
        alignSelf: 'flex-start',
    },
    grayText: {
        fontSize: 13,
        color: '#b6b7b6',
    },
    blueText: {
        color: '#04519c',
        fontWeight: '500',
        fontSize: 14
    },
    starStyle: {
        color: '#fcc231',
        backgroundColor: '#e4e3de',
    },
    PickerWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#b0b0b0',
        fontSize: 13,
        marginTop: -20,
        marginBottom: 5,
    },
    iconBag: {
        color: '#fdd409',
    },
    cameraIcon: {
        fontSize: 20,
        color: 'white',
    },
    itemText: {
        color: '#004b9a',
        paddingLeft: 20,
        flex: 1,
    },
    itemArrow: {
        color: 'gray',
        flex: 1,
        fontSize: 22,
    },
    listItemContainer: {
        width: width,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10
    },
    listItemArrow: {
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 25
    },
    listItem: {
        marginLeft: 0,
        backgroundColor: 'white',
    },
    listItemContent: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginHorizontal: 25,
    }
};
