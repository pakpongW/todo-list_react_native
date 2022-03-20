import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    Alert,
    KeyboardAvoidingView,
    TouchableOpacity,
    ScrollView,
    Keyboard,
} from "react-native";
import Todo from "./Todo";

export default function Home() {
    const [todo, settodo] = useState();
    const [todoItems, settodoItems] = useState([]);

    const handleAddTodo = () => {
        Keyboard.dismiss();
        settodoItems([...todoItems, todo]);
        settodo(null);
    };

    const completeTodo = (index) => {
        let itemsCopy = [...todoItems];
        itemsCopy.splice(index, 1);
        settodoItems(itemsCopy);
    };

    const handleSearch = () => {
        Alert.alert("Search press");
    };

    return (
        <View style={styles.container}>
            {/* ส่วนหัว search_title และ ปุ่ม search */}
            <View style={styles.Header_Footer}>
                <Text style={styles.Header_Title}>Todo-List</Text>

                <View style={styles.Search_Footer}>
                    <View style={styles.Search_Title}>
                        <TextInput
                            style={styles.Search_Holder}
                            placeholder={"Search"}
                        ></TextInput>
                    </View>

                    <Pressable
                        style={styles.Button_Footer}
                        title="Search"
                        onPress={() => handleSearch()}
                    >
                        <Text style={styles.Search_Button}>Search</Text>
                    </Pressable>
                </View>
            </View>

            {/* ส่วนโค้งสีขาวข้างใต้ search_title  */}
            <View style={styles.Header}></View>

            {/* ส่วนของ todo-list เลื่อนขึ้นเลื่อนลงได้เมื่อเกินหน้าจอ   */}
            <View style={styles.Body_footer}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.items}>
                        {todoItems.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => completeTodo(index)}
                                >
                                    <Todo text={item} />
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>

            {/* ส่วนของ Add-todo ปุ่ม + กับ ช่องใส่หัวข้อ  */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTodoWrapper}
            >
                <TextInput
                    style={styles.input}
                    placeholder={"Write a todo"}
                    value={todo}
                    onChangeText={(text) => settodo(text)}
                />

                <TouchableOpacity onPress={() => handleAddTodo()}>
                    <View style={styles.Add_Button}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    Header_Footer: {
        position: "absolute",
        width: 415,
        height: 154,
        left: 0,
        top: 0,
        backgroundColor: "#3DA9FC",
    },
    Header_Title: {
        position: "absolute",
        width: 117,
        height: 28,
        left: 150,
        top: 40,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 24,
        lineHeight: 28,
        textAlign: "center",
        color: "#FFFFFF",
    },
    Header: {
        position: "absolute",
        width: 412,
        height: 26,
        left: 0,
        top: 135,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    },
    Search_Footer: {
        position: "absolute",
        width: 350,
        height: 40,
        left: 30,
        top: 80,
    },
    Search_Title: {
        position: "absolute",
        width: 260,
        height: 40,
        backgroundColor: `#87cefa`,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
    },
    Button_Footer: {
        position: "absolute",
        width: 80,
        height: 40,
        left: 260,
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    },
    Search_Button: {
        position: "absolute",
        width: 72.62,
        height: 21,
        top: 10,
        left: 5,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 21,
        color: "#3DA9FC",
    },
    Search_Holder: {
        position: "absolute",
        width: 230,
        height: 28,
        top: 7,
        left: 15,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 20,
        lineHeight: 28,
    },
    Body_footer: {
        position: "absolute",
        width: 412,
        height: 530,
        left: 0,
        top: 161,
        backgroundColor: "#FFFFFF",
    },
    writeTodoWrapper: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#FFF",
        borderRadius: 60,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        width: 250,
    },
    Add_Button: {
        width: 80,
        height: 80,
        backgroundColor: "#3DA9FC",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1,
    },
    addText: {
        position: "absolute",
        width: 38,
        height: 38,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 48,
        lineHeight: 48,
        textAlign: "center",
        color: "#FFFFFF",
    },
    items: {
        marginTop: 30,
    },
});
