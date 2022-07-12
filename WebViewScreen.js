import React, { Component } from 'react';
import { WebView, BackHandler } from 'react-native';

export default class WebViewMoviezSpace extends Component {
  constructor(props) {
    super(props);
    this.WEBVIEW_REF = React.createRef();
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = ()=>{
    this.WEBVIEW_REF.current.goBack();
    return true;
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

  render(){
    return (
      <WebView
        source={{ uri: "https://ombi.zakariao.nl" }}
        ref={this.WEBVIEW_REF}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
      />
    )
  }
}