import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { WebView } from 'react-native-webview';
export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='organizer' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <WebView source={{ uri: 'https://organizer.zakariao.nl/' }} />
      <navigateDetails/>
      </Layout>
    </SafeAreaView>
  );
};