import { CarouselCards } from "@/components/widgets/CardCarousel/CarouselCards";
import { Content } from "@/components/Content";
import { Section } from "@/components/Section";
import { Page } from "@/components/Page";
import { Platform } from "react-native";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { ScrollView } from "react-native-virtualized-view";
export default function HomePage() {
	return (
		<ScrollView
			className="p-2 m-2 border-2"
			contentContainerStyle={{ flexGrow: 1 }}
		>
			<Page className="flex-1">
				{Platform.OS === "web" && <Banner />}

				<Section title="Recently Added!!">
					<CarouselCards />
				</Section>

				<Section title="Popular Services">
					<Content />
				</Section>
				<Footer />
			</Page>
		</ScrollView>
	);
}
