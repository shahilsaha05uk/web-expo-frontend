import { CarouselCards } from "@/components/widgets/CardCarousel/CarouselCards";
import { Content } from "@/components/Content";
import { Platform, View } from "react-native";
import { Banner } from "@/components/Banner";
import { Section } from "@/components/Section";

export default function HomePage() {
	return (
		<View>
			{Platform.OS === "web" && <Banner />}
			<View className="flex-1 p-2">
				<Section title="Recently Added!!">
					<CarouselCards />
				</Section>

				<Section title="Popular Services">
					<Content />
				</Section>
			</View>
		</View>
	);
}
