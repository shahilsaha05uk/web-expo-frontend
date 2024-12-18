import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";

export const useOrientationHandler = () => {
	useEffect(() => {
		UpdateOrientation();
		const subscription =
			ScreenOrientation.addOrientationChangeListener(OnOrientationChange);

		return () => {
			ScreenOrientation.removeOrientationChangeListener(subscription);
		};
	}, []);
};

const UpdateOrientation = async () => {
	const currentOrientation = await GetCurrentOrientation();
	console.log("Current orientation:", currentOrientation);
	await ChangeOrientation(currentOrientation);
};

const OnOrientationChange = async (event) => {
	const { orientationInfo } = event;
	const currentOrientation = await GetCurrentOrientation();

	if (!isSameOrientation(currentOrientation, orientationInfo.orientation)) {
		currentOrientation = orientationInfo.orientation;
		await ChangeOrientation(currentOrientation);
	}
};

const isSameOrientation = (orientation1, orientation2) => {
	return orientation1 === orientation2;
};

const GetCurrentOrientation = async () => {
	return await ScreenOrientation.getOrientationAsync();
};

const ChangeOrientation = async (orientation) => {
	await ScreenOrientation.lockAsync(orientation);
};
