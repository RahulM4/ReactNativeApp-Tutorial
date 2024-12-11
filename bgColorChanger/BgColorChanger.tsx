
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

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
    
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="bg changer" onPress={generateRandomColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  
});

export default BgColorChanger;
