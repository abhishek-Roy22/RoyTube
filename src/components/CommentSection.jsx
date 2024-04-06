const CommentSection = ({ comments, profileUrl }) => {
  return (
    <>
      {comments &&
        comments?.comments?.map((c, i) => (
          <div className="w-full p-4" key={i}>
            <div className="flex gap-4">
              <img
                src={profileUrl}
                alt="profile"
                className="w-12 h-12 rounded-full bg-cover"
              />
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <span className="font-bold text-neutral-600">
                    {c.authorName}
                  </span>
                  <p className="text-sm text-neutral-500">
                    {c.publishedTimeText}
                  </p>
                </div>
                <p>{c.text}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CommentSection;
