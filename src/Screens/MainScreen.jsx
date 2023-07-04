import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import TaskList from '../Components/TaskList'
import ModalTask from '../Components/Modal'


const MainScreen = ({taskList}) => {
  
  const [ list, setList ] = useState(taskList) 
  const [ input, setInput ] = useState("") // estado inicial es un string vacio del input
  const [ modalVisible, setModalVisible ] = useState(false)
  const [ taskActive, setTaskActive ] = useState({})

  const date = new Date()
  const [ id, setId] = useState((date.getTime()))
  
  
  const onAddTask = () =>{
    setId(date.getTime())
    setList([
      ...list,
      {
        id: id,
        task: input,
        completed: false
      }
    ])
  }  
  
  const onPressTask = (task) => {
    setTaskActive(task)
    setModalVisible(!modalVisible)
  }

  const onPressStatus = (status) =>{
    const remainTask = list.filter(taskList => taskList.id !== taskActive.id)
    const orderedList = [
         ...remainTask,
        {
          ...taskActive,
          completed: status
        }
      ].sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      })
      setList(orderedList)
      setModalVisible(!modalVisible)
  }

  const onPressDelete = () =>{
    const remainTask = list.filter(taskList => taskList.id !== taskActive.id)
    setList(remainTask)
    setModalVisible(!modalVisible)
  }

  
  return (
    <View style = {styles.container}>
      <TopBar
        input={input}
        onAddTask={onAddTask}
        setInput={setInput}
      />
      <TaskList
        list={list}
        onPressTask={onPressTask}
      />
      <ModalTask
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        taskActive={taskActive}
        onPressStatus={onPressStatus}
        onPressDelete={onPressDelete}
      />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
})