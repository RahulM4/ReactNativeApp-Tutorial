import { Image, StyleSheet, Text, View , Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import {contacts} from './contacts'

 const {width} = Dimensions.get('window')

export default function ContactList() {
  return (
    <View>
       <Text style={styles.headingText}>Contact List</Text>
       
       <View style={styles.mainContainer}>
        {
            contacts.map((item) =>(
              <TouchableOpacity key={item.id}>
                <View  style={styles.container}>
                    <Image source={{uri: item.profileImage}} style={styles.image}/>
                    <View style ={styles.card}>
                        <Text style ={styles.title}>{item.name}</Text>
                        <Text style ={styles.status}>{item.status}</Text>
                    </View>
                </View>
                </TouchableOpacity>
            ))
        }
       </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 4,
        margin: 4,
      },
      mainContainer:{
        width: width*0.95,
        margin:10,
        padding: 10
      },
      container:{
        padding: 10,
        margin: 4,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#DFF2EB',
        flex :1,
        flexDirection: 'row'
      },
      image:{
        width: 50,
        height: 50,
        borderRadius: 40
      },
      card:{
        marginLeft: 10
      },
      title:{
        color: '#4A628A',
        fontWeight: 500,
        fontSize: 16
      },
      status:{
        color:'#387478'
      }
})