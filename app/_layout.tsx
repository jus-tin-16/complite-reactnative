import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="index" options={{ title: 'Home'}} />
      <Stack.Screen name="studDashboard" options={{ title: 'Dashboard'}} />
    </Stack> 
  )
}
