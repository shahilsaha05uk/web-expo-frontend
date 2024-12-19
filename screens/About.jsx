import { View } from "react-native";
import { Heading } from "@/components/ui/heading";

import { Section } from "@/components/Section";
import { Box } from "@/components/ui/box";

export default function AboutPage() {
	return (
		<Box className="p-2 m-3">
			<Heading size="2xl" className="bg-background-0">
				About Us
			</Heading>
			<Heading size="2xl" className="bg-background-300">
				About Us
			</Heading>
			<Heading size="2xl" className="bg-background-100">
				About Us
			</Heading>
			<Heading size="3xl">About Us</Heading>
		</Box>
	);
}
