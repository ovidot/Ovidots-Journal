import { useRouter } from "next/router";
const blogDetail = () => {
  const router = useRouter();
  const blogdetail = router.query.blogdetailid;
  return <div>blogdetail of id {blogdetail} </div>;
};

export default blogDetail;
