import { View, Text, TextInput, Pressable, Image } from "react-native";
import { styles } from "@/styles/_join";
import { useRouter } from "expo-router";

export default function signin() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subText}>Welcome back</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={styles.formControl} />
        </View>

       <View>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput style={styles.formControl} secureTextEntry />
        </View>

        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </View>

      <Pressable style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <Pressable style={styles.secondaryButton}>
                    <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton}>
                  <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </Pressable>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>No account? </Text>
        <Pressable onPress={() => router.push("/join")}>
          <Text style={styles.signupSubTitleText}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}
