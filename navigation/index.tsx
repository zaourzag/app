import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { WebView } from 'react-native-webview';
import test from '../WebViewScreen';


const { Navigator, Screen } = createBottomTabNavigator();
 const ombi = () => (
  
 <WebView source={{ uri: 'https://ombi.zakariao.nl/' }} 
 />

);
const torrent = () => (
  
  <WebView source={{ uri: 'https://torrent.zakariao.nl/' }} />
 
 );
 const torrent2 = () => (
  
  <WebView source={{ uri: 'https://torrent-2.zakariao.nl/' }} />
 
 );
const OrdersScreen = () => (
 
  <WebView source={{ uri: 'https://organizer.zakariao.nl' }}/>

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
 const bazarr = () => (
  
  <WebView source={{ uri: 'https://bazarr.zakariao.nl/' }} />
 
 );
 const nzb = () => (
  
  <WebView source={{ uri: 'https://hydra.zakariao.nl/' }} />
 
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
    <BottomNavigationTab title='hydra'  />
    <BottomNavigationTab title='bazarr'  />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props: { navigation: any; state: any; }) => <BottomTabBar {...props} />}>
    <Screen name='Ombi' component={ombi}/>
    <Screen name='organizr' component={OrdersScreen}/>
    <Screen name='torrents' component={torrent}/>
    <Screen name='torrents-2' component={torrent2}/>
    <Screen name='radarr' component={radarr}/>
    <Screen name='sonarr' component={sonarr}/>
    <Screen name='jackett' component={jackett}/>
    <Screen name='hydra' component={nzb}/>
    <Screen name='bazarr' component={bazarr}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);
