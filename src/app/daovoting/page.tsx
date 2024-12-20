import Link from "next/link";
export default function DAOVoting() {
  return (
    <div className="   flex justify-center items-center h-screen bg-[#000000] ">
      <div className="">
        < div className="text-[24px] text-[#FFFFFF] ">DAO Voting</div>
        <div className="text-[#ABAFB4]">
          This is a trial voting phase. Vote for projects you’re interested in
          to secure early investment access when they officially launch.
          <Link className="text-[#146EF5] space-x-2" href={"/"}>
            Learnmore{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
