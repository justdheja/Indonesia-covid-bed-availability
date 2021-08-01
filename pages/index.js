import { useEffect, useState } from 'react';

export const getStaticProps = async () => {
	const urlProvince = 'https://rs-bed-covid-api.vercel.app/api/get-provinces';

	let resProvince = await (await fetch(urlProvince)).json();

	return {
		props: {
			dataProvince: resProvince,
		},
	};
};

export default function Home({ dataProvince }) {
	const provinces = dataProvince.provinces;
	const [selectedProvince, setSelectedProvince] = useState(undefined);
	const [selectedCity, setSelectedCity] = useState(undefined)
	const [cityList, setCityList] = useState()
	const [loadingCities, setLoadingCities] = useState(false)

	const getCityList = async (province) => {
		setLoadingCities(true)
		const url =
			'https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=' + province;
		let res = await (await fetch(url)).json();
		setCityList(res.cities)
		setLoadingCities(false)
	}

	useEffect(() => {
		if(selectedProvince) {
			getCityList(selectedProvince)
		}
	}, [selectedProvince])
	return (
		<div>
			<h1 className="text-center text-2xl font-bold mb-2">
				Indonesia Covid-19 Bed Availibility
			</h1>

			<select
				name="province"
				id="province"
				className="border-2 border-black w-full rounded-lg bg-gray-100 p-1 my-2"
				onChange={(e) => setSelectedProvince(e.target.value)}
				value={selectedProvince}
			>
				{selectedProvince == undefined && (
					<option value={undefined}>Pilih Provinsi</option>
				)}
				{provinces.map((province, index) => (
					<option key={index} value={province.id}>
						{province.name}
					</option>
				))}
			</select>

			{selectedProvince &&
				(!loadingCities ? (
					<select
						name="province"
						id="province"
						className="border-2 border-black w-full rounded-lg bg-gray-100 p-1 my-2"
						onChange={(e) => setSelectedCity(e.target.value)}
						value={selectedCity}
					>
						{selectedCity == undefined && (
							<option value={undefined}>Pilih Kabupaten/Kota</option>
						)}
						{cityList &&
							cityList.map((city, index) => (
								<option key={index} value={city.id}>
									{city.name}
								</option>
							))}
					</select>
				) : (
					<div className="h-4 bg-gray-200 rounded animate-pulse my-2" />
				))}
		</div>
	);
}
