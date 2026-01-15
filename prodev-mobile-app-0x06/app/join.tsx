import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "@/styles/_join";
import { useRouter } from "expo-router";

export default function Join() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Let’s get you started</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput style={styles.formControl} />
        </View>

        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={styles.formControl} />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput style={styles.formControl} secureTextEntry />
        </View>
      </View>

      <Pressable style={styles.primaryButton}>
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Pressable onPress={() => router.push("/signin")}>
          <Text style={styles.signupSubTitleText}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
}
