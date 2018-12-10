const React = require('react-native');

const {StyleSheet, Dimensions} = React;

const {height, width} = Dimensions.get('window');
const deviceHeight = Dimensions.get('window').height;

export default {
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
    },
    shadow: {
        flex: 1,
        width: null,
        height: null,
    },
    bg: {
        flex: 1,
        marginTop: deviceHeight / 1.75,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30,
        bottom: 0,
    },
    input: {
        color: 'grey',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
    },
    inputMessage: {
        color: 'grey',
        height: 90,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
    },
    inputTime: {
        color: 'grey',
        height: 40,
        width: (width - 60)/2,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
    },
    btn: {
        marginTop: 20,
        alignSelf: 'center',
    },
    logo: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
    },
    inputFields: {
        flexDirection: 'column',
        marginHorizontal: 25,
    },
    inputLabel: {
        paddingLeft: 10,
        paddingBottom: 5,
        fontSize: 18,
        color: '#b5b6b5',
    },
    seperator: {
        height: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        width: width * 0.20,
    },
    largeTxt: {
        fontSize: 20,
        fontWeight: '600'
    },
    mediumTxt: {
        fontSize: 14,
        fontWeight: '600',
        color: 'gray'
    },
    smallTxt: {
        fontSize: 12,
        fontWeight: '300',
        color: 'gray'
    }
};
