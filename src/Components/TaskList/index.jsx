import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import renderItemTask from './renderItemTask'

const TaskList = ({
    list,
    onPressTask    
}) => {
  return (
    <View style = {styles.view2}>
        <FlatList
            data = {list}
            keyExtractor={item => item.id}
            renderItem = { ({item}) => renderItemTask({item, onPressTask})}
        />
      </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
    view2:{
        height: "88%",
        backgraoundColor: "darkcyan",
        with: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 15
    },
})