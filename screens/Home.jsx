import { CarouselCards } from "@/components/widgets/CardCarousel/CarouselCards";
import { Content } from "@/components/Content";
import { Section } from "@/components/Section";
import { Page } from "@/components/Page";
import { Platform } from "react-native";
import { Banner } from "@/components/Banner";
export default function HomePage() {
	return (
		<>
			{Platform.OS === "web" && <Banner />}

			<Page>
				<Section title="Recently Added!!">
					<CarouselCards />
				</Section>

				<Section title="Popular Services">
					<Content />
				</Section>
			</Page>
		</>
	);
}
