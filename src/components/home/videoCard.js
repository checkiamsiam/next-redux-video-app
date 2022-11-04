import Image from "next/image";
import Link from "next/link";

function VideoCard({ video }) {
  return (
    <>
      <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
        <div className="w-full flex flex-col">
          <div className="relative">
            <Link href={`video/${video._id}`}>
              <Image width="350" height="350" className="sm:w-auto sm:h-auto w-full" src={video?.thumbnail} alt="Some video title" />
            </Link>

            <p className="absolute right-2  bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">{video?.duration}</p>
          </div>

          <div className="flex flex-row mt-2 gap-2">
            <Link href="/" className="shrink-0">
              <Image width="24" height="24" src={video?.avatar} className="rounded-full " alt="Learn with Sumit" />
            </Link>
            <div className="flex flex-col">
              <Link href={`video/${video._id}`}>
                <p className="text-slate-900 text-sm font-semibold">{video?.title}</p>
              </Link>
              <Link className="text-gray-400 text-xs mt-2 hover:text-gray-600" href="/">
                {video?.author}
              </Link>
              <p className="text-gray-400 text-xs mt-1">
                {video?.views} views . {video?.date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
