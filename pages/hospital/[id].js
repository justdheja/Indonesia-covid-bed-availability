import { useRouter } from 'next/router';

const HospitalDetail = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div></div>
  );
}

export default HospitalDetail;