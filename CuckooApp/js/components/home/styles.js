const React = require('react-native');

const {StyleSheet} = React;
export default {
    container: {
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
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 0.6,
        borderColor: 'white',
    },
    whiteText: {
        fontWeight:'600',
        fontSize:14,
        color: 'white',
    },
    profilePicWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 70,
        borderWidth: 2,
        borderColor: '#fdd409',
        borderRadius: 35,
    },
    grayText: {
        color: '#b6b7b6',
    },
    blueText: {
        color: '#04519c',
        fontWeight: '500',
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
        color:'#fdd409',
    }
};
