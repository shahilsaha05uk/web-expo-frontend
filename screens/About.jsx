import { Heading } from "@/components/ui/heading";
import { AboutTxt } from "@/test/AboutTxt";
import { ScrollContentView } from "@/components/Page";

export default function AboutPage() {
	return (
		<ScrollContentView className="h-full">
			<Heading size="3xl" className="mb-5">
				About Us
			</Heading>
			<AboutTxt />
		</ScrollContentView>
	);
}
