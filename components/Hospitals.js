import { useEffect, useState } from 'react';
import HospitalCard from './HospitalCard';

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
				hospitals.length ? (
					<div className="px-1">
						{hospitals.map((hospital, index) => (
							<HospitalCard hospital={hospital} key={index} />
						))}
					</div>
				) : (
					<p className="text-center">mohon maaf data tidak ditemukan</p>
				)
			) : (
				<p className="text-center">loading....</p>
			)}
		</>
	);
}

export default HospitalList;