import { Tabs } from 'heroui-native';
import { useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TestScreen() {
    const [activeTab, setActiveTab] = useState("settings")
    return (
        <SafeAreaView edges={['top']}>
        <Tabs value={activeTab} onValueChange={setActiveTab} variant="pill">
            <Tabs.List>
                <Tabs.Indicator />
                <Tabs.Trigger value="settings">
                    <Tabs.Label>Settings</Tabs.Label>
                </Tabs.Trigger>
                <Tabs.Trigger value="profile">
                    <Tabs.Label>Profile</Tabs.Label>
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="settings">
                <Text>settings</Text>
            </Tabs.Content>
            <Tabs.Content value="profile"><Text>profile</Text></Tabs.Content>
        </Tabs></SafeAreaView>
    );
}