import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { WebView } from 'react-native-webview';
import * as Sentry from 'sentry-expo';


const { Navigator, Screen } = createBottomTabNavigator();
 const Ombi = () => (
  
 <WebView source={{ uri: 'https://ombi.zakariao.nl/' }} 
 />

);
const Torrent = () => (
  
  <WebView source={{ uri: 'https://torrent.zakariao.nl/' }} />
 
 );
 const Torrent2 = () => (
  
  <WebView source={{ uri: 'https://torrent-2.zakariao.nl/' }} />
 
 );
const Organizr = () => (
 
  <WebView source={{ uri: 'https://organizer.zakariao.nl' }}/>

);
const Radarr = () => (
  
  <WebView source={{ uri: 'https://radar.zakariao.nl/' }} />
 
 );
 const Sonarr = () => (
  
  <WebView source={{ uri: 'https://sonar.zakariao.nl/' }} />
 
 );
 const Jackett = () => (
  
  <WebView source={{ uri: 'https://jackett.zakariao.nl/' }} />
 
 );
 const Bazarr = () => (
  
  <WebView source={{ uri: 'https://bazarr.zakariao.nl/' }} />
 
 );
 const Nzb = () => (
  
  <WebView source={{ uri: 'https://hydra.zakariao.nl/' }} />
 
 );

 const Test = () => (
  
  <WebView source={{ uri: 'https://hydra.zakariao.nl/' }
Sentry.Native.nativeCrash} />
   
 );
const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Ombi'/>
    <BottomNavigationTab title='Organizr'/>
    <BottomNavigationTab title='Torrent'/>
    <BottomNavigationTab title='Torrent-2'/>
    <BottomNavigationTab title='Radarr'/>
    <BottomNavigationTab title='Sonarr'/>
    <BottomNavigationTab title='Jackett'  />
    <BottomNavigationTab title='Hydra'  />
    <BottomNavigationTab title='Bazarr'  />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props: { navigation: any; state: any; }) => <BottomTabBar {...props} />}>
    <Screen name='Ombi' component={Ombi}/>
    <Screen name='organizr' component={Organizr}/>
    <Screen name='torrents' component={Torrent}/>
    <Screen name='torrents-2' component={Torrent2}/>
    <Screen name='radarr' component={Radarr}/>
    <Screen name='sonarr' component={Sonarr}/>
    <Screen name='jackett' component={Jackett}/>
    <Screen name='hydra' component={Nzb}/>
    <Screen name='bazarr' component={Bazarr}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);
