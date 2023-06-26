"use client";

// This is a client component

export default function MemberCard({ index }) {
  return (
    <div
      className="bg-white rounded-lg"
      style={{ borderWidth: "1px", borderColor: "#DEDEDE" }}
      key={`member-card-${index}`}
    >
      <div className="px-5 py-10 flex flex-row gap-x-5">
        {index === 0 ? (
          <img src="/1.png" alt="First Rank" className="grow-0" />
        ) : index === 1 ? (
          <img src="/2.png" alt="Second Rank" className="grow-0" />
        ) : index === 2 ? (
          <img src="/3.png" alt="Third Rank" className="grow-0" />
        ) : (
          <p className="text-base font-semibold">{index + 1}</p>
        )}
        <div className="grow flex flex-row justify-between items-center">
          <div className="text-2xl">Member name</div>
          <div className="flex flex-row gap-8">
            <div className="flex flex-row gap-x-5">
              <img src="/chatbubble.svg" alt="Comment" className="w-7 h-7" />
              <p>123</p>
            </div>
            <div className="flex flex-row gap-x-5">
              <img src="/help-circle.svg" alt="Help" className="w-7 h-7" />
              <p>123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
