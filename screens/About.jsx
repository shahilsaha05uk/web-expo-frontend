import { aboutTxt } from "@/test/AboutTxt";
import { TextContentBlock } from "@/components/Containers";
import { Heading2 } from "@/components/widgets/Headings";
import { Page } from "@/components/Page";

export default function AboutPage() {
	return (
		<Page classes="bg-background-800">
			<TextContentBlock
				content={aboutTxt}
				textStyles="color-white"
				blockStyles="p-5 mt-0 mb-0"
			>
				<Heading2 value="About Us" textStyles="color-white" />
			</TextContentBlock>
		</Page>
	);
}
