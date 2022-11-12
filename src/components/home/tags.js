import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTags } from "../../features/tags/tagSlice";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);
  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);
  
  return (
    <>
      {tags ? (
        <section>
          <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
            {tags.map((tag) => (
              <>
                {" "}
                <div key={tag._id} className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
                  {tag.title}
                </div>{" "}
              </>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Tags;
