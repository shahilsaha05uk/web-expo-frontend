import { Content } from "@/components/Content";
import { remapProps } from "react-native-css-interop";
import { Footer } from "@/components/Footer";
import HomePage from "@/screens/Home";
import { Page, ScrollPage } from "@/components/Page";

remapProps(Content, {
	className: "style",
	contentContainerClassName: "contentContainerStyle",
});

export default function App() {
	return <HomePage />;
}
