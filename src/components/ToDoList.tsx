import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const data = [
    {
        id: 1,
        title: "Learn React Native"    
    },
    {
        id: 2,
        title: "Learn Redux"    
    },
]

type ItemType = {
 id: number,
 title: string
}

const ToDoList = () => {
    const deleteItem = (item: ItemType) => {}

    const renderItem = ({ item }: { item: ItemType }) => {
        return (
            <View style={styles.item} >
                <Text style={styles.title}>{item.title}</Text>
                

                <TouchableOpacity 
                    style={styles.delete} 
                    onPress={() => deleteItem(item.id)}
                >
                    <Icon name="trash" size={30} color="black" />
                </TouchableOpacity>
            </View> 
        )   
    }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default ToDoList

const styles = StyleSheet.create({
    item: {
        backgroundColor: "##E9E9E9",
        padding: 20,
        marginVertical: 0,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
    },
    delete: {
        fontSize: 24,
        color: "red"
    }
})