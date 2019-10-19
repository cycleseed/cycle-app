import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { RNCamera } from 'react-native-camera';
import colors from '../../config/colors';

class QRScanner extends React.Component {

  state = {
    barcodes: [],
    userDetected: '',
    cycleUser: null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.userDetected !== prevState.userDetected) {
      console.log('jalalo de firebase mano');
    }
  }

  barcodeRecognized = ({ barcodes }) => {
    const scan = barcodes[0];
    const equals = scan.data === this.state.userDetected;
    if (equals) {
      console.log('ES IGUAL')
    } else {
      this.setState({ barcodes, userDetected: scan.data });
    }
  } 

  renderBarcode = ({ bounds, data }) => {
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
    console.log('STATE', this.state);
    return (
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.cameraSection}
            onGoogleVisionBarcodesDetected={this.barcodeRecognized}
          >
          {this.renderBarcodes()}
          <View style={styles.test}>
            { this.state.cycleUser ? (
              <Text>Hoola bro</Text>
              ) : null
            }
          </View>
          </RNCamera>
    );
  }
}

const styles = StyleSheet.create({
  userSection: {
    flex: 1,
  },
  cameraSection: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    borderColor: colors.BLACK

  },
  test: {
    height: 300,
    backgroundColor: colors.WHITE,
  }
})

export default QRScanner;