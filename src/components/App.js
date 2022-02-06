// create your App component here
import React, { useState, useEffect } from "react";

function App() {
	const [dogPic, setDogPic] = useState(false);

	useEffect(
		() =>
			fetch("https://dog.ceo/api/breeds/image/random")
				.then((res) => res.json())
				.then((data) => {
                    setDogPic(data.message)
                }),
		[]
	);

	if (!dogPic) {
		return <p>Loading...</p>;
	}
	return (
		<div>
			<img src={dogPic} alt="A Random Dog" />
		</div>
	);
}

export default App;
