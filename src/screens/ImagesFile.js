import React from 'react'
import { View } from 'react-native'
import CardDetails from '../Components/CardDetails'

// Note that for props study in react native we will treate this file as parent and CardDetails page as child component

// IMPORTANT note that always store static content that doesnot change its value in the assets folder

const ImagesFile = () => {
  return (
    <View>
      <CardDetails textData = 'this is first image' ImgSrc={require("../../assets/pexelscoding.webp")}  />
      <CardDetails textData = 'this is second image' ImgSrc={require("../../assets/pexelcoding2.jpg")} />
      <CardDetails textData = 'this is third image' ImgSrc={require("../../assets/pexelscoding3.jpg")} />
    </View> 
  )
}

export default ImagesFile