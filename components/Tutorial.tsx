import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './FlatCards';
import ElevatedCards from './ElevatedCards';
import FancyCards from './FancyCards';
import ActionCards from './ActionCards';
import ContactList from './ContactList';

export default function Tutorial() {
  return (
    <View>
        {/* FlatCards */}
        <FlatCards/>
        {/* Elevated Cards */}
        <ElevatedCards/>
        {/* Fancy Cards */}
        <FancyCards/>
        {/* Action Cards */}
        <ActionCards/>
        {/* <ActionCards/> */}
        <ContactList/>
    </View>
  )
}

const styles = StyleSheet.create({})