import heroImage from "../assets/react.svg";

export default function Hero() {
  return (
    <section class="pb-[114px] pt-20 md:mt-[100px]">
      <div class="container lg:px-20">
        <div class="grid items-center gap-6 md:grid-cols-2">
          <BrandImageBox />

          <BrandDescriptionBox />
        </div>
      </div>
    </section>
  );
}

function BrandDescriptionBox() {
  return (
    <div>
      <h1 class="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
        Tasker
      </h1>
      <p class="text-lg my-2 opacity-60">
        Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker - Your
        Personal Productivity Ally for Seamless Goal Achievement and Stress-Free
        Task Management.
      </p>
    </div>
  );
}

function BrandImageBox() {
  return (
    <div class="flex justify-center md:order-2">
      <img
        class="max-md:w-full"
        src={heroImage}
        width="326"
        height="290"
        alt="frame"
      />
    </div>
  );
}
