import { CarouselCards } from "@/components/widgets/CardCarousel/CarouselCards";
import { Content } from "@/components/Content";
import { Section } from "@/components/Section";
import { Page } from "@/components/Page";
import { Platform, View } from "react-native";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";

export default function HomePage() {
	return (
		<Page>
			{Platform.OS === "web" && <Banner />}
			<Section title="Recently Added!!">
				<CarouselCards />
			</Section>

			{/* Popular services */}
			<Section title="Popular Services">
				<Content />
			</Section>

			{/* Footer */}
			<Footer />
		</Page>
	);
}
