import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as React from 'react';
import { ApplicationProvider, IconRegistry, Layout,Icon, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { BottomNavigation } from 'react-native-paper';
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const heart = (props: JSX.IntrinsicAttributes) => (
    <Icon name='heart-outline' {...props} />
  );
  
  const bell = (props: JSX.IntrinsicAttributes) => (
    <Icon name='bell-outline' {...props} />
  );
  const OrganizerRoute = () =>  <WebView source={{ uri: 'https://organizer.zakariao.nl/' }} />;

  const OmbiRoute = () => <WebView source={{ uri: 'https://ombi.zakariao.nl/' }} />;
  
  const MediaRoute = () => <WebView source={{ uri: 'https://media.zakariao.nl/' }} />;

  
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'organizer', title: 'Organizr', focusedIcon: bell, unfocusedIcon: heart},
      { key: 'ombi', title: 'Ombi', focusedIcon: bell },
      { key: 'media', title: 'media (jellyfin)', focusedIcon: bell },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      organizer: OrganizerRoute,
      ombi: OmbiRoute,
      media: MediaRoute,
    });
    return (
     <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    );
  }



