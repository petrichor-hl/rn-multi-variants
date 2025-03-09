import React from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DeviceInfo from 'react-native-device-info';
import Config from 'react-native-config';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text style={{fontSize: 20}}>BUNDLE_ID = {DeviceInfo.getBundleId()}</Text>
      <Text style={{fontSize: 20}}>ENV = {Config.ENV}</Text>
      <Text style={{fontSize: 20}}>API_URL = {Config.API_URL}</Text>
    </SafeAreaView>
  );
}

export default App;
