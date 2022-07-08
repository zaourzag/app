import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { HomeScreen } from '../components/Home.component';
import { DetailsScreen } from '../components/details.component';
import { WebView } from 'react-native-webview';

const { Navigator, Screen } = createBottomTabNavigator();

const UsersScreen = () => (
  
 <WebView source={{ uri: 'https://ombi.zakariao.nl/' }} />

);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <WebView source={{ uri: 'https://organizr.zakariao.nl' }}/>
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='ombi'/>
    <BottomNavigationTab title='Organizr'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Ombi' component={UsersScreen}/>
    <Screen name='Orders' component={DetailsScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);
