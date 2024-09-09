import React from "react";

import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="index" options={{ gestureEnabled: false }} />
            <Stack.Screen name="sign-in" options={{ gestureEnabled: false }} />
            <Stack.Screen name="sign-up" options={{ gestureEnabled: false }} />
            <Stack.Screen name="sign-up-2" options={{ gestureEnabled: false }} />
        </Stack>
    );
}

export default Layout;