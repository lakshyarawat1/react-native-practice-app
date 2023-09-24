import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image , TextInput} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is my first app.</Text>
      <Text>I am using expo and react native.</Text>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2023/08/19/17/36/bird-8200917_1280.jpg",
        }}
        className="w-32 h-32"
      />
      <TextInput
        style={{
          height: 40,
          width: "80%",
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
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
