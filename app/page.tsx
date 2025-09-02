"use client";
import Image from "next/image";
import Ask71Chat from "./components/Ask71Chat";
import { ArrowUpRight } from "lucide-react";
import { title } from "process";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M13.28 3.22a.75.75 0 011.06 0l6.44 6.44a.75.75 0 010 1.06l-6.44 6.44a.75.75 0 11-1.06-1.06l5.16-5.16H3.75a.75.75 0 010-1.5h14.69l-5.16-5.16a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// previously used demo tiles retained for reference; now replaced by healthcare-specific cards

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[878px] p-5 pt-20">
      <header className="flex items-center gap-3">
        <h1 className="text-4xl font-semibold">Health by</h1>
        <svg
          width="66"
          height="28"
          viewBox="0 0 66 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M65.9464 0.995972H62.3906V26.9925H65.9464V0.995972Z"
              fill="#F88265"
            />
            <path
              d="M10.4032 27.4999C7.04315 27.4999 4.28936 26.3007 2.44211 24.0334C0.843809 22.076 0 19.4286 0 16.3783C0 8.79357 5.15788 0.672852 12.8377 0.672852C16.3878 0.672852 19.2138 1.77322 21.2416 3.94356C24.0847 6.98812 24.6529 11.4219 24.6814 14.6679C27.764 12.1023 32.1731 8.95891 34.294 9.52715C35.3716 9.81602 36.0424 10.7396 36.0424 11.9388V26.9944H32.4867V13.4516C30.17 14.7154 25.8464 18.2047 24.5275 19.4704V26.9963H20.9717V23.1231C18.1533 25.2973 14.1072 27.5037 10.4032 27.5037V27.4999ZM12.8377 4.22863C7.36813 4.22863 3.55578 10.6313 3.55578 16.3783C3.55578 18.6 4.12212 20.472 5.19779 21.7871C6.36468 23.2181 8.11691 23.9441 10.4032 23.9441C14.6583 23.9441 19.5958 19.8885 20.9736 18.3681C20.9793 18.1819 20.9945 17.9177 21.0173 17.5851C21.1693 15.3749 21.5703 9.50434 18.6436 6.36856C17.2981 4.92611 15.3995 4.22673 12.8377 4.22673V4.22863Z"
              fill="#283754"
            />
            <path
              d="M55.4367 5.88208C55.5469 6.19945 55.8244 7.30363 54.7658 8.13413C47.7607 13.6417 43.7754 20.0292 43.2071 26.9925H46.7762C47.3502 21.0725 50.7672 15.7987 56.9628 10.9297C58.8651 9.43596 59.5835 6.99765 58.7967 4.72089C58.0137 2.45933 55.9574 0.997864 53.5571 0.997864H39.792V4.55365H53.5571C54.8741 4.55365 55.3283 5.5723 55.4367 5.88398V5.88208Z"
              fill="#AFD8D4"
            />
            <path
              d="M31.4546 2.79387C31.4546 1.49395 32.4865 0.5 33.7485 0.5C35.0104 0.5 36.0423 1.49395 36.0423 2.79387C36.0423 4.09379 35.0104 5.04973 33.7485 5.04973C32.4865 5.04973 31.4546 4.05578 31.4546 2.79387Z"
              fill="#283754"
            />
          </g>
          <defs></defs>
        </svg>
      </header>

      <section className="mt-4">
        <h1 className=" text-3xl font-normal">
          The Intelligence Layer Orchestrating Modern Healthcare
        </h1>
      </section>

      {/* Agentic AI Solutions */}
      <section className="mt-9">
        <h2 className="text-2xl font-semibold mb-4">
          Our Agentic AI Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              title: "RCM71",
              hoverData: (
                <div className="absolute inset-0 rcm71-hover flex flex-col items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  <p className="text-[16px] mb-4">
                    Your AI revenue cycle team on autopilot.
                  </p>
                  <button
                    onClick={() => {
                      window.location.href =
                        "https://health71-fe-git-feature-loginpage-mkstatusneos-projects.vercel.app/";
                    }} // ← replace with your URL
                    className="border cursor-pointer border-white px-4 py-1.5 rounded-md text-sm hover:bg-white hover:text-black transition"
                  >
                    Sign in
                  </button>
                </div>
              ),
            },

            {
              title: "Docu71",
              hoverData: (
                <div className="absolute inset-0 docu71-hover flex flex-col items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  <h3 className="text-lg font-semibold mb-1 text-white">
                    Coming Soon
                  </h3>
                  <p className="text-[16px] mb-4">
                    AI that keeps your hospital
                    <br /> humming.
                  </p>
                </div>
              ),
            },
            {
              title: "Ops71",
              hoverData: (
                <div className="absolute inset-0 ops71-hover flex flex-col items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  <h3 className="text-lg font-semibold mb-1 text-white">
                    Coming Soon
                  </h3>
                  <p className="text-[16px] mb-4">
                    AI that writes, so doctors
                    <br /> don’t have to.
                  </p>
                </div>
              ),
            },
          ].map((data, idx) => (
            <div
              key={idx}
              className={`relative h-40 rounded-xl overflow-hidden group `}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                style={{
                  backgroundImage: `url(/${data.title.toLocaleLowerCase()}.png)`,
                }}
              />

              {/* Default State */}
              <div className="absolute inset-0 p-4 flex items-end justify-between text-white opacity-100 group-hover:opacity-0 transition-opacity">
                <span className="font-semibold text-xl">{data.title}</span>

                <img
                  src={"/icons/arrow-right.png"}
                  alt="arrow"
                  className="h-8 w-8"
                />
              </div>
              {/* Hover State */}
              {data.hoverData}
            </div>
          ))}
        </div>
        <div className="text-center  mt-4 bg-basecard p-3 rounded-lg shadow-md">
          <p className="font-semibold text-base mb-3.5">
            More Agents Coming Soon…
          </p>
          <p className="text-xs desc-gray">
            The Health71 agent network is growing. From RCM to clinical
            <br /> ops, our autonomous modules plug into your system and scale
            with your needs.
          </p>
        </div>
      </section>

      {/* Ai boat */}
      <section className="mt-11 mb-5">
        <h2 className=" text-3xl font-semibold mb-4">
          Meet Ask – Your Healthcare AI Expert
        </h2>
        <Ask71Chat />
      </section>

      {/* Case Studies */}
      {/* <section className="mt-11 overflow-x-hidden">
        <h2 className="text-2xl font-semibold mb-2">Case Studies</h2>
        <p className="text-xl mb-3">Let’s see what we are doing…..</p>
        <div className="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory">
          <div className="flex gap-4 w-max mx-auto">
            {[
              {
                title: "RCM71",
                desc: "Claims, coding, denials, and billing — handled by autonomous agents that cut costs by 30–50% and lift revenue by +3–5%.",
              },
              {
                title: "Ops71",
                desc: "Forecasting, workforce management, patient flow optimization — boosting capacity by 10–25% through intelligent orchestration.",
              },
              {
                title: "Docu71",
                desc: "Ambient note capture and EMR summarization — reducing documentation time by up to 30%, multilingual and workflow-native.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className={`bg-white border flex-shrink-0 case-study rounded-3xl p-5.5 flex flex-col justify-between bg-${title.toLocaleLowerCase()} w-[350px]`}
              >
                <div>
                  <h3 className="font-semibold text-[22.614px] mb-1">
                    {title}
                  </h3>
                  <p className="text-[17px] text-gray-600 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
