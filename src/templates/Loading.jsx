import React from "react";
import loader from "../assets/loader.gif";

const Loading = () => {
	return (
		<div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-[#1f1e24]">
			<img src="/loader.gif" alt="Loading..." className="h-40 object-contain" />
		</div>
	);
};

export default Loading;