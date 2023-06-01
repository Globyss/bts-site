const Footer = () => {
	return (
		<div className="bg-blue-400 p-1 shrink">
			<div className="container flex justify-between mx-auto">
				<div>
					<h2 className="text-2xl font-medium">Руководство</h2>
					<div>
						Директор:{' '}
						<span className="font-medium">Медовский Казимир Францевич</span>
					</div>
				</div>
				<div>
					<h2 className="text-2xl font-medium">О предприятии</h2>
					<div>Филиал "Брестские тепловые сети" РУП "Брестэнерго"</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
