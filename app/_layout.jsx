import { Stack } from "expo-router";
import "@/global.css";
import { useState } from "react";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useOrientationHandler } from "../hooks/useOrientationHandler";
import * as Device from "expo-device";

export default function RootLayout() {
	if (Device.deviceType === Device.DeviceType.TABLET) {
		useOrientationHandler();
	}

	const [colorMode, setColorMode] = useState("light");
	return (
		<GluestackUIProvider mode={colorMode}>
			<Stack>
				<Stack.Screen name="index" />
			</Stack>
		</GluestackUIProvider>
	);
}
