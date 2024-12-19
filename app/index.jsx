import { Content } from "@/components/Content";
import { remapProps } from "react-native-css-interop";
import { ScrollView } from "react-native-virtualized-view";
import { Footer } from "@/components/Footer";
import HomePage from "@/screens/Home";
import AboutPage from "@/screens/About";

remapProps(Content, {
	className: "style",
	contentContainerClassName: "contentContainerStyle",
});

export default function App() {
	return (
		<ScrollView className="p-3">
			{/* <HomePage /> */}
			<AboutPage />
			<Footer />
		</ScrollView>
	);
}
