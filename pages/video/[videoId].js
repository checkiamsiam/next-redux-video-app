import Image from "next/image";
import like from "../../src/assets/like.svg";
import unlike from "../../src/assets/unlike.svg";
import RelatedVideoCard from "../../src/components/video/relatedVideoCard";

function Video({ video }) {
  const { title, description, author, avatar, date, duration, views, link, thumbnail, tags, likes, unlikes } = video;
  return (
    <section class="pt-6 pb-20">
      <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div class="grid grid-cols-3 gap-2 lg:gap-8">
          <div class="col-span-full w-full space-y-8 lg:col-span-2">
            <iframe
              width="100%"
              class="aspect-video"
              src={link}
              title="Some video title"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <div>
              <h1 class="text-lg font-semibold tracking-tight text-slate-800">{title}</h1>
              <div class="pb-4 flex items-center space-between border-b">
                <h2 class="text-sm leading-[1.7142857] text-slate-600 w-full">Uploaded on {date}</h2>

                <div class="flex gap-10 w-48">
                  <div class="flex gap-1">
                    <div class="shrink-0">
                      <Image width="50" height="50" class="w-5 block" src={like} alt="Like" />
                    </div>
                    <div class="text-sm leading-[1.7142857] text-slate-600">{likes}</div>
                  </div>
                  <div class="flex gap-1">
                    <div class="shrink-0">
                      <Image width="50" height="50" class="w-5 block" src={unlike} alt="ike" />
                    </div>
                    <div class="text-sm leading-[1.7142857] text-slate-600">{unlikes}</div>
                  </div>
                </div>
              </div>

              <div class="mt-4 text-sm text-[#334155] dark:text-slate-400">{description}</div>
            </div>
          </div>

          <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            <RelatedVideoCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(ctx) {
  const { videoId } = ctx.query;
  const res = await fetch(`http://localhost:3000/api/video/${videoId}`);
  const video = await res.json();
  return { props: { video: video.data } };
}
export default Video;
