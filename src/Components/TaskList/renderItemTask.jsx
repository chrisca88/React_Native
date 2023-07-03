import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const renderItemTask = ({item, onPressTask}) => {
    return (
      <Pressable onPress = {() => onPressTask (item)}>
      <View style = {styles.task} key={item.id}>
          <Text style = {styles.taskText}>{item.task}</Text>
      </View>
      </Pressable>
    )
  }

export default renderItemTask

const styles = StyleSheet.create({
    task:{
        width: 200,
        backgroundColor: "mediumpurple",
        padding: 10,
        borderRadius: 6,
        borderColor: "#000",
        borderBottomWidth: 3,
        borderRightWidth:3,
        marginBottom: 15
    },
    taskText:{
        fontSize:20
    },
})