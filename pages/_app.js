import '../styles/globals.css';
import React from 'react';
import LoadingScreen from './components/loadingScreen/loadingScreen';
import firebase from '../firebase/firebase';
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  componentDidMount() { };
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />
  };
};
export default MyApp