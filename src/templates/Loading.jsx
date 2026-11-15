
const Loading = () => (
	<div
		role="status"
		aria-label="Loading"
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			minHeight: "120px",
		}}
	>
		<div
			style={{
				width: "40px",
				height: "40px",
				border: "4px solid #e5e7eb",
				borderTopColor: "#2563eb",
				borderRadius: "50%",
				animation: "loading-spin 0.8s linear infinite",
			}}
		/>
		<style>{`
			@keyframes loading-spin {
				to { transform: rotate(360deg); }
			}
		`}</style>
	</div>
);

export default Loading;
