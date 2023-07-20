"use client";

// This is a client component

export default function MemberCard({ index, item }) {
  return (
    <div
      className="bg-white rounded-lg"
      style={{ borderWidth: "1px", borderColor: "#DEDEDE" }}
      key={`member-card-${index}`}
    >
      <div className="px-5 py-10 flex flex-row gap-x-5">
        <div
          style={{
            width: "110px",
          }}
          className="flex flex-col justify-center items-center"
        >
          {index === 0 ? (
            <img src="/1.png" alt="First Rank" className="grow-0" />
          ) : index === 1 ? (
            <img src="/2.png" alt="Second Rank" className="grow-0" />
          ) : index === 2 ? (
            <img src="/3.png" alt="Third Rank" className="grow-0" />
          ) : (
            <p className="text-lg font-semibold">{index + 1}</p>
          )}
        </div>
        <div className="grow flex flex-row justify-between items-center">
          <div className="flex flex-row gap-x-5 items-center">
            <img
              src={item.user.image_url}
              className="rounded-full object-fill w-1/5"
            />
            <div className="text-2xl">{item.user.full_name}</div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex flex-row gap-x-5">
              <img src="/help-circle.svg" alt="Help" className="w-7 h-7" />
              <p>{item.question_count}</p>
            </div>
            <div className="flex flex-row gap-x-5">
              <img src="/chatbubble.svg" alt="Comment" className="w-7 h-7" />
              <p>{item.answer_count}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
