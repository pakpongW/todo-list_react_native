import React from 'react';
import { View,Text, StyleSheet, Pressable, Image, } from 'react-native';
import TodoDataService from "../services/todo.service";

const Todo = (props ,{ navigation }) => {
    const data = props.todo

    const setStatus = () => {
    
        data.published = ! data.published

        TodoDataService.update(data.id,data)
            .then(response => {
               
            })
            .catch(e => {
                console.log(e);
            });
    }

    const setFav = () => {
    
        data.favourite = ! data.favourite

        TodoDataService.update(data.id,data)
            .then(response => {
                
            })
            .catch(e => {
                console.log(e);
            });
    }

    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Pressable style={styles.Complete_footer} onPress={() => setStatus() } >
                    <Image source={ data.published ? require('../image/complete.png') : require('../image/incomplete.png') } style={styles.Complete_size}></Image>
                </Pressable>
                <View>
                    <Text style={styles.Item_text} numberOfLines={1} ellipsizeMode={'tail'}>{data.title}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={ require('../image/clock.png')} style={styles.Clock_size}> 
                        </Image>
                        <Text style={styles.Time_text}>{data.datetime}</Text>
                    </View>
                    
                </View>
                    
            </View>
            <View style={styles.Icon_footer}>
                <View style={styles.Edit_footer}>
                    <Pressable style={styles.Edit_icon} onPress={() => props.onPress() } >
                        <Image source={require('../image/edit.png')} style={styles.Edit_size}> 
                        </Image>
                    </Pressable>
                </View>
                <View style={styles.favourite_footer} >
                    <Pressable style={styles.Edit_icon} onPress={() => setFav()} >
                        <Image source={ data.favourite ? require('../image/favourite.png'):require('../image/unfavourite.png')} style={styles.Edit_size}> 
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
