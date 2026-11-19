import React from "react";
import loader from "../assets/loader.gif";

const Loading = () => {
	return (
		<div className="fixed inset-0 z-[60] flex h-screen w-screen items-center justify-center bg-black/95 backdrop-blur-sm">
			<img src={loader} alt="Loading..." className="h-32 w-32 object-contain md:h-40 md:w-40" />
		</div>
	);
};

export default Loading;