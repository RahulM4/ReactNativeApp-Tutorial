import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import Tutorial from './components/Tutorial';
import PasswordGenerator from './PasswordGeneratorApp/PasswordGeneraror';
import BgColorChanger from './bgColorChanger/BgColorChanger';


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      {/* Tutorial App */}
      <Tutorial/>
      {/* Password Generator App */}
      <PasswordGenerator/>
      <BgColorChanger/>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;