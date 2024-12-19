import { Platform, ScrollView } from "react-native";
import { Box } from "../../ui/box";
import { HStack } from "@/components/ui/hstack";
import { useRef, useState } from "react";
import { NavLeft, NavRight } from "./Nav";
import { CreateImageBlockArray } from "./utils/ImageHandler";

const data = CreateImageBlockArray(10);

export function CarouselCards() {
	const scrollRef = useRef(null);
	const scrollAmount = 400;
	const [isContentAtRight, SetIsContentAtRight] = useState(true);
	const [scrollPosition, SetScrollPosition] = useState(0);

	const isCloseToRight = (event) => {
		const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
		const threshold = 5; // Tolerance for precision

		// Check if the scroll position is close to the end
		const isScrollAtEnd =
			contentOffset.x + layoutMeasurement.width >=
			contentSize.width - threshold;
		return isScrollAtEnd;
	};

	const handleNavLeft = () => {
		const newScrollPos = scrollPosition - scrollAmount;
		if (scrollRef.current) {
			scrollRef.current.scrollTo({ x: newScrollPos, animated: true });
			SetScrollPosition(newScrollPos);
		}
	};
	const handleNavRight = () => {
		const newScrollPos = scrollPosition + scrollAmount;
		if (scrollRef.current) {
			scrollRef.current.scrollTo({ x: newScrollPos, animated: true });
			SetScrollPosition(newScrollPos);
		}
	};

	const OnItemScrolled = (event) => {
		if (isCloseToRight(event)) {
			SetIsContentAtRight(false);
		} else {
			SetIsContentAtRight(true);
		}
		SetScrollPosition(event.nativeEvent.contentOffset.x);
	};

	const checkContentAtLeft = () => {
		if (scrollPosition > 0) {
			return true;
		}
		return false;
	};

	return (
		<Box className="w-full p-1">
			<ScrollView
				horizontal={true}
				style={{ width: "100%" }}
				persistentScrollbar={false}
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={50}
				onScroll={OnItemScrolled}
				ref={scrollRef}
			>
				<HStack space="md" className="w-full px-4 md:px-0">
					{data}
				</HStack>
			</ScrollView>
			{Platform.select({
				web: (
					<>
						<NavLeft disabled={!checkContentAtLeft()} onPress={handleNavLeft} />
						<NavRight disabled={!isContentAtRight} onPress={handleNavRight} />
					</>
				),
				default: null,
			})}
		</Box>
	);
}
