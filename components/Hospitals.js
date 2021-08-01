import { useEffect, useState } from 'react';

const HospitalList = ({ provinceId, cityId }) => {
  const [loading, setLoading] = useState(false)
  const [hospitals, setHospitals] = useState([])

  useEffect(() => {
    getHospitalList(provinceId, cityId)
  }, [provinceId, cityId])

  const getHospitalList = async (provinceId, cityId) => {
    setLoading(true)
    const url = `https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=${provinceId}&cityid=${cityId}&type=1`;
    let res = await (await fetch(url)).json()
    setLoading(false)
    setHospitals(res.hospitals)
  }
  return (
		<>
			{!loading ? (
				<div className="px-1">
					{hospitals.map((hospital, index) => (
						<div
							className="rounded bg-white text-black shadow-lg my-2 p-2 "
							key={index}
						>
							<h3 className="font-bold">{hospital.name}</h3>
							<p className="">Kamar Tersedia: {hospital.bed_availability}</p>
							<p className="">Antrian: {hospital.queue}</p>
							<p className="">Alamat: {hospital.address}</p>
							<p className="">Telepon: {hospital.phone ? hospital.phone : '-'}</p>
							<p className=" mt-2 text-sm text-gray-500">{hospital.info}</p>
						</div>
					))}
				</div>
			) : (
				<p>loading...</p>
			)}
		</>
	);
}

export default HospitalList;