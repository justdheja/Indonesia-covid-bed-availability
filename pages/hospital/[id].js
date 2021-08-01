import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const HospitalDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getHospitalDetail(id)
  }, [id])

  const getHospitalDetail = async (id) => {
    setLoading(true)
    const url = `https://rs-bed-covid-api.vercel.app/api/get-bed-detail?hospitalid=${id}&type=1`;
    let res = await (await fetch(url)).json()
    setData(res.data)
    setLoading(false)
    console.log(res.data)
  }

  return (
    <>
      {!loading ? (
        <div className=" pb-12">
          <div className="text-center">
            <h1 className="text-lg font-semibold">{data.name}</h1>
            <p className="text-sm">
              📞 {data.phone} <br />
              📍 {data.address}
            </p>
          </div>
          <div className="font-semibold my-2">Fasilitas</div>
          {data.bedDetail && (data.bedDetail.map((bed, index) => (
            <div key={index} className="rounded bg-white shadow-lg my-2 p-3">
              <h3 className="font-medium mb-2">{bed.stats.title}</h3>
              <div className="flex w-full text-sm justify-between">
                <p>Jumlah:{bed.stats.bed_available}</p>
                <p>Tersedia:{bed.stats.bed_empty}</p>
                <p>Antrian:{bed.stats.queue}</p>
              </div>
            </div>
          )))}

          <div className="fixed bottom-0 pb-8 flex justify-around space-x-4">
            <Link href="/">
              <a className=" rounded-full p-3 text-black bg-gray-100 shadow-lg">
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
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </Link>
            <a
              href={`tel:${data.phone}`}
              className=" rounded-full p-3 text-white bg-green-500 shadow-lg"
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
        </div>
      ) : (
        <p className="text-center">loading....</p>
      )}
    </>
	);
}

export default HospitalDetail;