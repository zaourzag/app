import React, { Component } from 'react';
import { View, ActivityIndicator, Linking, WebView } from 'react-native';
import { StackActions } from 'react-navigation';
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
    const { navigate, state, dispatch } = this.props.navigation;
    const { url }  = state.params;
    return(
      <WebView
        source={{uri: url }}
        renderLoading={this.renderLoadingView}
        startInLoadingState={true}
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
      />
    );
  }
}
export default WebViewScreen;