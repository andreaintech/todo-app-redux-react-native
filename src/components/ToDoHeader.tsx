import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import { useDispatch } from 'react-redux';
import {addToDo} from '../redux/taskToDo';

const ToDoHeader = () => {
    const dispatch = useDispatch();
    const [toDo, setToDo] = useState("");

    const onSubmitToDo = () => {
        if(toDo.trim().length === 0) {
            Alert.alert('You need to add a to do');
            setToDo("");
            return;
        }

        dispatch(addToDo({toDo}));

        setToDo("");
    }

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
                    onPress={onSubmitToDo}
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