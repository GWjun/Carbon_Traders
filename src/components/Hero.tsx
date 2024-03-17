/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute z-[-1]" aria-hidden="true">
        <img
          className="h-[1389px] object-cover object-right"
          src="/images/earth.svg"
          alt="landing"
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="pt-48 pb-12 md:pt-64 md:pb-80 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 flex flex-col items-center md:items-start">
              <span>Contents About</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-400">
                Carbon Neutrality
              </span>
            </h1>
            <div className="max-w-xl flex flex-col items-center md:items-start">
              <p className="text-xl text-gray-600 mb-8">Our landing page</p>
              <div className="max-w-xs flex flex-col md:flex-row">
                <button className="mb-4 md:mb-0 md:mr-4 px-28 md:px-8 py-3 shadow-lg rounded bg-gradient-to-r text-white from-green-600 to-lime-600">
                  Simple Test
                </button>
                <a
                  className="px-28 md:px-8 py-3 shadow-lg rounded text-black bg-white"
                  href="https://github.com/gwjun"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div>
            <video
              width="320"
              height="240"
              autoPlay
              muted
              loop
              className="rounded-lg"
            >
              <source src="/videos/raptil.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
