import React, { Component } from 'react';
<<<<<<< HEAD
import { View, ActivityIndicator, Linking, WebView } from 'react-native';
import { StackActions } from 'react-navigation';
=======
import { View, ActivityIndicator,  } from 'react-native';
>>>>>>> ce0319b527e317a0fc235b44b666f9053c2d5b87
class WebViewScreen extends Component {
renderLoadingView() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator
          size='large'
        />
      </View>
    );
  }
  render() {
<<<<<<< HEAD
    const { navigate, state, dispatch } = this.props.navigation;
    const { url }  = state.params;
=======
    const { url }  = this.props.navigation.state.params;
>>>>>>> ce0319b527e317a0fc235b44b666f9053c2d5b87
    return(
      <WebView
        source={{uri: url }}
        renderLoading={this.renderLoadingView}
        startInLoadingState={true}
<<<<<<< HEAD
        ref={(ref) => { this.webview = ref; }}
        onNavigationStateChange={(event) => {
          if (event.url !== url) {
            this.webview.stopLoading();
            if (event.url.includes('https://organizer.zakariao.nl')) {
              dispatch(
                StackActions.push({
                  routeName: 'Internal',
                  params: { url: event.url },
                })
              )
            } else if (event.url.includes('http://local/')) {
              const pageLink = event.url.substring(event.url.lastIndexOf('/')+1, event.url.length);
              navigate(pageLink)
              this.webview.reload()
            } else {
              Linking.openURL(event.url);
            }
          }
        }}
=======
>>>>>>> ce0319b527e317a0fc235b44b666f9053c2d5b87
      />
    );
  }
}
<<<<<<< HEAD
export default WebViewScreen;
=======
export default WebViewScreen;
>>>>>>> ce0319b527e317a0fc235b44b666f9053c2d5b87
