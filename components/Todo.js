import React from 'react';
import { View,Text, StyleSheet, Pressable, Image, } from 'react-native';

const Todo = (props) => {

    
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Pressable style={styles.Complete_footer}>
                    <Image source={require('../image/incomplete.png')} style={styles.Complete_size}></Image>
                </Pressable>
                <View>
                    <Text style={styles.Item_text} numberOfLines={1} ellipsizeMode={'tail'}>{props.text}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../image/clock.png')} style={styles.Clock_size}> 
                        </Image>
                        <Text style={styles.Time_text}>22/3/2022-20:26</Text>
                    </View>
                    
                </View>
                    
            </View>
            <View style={styles.Icon_footer}>
                <View style={styles.Edit_footer}>
                    <Pressable style={styles.Edit_icon}>
                        <Image source={require('../image/edit.png')} style={styles.Edit_size}> 
                        </Image>
                    </Pressable>
                </View>
                <View style={styles.favourite_footer}>
                    <Pressable style={styles.Edit_icon}>
                        <Image source={require('../image/unfavourite.png')} style={styles.Edit_size}> 
                        </Image>
                    </Pressable>
                </View>
            </View>
        </View>
    )

}

    const styles = StyleSheet.create({
        item: {
            backgroundColor: `#f0f8ff`,
            height: 80,
            borderRadius: 30,
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
        Complete_footer: {
            width: 45,
            height: 45,
        },
        Complete_size:{
            width: 45,
            height: 45,
        },
        Item_text: {
            position: 'relative',
            width: 130,
            height: 25,
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 5,
        },
        Time_text:{
            position: 'relative',
            fontSize: 14,
        },  
        favourite_footer: {
            width: 30,
            height: 30,
            borderRadius: 5,
        },
        favourite_icon:{
            position: 'absolute',
            width: 30,
            height: 30,
            borderRadius: 5,
        },
        favourite_size:{
            width: 28,
            height: 28,
        },
        Edit_footer:{
            width: 30,
            height: 30,
            borderRadius: 5,
        },
        Edit_icon:{
            position: 'absolute',
            width: 30,
            height: 30,
            borderRadius: 5,
        },
        Edit_size:{
            width: 28,
            height: 28,
        },  
        Icon_footer:{
            width: 80,
            height: 40,
            paddingTop: 5,
            flexDirection: 'row',
            justifyContent: "space-around",
            // backgroundColor: '#55BCF6',
        },
        Clock_size:{
            width: 20,
            height: 20,
            marginRight: 3,
        },

    });

export default Todo;
