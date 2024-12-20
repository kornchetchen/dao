import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="flex items-center  min-h-full min-w-full space-x-[5px]">
      <BriefcaseBusiness />
      <Link href="/portfolio" className="text-lg[14] ">
        Portfolio
      </Link>
    </div>
  );
}
