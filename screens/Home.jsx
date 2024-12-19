import { CarouselCards } from "@/components/widgets/CardCarousel/CarouselCards";
import { Content } from "@/components/Content";
import { Section } from "@/components/Section";
import { Page } from "@/components/Page";

export default function HomePage() {
	return (
		<Page>
			<Section title="Recently Added!!">
				<CarouselCards />
			</Section>

			<Section title="Popular Services">
				<Content />
			</Section>
		</Page>
	);
}
