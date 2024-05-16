import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen import
import OnBoarding from './screens/OnBoarding';
// import Login from './screens/Login';
import Home from './screens/Home';
import Tab from './assets/BottomTab';
import Library from './screens/Library';
import NewFeed from './screens/NewFeed';
import Setting from './screens/Setting';
import Add from './screens/Add';

// ____________________END OF IMPORT_______________________

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="OnBoarding" component={OnBoarding} /> */}
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="NewFeed" component={NewFeed} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Add" component={Add} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
