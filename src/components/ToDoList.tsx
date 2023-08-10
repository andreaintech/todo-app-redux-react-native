import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';
import {deleteToDo} from '../redux/taskToDo';
import { useDispatch } from 'react-redux';

type ItemType = {
    id: string,
    name: string
}

const ToDoList = () => {
    const dispatch = useDispatch();
    const toDos = useSelector((state) => state.toDos);

    const onDelete = (id: string) => {
        dispatch(
            deleteToDo({
            id: id,
          })
        );
      };

    const renderItem = ({ item }: { item: ItemType }) => {
        return (
            <View style={styles.item} >
                <Text style={styles.title}>{item.name}</Text>
                

                <TouchableOpacity style={styles.delete} onPress={() => onDelete(item.id)}>
                    <Icon name="trash" size={30} color="black" />
                </TouchableOpacity>
            </View> 
        )   
    }

  return (
    <View>
      <FlatList
        data={toDos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default ToDoList

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#E9E9E9",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 28,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
    },
    delete: {
        fontSize: 24,
        color: "red"
    }
})