import Link from "next/link";

const RelatedVideoCard = ({ video }) => {
  return (
    <div>
      <Link href={`/video/${video._id}`} replace={true}>
        <div class="w-full flex flex-row gap-2 mb-4">
          <div class="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
            <a href="video.html">
              <img src={video?.thumbnail} />
            </a>
            <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">{video?.duration}</p>
          </div>

          <div class="flex flex-col w-full">
            <a href="#">
              <p class="text-slate-900 text-sm font-semibold">{video?.title}</p>
            </a>
            <a class="text-gray-400 text-xs mt-2 hover:text-gray-600" href="#">
              {video?.author}
            </a>
            <p class="text-gray-400 text-xs mt-1">100K views . {video?.date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RelatedVideoCard;
