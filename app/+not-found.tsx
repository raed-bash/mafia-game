import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      {/* <ThemedView style={styles.container}> */}
      This screen doesn't exist.
      <Link href="/" style={styles.link}>
        Go to home screen!
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
