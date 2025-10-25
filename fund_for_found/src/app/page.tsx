import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-[95px]">
      <h1 className="text-[#270F94] text-3xl">
        Create Your Profile And Take The First Syep Towards New Opportunities
      </h1>
      <p className="text-[#717171] mt-[31px]">
        Create an account or sign in to start creating
      </p>
      <div className="flex flex-col items-center mt-[100px] border-1 borde-[#644FC1] w-[320px] h-[460px] rounded-2xl align-middle">
        <BriefcaseBusiness className="w-[100px] h-[100px] mt-[50px]" />
        <p className="mt-[82px] text-lg font-medium text-gray-800">
          Brand or organization
        </p>
        <p className="mt-[17px] w-[253px] justify-center align-middle text-center text-sm leading-relaxed">
          if your brand is stablished and you are looking for continuous support, get started now.
        </p>
        <Link href="/BrandInfo">
          <button className="bg-[#5C4FC1] w-[259px] h-[39px] rounded-[5px] mt-[69px]">
            Start
          </button>
        </Link>
        <Link href="/LogIn" className="text-[#644FC1] mt-[12px] mb-[34px]">
          learn more
        </Link>
      </div>
    </main>
  );
}
