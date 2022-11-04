import { useRouter } from "next/router";

function Video() {
  const router = useRouter();
  console.log(router.query.videoId);
  return <div>Enter</div>;
}

export default Video;
