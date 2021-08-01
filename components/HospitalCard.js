import Link from 'next/link'

const HospitalCard = ({ hospital }) => {
	return (
		<div className="rounded bg-white text-black shadow-lg my-2 p-2 ">
			<h3 className="font-bold">{hospital.name}</h3>
			<p className="">Kamar Tersedia: {hospital.bed_availability}</p>
			<p className="">Antrian: {hospital.queue}</p>
			<p className="">Alamat: {hospital.address}</p>
			<p className="">Telepon: {hospital.phone ? hospital.phone : '-'}</p>
			<p className=" mt-2 text-sm text-gray-500">{hospital.info}</p>
			{hospital.phone && (
				<div className="flex mt-2 space-x-2 w-full">
					<Link href={`/hospital/${hospital.id}`}>
						<a className="rounded text-white p-2 bg-blue-500 flex-grow text-center font-semibold">
							Detail
						</a>
					</Link>
					<a
						href={`tel:${hospital.phone}`}
						className="rounded p-2 text-white bg-green-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
					</a>
				</div>
			)}
		</div>
	);
};

export default HospitalCard;
