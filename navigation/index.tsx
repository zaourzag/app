import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { WebView } from 'react-native-webview';
import WebViewMoviezSpace from '../WebViewScreen';

const { Navigator, Screen } = createBottomTabNavigator();

// const UsersScreen = () => (
  
//  <WebView source={{ uri: 'https://ombi.zakariao.nl/' }} />

// );
const torrent = () => (
  
  <WebView source={{ uri: 'https://torrent.zakariao.nl/' }} />
 
 );
const OrdersScreen = () => (
 
  <WebView source={{ uri: 'https://organizEr.zakariao.nl' }}/>

);
const radarr = () => (
  
  <WebView source={{ uri: 'https://radar.zakariao.nl/' }} />
 
 );
 const sonarr = () => (
  
  <WebView source={{ uri: 'https://sonar.zakariao.nl/' }} />
 
 );
 const jackett = () => (
  
  <WebView source={{ uri: 'https://jackett.zakariao.nl/' }} />
 
 );
const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='ombi'/>
    <BottomNavigationTab title='Organizr'/>
    <BottomNavigationTab title='torrent'/>
    <BottomNavigationTab title='radarr'/>
    <BottomNavigationTab title='sonarr'/>
    <BottomNavigationTab title='jackett'  />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props: { navigation: any; state: any; }) => <BottomTabBar {...props} />}>
    <Screen name='Ombi' component={WebViewMoviezSpace}/>
    <Screen name='organizr' component={OrdersScreen}/>
    <Screen name='torrents' component={torrent}/>
    <Screen name='radarr' component={radarr}/>
    <Screen name='sonarr' component={sonarr}/>
    <Screen name='jackett' component={jackett}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);
