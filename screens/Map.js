import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

// Lima, PE
const initialRegion = {
  latitude: -12.05798,
  longitude: -77.037132,
  longitudeDelta: 0.04,
  latitudeDelta: 0.02,
};

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion} />
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
});
