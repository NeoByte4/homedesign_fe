import type { Ifurniture_product } from "@/src/types/types";

export const ProductVideo = ({
  videoUrls,
}: {
  videoUrls: Ifurniture_product["video_url"];
}) => {
  if (!videoUrls?.length) return null;

  return (
    <div className="mt-8">
      <div className="aspect-video rounded-lg overflow-hidden">
        <video
          controls
          poster={videoUrls[0]?.thumbnail_url}
          className="w-full h-full object-cover"
        >
          <source src={videoUrls[0]?.url} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
