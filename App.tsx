import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import Tutorial from './components/Tutorial';
import PasswordGenerator from './PasswordGeneratorApp/PasswordGeneraror';
import BgColorChanger from './BgColorChanger/BgColorChanger';
import TicTacToe from './TicTacToe/TicTacToe';



const App = () => {
  return (
 
    <SafeAreaView>
      <ScrollView>
      {/* Tutorial App */}
      <Tutorial/>
      {/* Password Generator App */}
      <PasswordGenerator/>
      {/* Background Changer */}
      <BgColorChanger/>
      {/* Tic Tac Toe game */}
      <TicTacToe/>
      {/* Music Player */}
     
      </ScrollView>
    </SafeAreaView>
  
  );
};


export default App;