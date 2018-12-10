
import React, { Component } from 'react';
import {
    Platform,
    Dimensions
} from 'react-native';

const { StyleSheet } = React;

const {height, width} = Dimensions.get('window');

export default {
    container: {
        height:200,
        width:width,
    },
};
