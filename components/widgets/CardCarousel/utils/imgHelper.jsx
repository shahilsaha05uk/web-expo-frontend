export function GetRandomImage() {
	const id = Math.floor(Math.random() * 20);
	return `https://picsum.photos/id/${id}/200/300`;
}
