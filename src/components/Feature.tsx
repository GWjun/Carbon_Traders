import useVideoLoader from '#store/client/useVideoLoader'

export default function Feature() {
  const { videoUrl, loading } = useVideoLoader('/videos/raptil.mp4')

  return (
    <section className="relative">
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2" />

      <div className="max-w-7xl mx-auto pt-24 md:pt-48 mb-24 md:mb-48 flex justify-center lg:justify-between items-center">
        <div className="hidden lg:flex" data-aos="fade-right">
          {loading ? (
            <div className="w-[500px] h-[280px] bg-gray-300 bg-opacity-70 animate-pulse rounded-2xl" />
          ) : (
            <video width={500} autoPlay muted loop className="rounded-lg">
              <source src={videoUrl || ''} type="video/mp4" />
            </video>
          )}
        </div>
        <div
          className="max-w-2xl ml-4 flex flex-col items-center"
          data-aos="fade-left"
        >
          <div className="mb-6">
            <h4 className="text-2xl font-bold font-serif">
              Carbon Emissions Tracking
            </h4>
            <p>
              Our platform offers robust carbon emissions tracking capabilities.
              Easily monitor your carbon footprint in real-time, empowering you
              to make informed decisions to reduce your environmental impact.
              With intuitive graphs and data visualization tools, staying
              accountable to your carbon reduction goals has never been easier.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-2xl font-bold font-serif">Reward System</h4>
            <p>
              Participate in our reward system designed to incentivize
              sustainable behavior. As you take steps to reduce your carbon
              footprint, earn rewards that can be redeemed for eco-friendly
              products, discounts, or even carbon offset credits. Your efforts
              to combat climate change are not only meaningful but also
              rewarding.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold font-serif">
              Community Engagement
            </h4>
            <p>
              Join a vibrant community of like-minded individuals dedicated to
              creating a sustainable future. Share tips, experiences, and
              success stories with others on the same journey towards carbon
              neutrality. Engage in discussions, collaborate on initiatives, and
              be inspired by the collective impact we can achieve together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
