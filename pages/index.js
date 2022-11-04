import VideoCard from "../src/components/home/videoCard";

export default function Home({ videos }) {
  console.log(videos);
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">react</div>

          <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">redux</div>
        </div>
      </section>

      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {videos.map((video) => (
              <>
                <VideoCard key={video._id} video={video} />
              </>
            ))}
            {/* <div className="col-span-12">some error happened</div>  */}
          </div>
        </section>
      </section>

      <section className="pt-12">
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
          <div className="bg-blue-600 text-white px-4 py-1 rounded-full">1</div>
          <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">2</div>
          <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">3</div>
          <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">4</div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/video");
  const videos = await res.json();
  return { props: { videos: videos.data } };
}
