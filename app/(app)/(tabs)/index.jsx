import { Content } from "@/components/Content";
import { remapProps } from "react-native-css-interop";
import HomePage from "@/screens/Home";

remapProps(Content, {
	className: "style",
	contentContainerClassName: "contentContainerStyle",
});

export default function App() {
	return <HomePage />;
}
