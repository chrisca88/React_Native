import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const TopBar = ({
    input,
    setInput,
    onAddTask
}) => {
  return (
    <View style = {styles.view1}>
        <TextInput 
          style = {styles.input}
          value = {input}
          onChangeText = {setInput}
         />
        <TouchableOpacity 
            style = {styles.button}
            onPress={onAddTask}
        >
            <Text style={styles.buttonText}>Agregar Tarea</Text>
        </TouchableOpacity>
      </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
    view1:{
        height: "12%",
        flexDirection: "row",
        gap: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent:"center",
        alignItems: "flex-end",
        backgraoundColor: "azure",
        with: "100%"
        
    },
    input:{
        width: 250,
        height: 35,
        borderBottomColor: "deepskyblue",
        borderBottomWidth: 3,
        color: "gray",
        fontSize: 20

    },
    button:{
        height: 35,
        width: 90,
        paddingVertical: 7,
        paddingHorizontal:10,
        borderRadius: 5,
        backgroundColor: "deepskyblue"

    },
    buttonText: {
      fontSize: 16,
      textAlign: "center",
  },
})