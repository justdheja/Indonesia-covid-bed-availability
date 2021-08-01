import { useState } from 'react';

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
  const provinces = dataProvince.provinces
  const [selectedProvince, setSelectedProvince] = useState('')
	return (
		<>
			<h1 className="text-center text-2xl font-bold">
				Indonesia Covid-19 Bed Availibility
			</h1>
			<select name="province" id="province" className="border-2 border-black">
				{provinces.map((province, index) => (
					<option key={index} value={province.id}>
						{province.name}
					</option>
				))}
			</select>
		</>
	);
}
