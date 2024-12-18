import { Box } from "@/components/ui/box";
import { Grid, GridItem } from "@/components/ui/grid";
import { CarouselCards } from "@/components/widgets/CardCarousel/CarouselCards";
import { ScrollView, Text, View } from "react-native";

export default function App() {
	return (
		<Box className="p-2 m-1 h-full">
			<ScrollView>
				<CarouselCards />

				<Grid className="gap-2">
					<GridItem
						className="bg-background-800 p-6 rounded-md"
						_extra={{
							className: "col-span-4",
						}}
					/>
					<GridItem
						className="bg-background-800 p-6 rounded-md"
						_extra={{
							className: "col-span-4",
						}}
					/>
					<GridItem
						className="bg-background-800 p-6 rounded-md"
						_extra={{
							className: "col-span-4",
						}}
					/>
					<GridItem
						className="bg-background-800 p-6 rounded-md"
						_extra={{
							className: "col-span-4",
						}}
					/>
				</Grid>
			</ScrollView>
		</Box>
	);
}
