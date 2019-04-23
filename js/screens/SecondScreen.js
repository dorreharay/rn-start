import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

class SecondScreen extends Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  }

  render() {
    const { navigation } = this.props;

    return (
      <MapView
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      >
        {/* {this.state.markers.map(marker => ( */}
          <Marker
            coordinate={this.state.region}
            title={'aaaa'}
            description={'aaa'}
          />
        {/* ))} */}
      </MapView>
    );
  }
}

export default SecondScreen;