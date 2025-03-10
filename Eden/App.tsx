import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RecordButton from "$/components/common/buttons/RecordButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app2!</Text>
      <RecordButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
