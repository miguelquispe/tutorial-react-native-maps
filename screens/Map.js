import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

// Lima, PE
const initialRegion = {
  latitude: -12.05798,
  longitude: -77.037132,
  longitudeDelta: 0.03,
  latitudeDelta: 0.025,
};

export default function MapScreen() {
  const [currentRegion, setCurrentRegion] = useState(initialRegion);

  const handleRegionChangeComplete = (region) => {
    setCurrentRegion(region);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onRegionChangeComplete={handleRegionChangeComplete}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={currentRegion}
          pinColor="purple"
          title="Lima, Perú"
          image={require("../assets/shop-store-icon-2.png")}
        />
      </MapView>
      <View style={styles.info}>
        <Text>Región actual:</Text>
        <Text>Latitude: {currentRegion.latitude}</Text>
        <Text>Longitude: {currentRegion.longitude}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  map: {
    flex: 1,
  },
  info: {
    padding: 20,
    backgroundColor: "white",
    position: "absolute",
    bottom: 20,
    left: "5%",
    width: "90%",
  },
});
