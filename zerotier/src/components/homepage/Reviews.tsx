import { reviewItems } from "@/utils/reviewItems";
import { FaUserCircle } from "react-icons/fa";

function Reviews() {
  return (
    <div className="section py-10">
      <h2 className="heading text-2xl md:text-5xl font-rubik text-center mb-10">
        Used by the world&apos;s most innovative teams
      </h2>

      <div className="max-w-5xl mx-auto">
        {reviewItems.map((item) => (
          <div
            key={item.by}
            className="bg-gradient-to-br from-[#fdb25d] to-secondary p-10 rounded-2xl flex flex-col md:flex-row items-start justify-start mb-10"
          >
            <div className="md:pr-5 mb-5">
              <FaUserCircle size={48} />
            </div>
            <div>
              <p className="text-lg md:text-2xl mb-5 leading-relaxed">
                &quot;{item.review}&quot;
              </p>
              <p className="text-lg md:text-xl tracking-widest">{item.by}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
