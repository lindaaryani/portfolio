import Image from "next/image";
import { profile } from "../../data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-28">

      {/* Background Blur */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl"></div>

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 lg:flex-row">

        {/* Left Side */}
        <div className="flex-1 text-center lg:text-left">

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            👋 Hello, I'm
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <h2 className="mt-4 text-xl text-gray-600 md:text-2xl">
            {profile.role}
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-500">
            {profile.bio}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">

            <button className="rounded-xl bg-black px-6 py-3 text-white transition duration-300 hover:scale-105 hover:bg-gray-800">
              View Projects
            </button>

            <button className="rounded-xl border border-gray-300 px-6 py-3 transition duration-300 hover:bg-gray-100">
              Download CV
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex flex-1 justify-center">

          <Image
            src="/images/profile.jpeg"
            alt="{profile.name}"
            width={420}
            height={420}
            priority
            className="rounded-full border-8 border-white object-cover shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}