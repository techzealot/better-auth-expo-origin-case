import { View, Button, Alert } from "react-native";
import { authClient } from "@/lib/auth-client";

export default function HomeScreen() {
  const handleLogin = async () => {
    try {
      const result = await authClient.signIn.email({
        email: "test@example.com",
        password: "test123456",
      });
      
      if (result.error) {
        Alert.alert("fail", result.error.message);
      } else {
        Alert.alert("success", "login success");
      }
    } catch (error) {
      Alert.alert("error", String(error));
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="login" onPress={handleLogin} />
    </View>
  );
}
