import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh]">
      <div className="font-bold text-5xl flex gap-2 justify-center items-center">
        Buy me a Beverage <span><img src="/beverage.gif" width={88} alt=""></img></span>
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
    <div>
      <h1>Your Fans can buy you a Beverage</h1>
      <div className="flex gap-5">
        <div className="item">
          <img src="/man.gif" alt=""></img>
        </div>
      </div>
    </div>
    </>
  );
}
