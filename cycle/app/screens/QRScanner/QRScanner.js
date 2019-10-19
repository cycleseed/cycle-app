import React from 'react';
import { View, Text } from 'react-native';

import { RNCamera } from 'react-native-camera';

class QRScanner extends React.Component {

  state = {
    barcodes: [],
  }

  barcodeRecognized = ({ barcodes }) => {
    this.setState({ barcodes });
    return setTimeout(() => {
      this.setState({ barcodes: []});
    }, 1000)
  } 

  renderBarcode = ({ bounds, data }) => {
    console.log('data', data);
    console.log('bounds', bounds);
    return (
      <React.Fragment key={data + bounds.origin.x}>
        <View
          style={{
            borderWidth: 2,
            borderRadius: 5,
            position: 'absolute',
            borderColor: '#F00',
            justifyContent: 'center',
            padding: 10,
            height: 150,
            width: 150,
            left: bounds.origin.x,
            top: bounds.origin.y,
          }}
        >
        </View>
      </React.Fragment>
    );
  }


  renderBarcodes = () => (
    <View>
      {this.state.barcodes.map(this.renderBarcode)}
    </View>
  );

  render() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{
          flex: 1,
          width: '100%',
        }}
        onGoogleVisionBarcodesDetected={this.barcodeRecognized}
      >
      {this.renderBarcodes()}
      </RNCamera>
    );
  }
}

export default QRScanner;