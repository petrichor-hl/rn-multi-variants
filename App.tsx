import React from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text style={{fontSize: 28}}>{DeviceInfo.getBundleId()}</Text>
    </SafeAreaView>
  );
}

export default App;
