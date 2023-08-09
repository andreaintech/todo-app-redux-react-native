import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'

const ToDoHeader = () => {
    const [toDo, setToDo] = useState("");

    return (
        <View>
            <Text 
                style={{
                    fontSize: 20, 
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: 10,
                }}>
                    ToDo List
            </Text>

            <View style={{
                justifyContent: "center",
                alignItems: "center"
            }}>
                <TextInput
                    style={{
                        borderColor: "gray", 
                        borderWidth: 1,
                        padding: 10,
                        margin: 10,
                        width: "90%",
                        borderRadius: 5,
                    }}
                    placeholder="Add To Do"
                    onChangeText={(text) => setToDo(text)}
                    value={toDo}
                />

                <TouchableOpacity 
                    style={{
                        backgroundColor: "black",
                        padding: 10,
                        margin: 10,
                        width: "90%",
                        borderRadius: 5,
                        alignItems: "center"
                    }} 
                >
                    <Text 
                        style={{
                            color: "white"
                        }}>
                            Add
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default ToDoHeader

const styles = StyleSheet.create({})