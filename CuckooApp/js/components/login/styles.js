
import React, { Component } from 'react';
import {
    Platform,
    Dimensions
} from 'react-native';

const { StyleSheet } = React;

const {height, width} = Dimensions.get('window');

export default {
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        isScroll: false,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'rgb(4,81,156)',
        // alignItems: 'center',
    },
    logo: {
        marginTop: 30,
        marginBottom: 20,
        width: width,
        height:200,
        alignItems: 'center'
    },
    content:{
        flex:1,
        height:height - 250,
        padding:20,
        flexDirection:'column',
        //alignItems: 'center'
    },

    bracket: {
        alignItems: 'center',
        marginBottom: 10
    },
    inputWrap: {
        marginTop:5,
        //marginTop: -20,
    },
    inputWrapSignUp:{
        marginTop:0
    },
    modalContainer: {
        height: Dimensions.get('window').height * .34,
        width: Dimensions.get('window').width * 0.84,
        backgroundColor: 'white',
        top: height * 0.23,
        paddingVertical: 14,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
        backgroundColor: 'white',
        paddingTop: 10,
        paddingHorizontal: 14,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    picker: {
        borderWidth: 1,
        borderColor: '#ccc',
        color: '#fff'
    },
    lng: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        width: width,
        height: height < 600 ? 50 : 90,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: (Platform.OS == 'ios' ? 0: 10 )
    },
    lngOverlay: {
        backgroundColor: '#7fd4d7',
        width: width,
        height: height < 600 ? 50 : 90,
        opacity: .5,
        position: 'absolute',
        left: 0,
    },
    lngBtn: {
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderRadius: 50,
        borderColor: '#fff',
        width: 50,
        height: 50,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: width * 0.02
    },
    lngBtnText: {
        color: '#fff',
        fontSize: 14
    },
    PickerWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#b0b0b0',
        fontSize: 13,
        marginTop: -20,
        marginBottom: 5,
    },
};
