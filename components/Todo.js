import React from 'react';
import { View,Text, StyleSheet, Pressable, } from 'react-native';

const Todo = (props) => {

    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Pressable style={styles.square}></Pressable>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )

}

    const styles = StyleSheet.create({
        item: {
            backgroundColor: `#f0f8ff`,
            height: 70,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            marginBottom: 5,
            borderColor: '#3DA9FC',
        },
        itemLeft: {
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        square: {
            width: 45,
            height: 45,
            backgroundColor: '#55BCF6',
            opacity: 0.5,
            borderRadius: 25,
            marginRight: 10,
        },
        itemText: {
            maxWidth: '80%',
            fontSize: 17,
        },
        circular: {
            width: 20,
            height: 20,
            borderColor: '#55BCF6',
            borderWidth: 2,
            borderRadius: 5,
        },
        // position: 'absolute',
        // height: 70,
        // left: 12,
        // right: 13,
        // top: 0,
        // backgroundColor: `#f0f8ff`,
        // borderRadius: 20,
    });

export default Todo;
