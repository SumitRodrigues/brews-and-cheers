import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh]">
      <div className="font-bold text-3xl">
        Buy me a Beverage
      </div>
      <p>
        A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
      </p>
      <div>
      <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl
       focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg 
       text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
      <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl
       focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg 
       text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10">
      abc
    </div>
    </>
  );
}
