
import React, { useState } from 'react';
import { View, Button, StyleSheet, Dimensions, Text } from 'react-native';

const {width} = Dimensions.get('window')

const BgColorChanger = () => {
  const [bgColor, setBgColor] = useState('#c1c1c1');

  // Function to generate a random color
  const generateRandomColor = () => {
    const characters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * characters.length)];
    }
    
    setBgColor(color);
  };

  return (
    <View>
      <Text style = {styles.headingText}>Background Changer</Text>
    
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="bg changer" onPress={generateRandomColor} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 4,
    margin: 4,
  },
  container: {
    width: width*0.95,
    height: 400,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 30,
    margin: 10
  },
  
});

export default BgColorChanger;
