import { Stack } from "expo-router";
import "@/global.css";
import { useState } from "react";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
	const [colorMode, setColorMode] = useState("light");
	return (
		<GluestackUIProvider mode={colorMode}>
			<Stack>
				<Stack.Screen name="index" />
			</Stack>
		</GluestackUIProvider>
	);
}
