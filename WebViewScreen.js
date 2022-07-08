import React, { Component } from 'react';
import { View, ActivityIndicator,  } from 'react-native';
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
    const { url }  = this.props.navigation.state.params;
    return(
      <WebView
        source={{uri: url }}
        renderLoading={this.renderLoadingView}
        startInLoadingState={true}
      />
    );
  }
}
export default WebViewScreen;
