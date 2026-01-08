import Feather from '@expo/vector-icons/Feather';
import { Button, useToast } from "heroui-native";
import { View } from "react-native";

export default function TabTwoScreen() {
  const { toast } = useToast();

  const showToast = () => toast.show({
    variant: 'success',
    label: 'You have upgraded your plan',
    description: 'You can continue using HeroUI Chat',
    icon: <Feather name="check-circle" size={24} color="black" />,
    actionLabel: 'Close',
    onActionPress: ({ hide }) => hide(),
  });
  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Button onPress={() => showToast()}>Get Started</Button>
    </View>
  );
}
