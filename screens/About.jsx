import { aboutTxt } from "@/test/AboutTxt";
import { ScrollContentBlock, TextContentBlock } from "@/components/Containers";
import { Heading2 } from "@/components/widgets/Headings";
import { Page } from "@/components/Page";

export default function AboutPage() {
	return (
		<Page classes="border-2 m-1">
			<ScrollContentBlock classes="border-2 bg-background-800">
				<TextContentBlock
					content={aboutTxt}
					textStyles="color-white"
					blockStyles="p-5"
				>
					<Heading2 value="About Us" textStyles="color-white" />
				</TextContentBlock>
			</ScrollContentBlock>
		</Page>
	);
}
