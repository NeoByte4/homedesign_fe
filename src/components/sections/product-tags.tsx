export const ProductTags = ({ tags }: { tags?: string[] }) => {
  if (!tags?.length) return null;

  return (
    <div className="mt-6">
      <p className="text-sm font-semibold mb-2">Tags</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-muted/40 rounded-full text-xs capitalize"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
