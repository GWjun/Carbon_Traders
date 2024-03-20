import Image from 'next/image'

export default function Example() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2" />

      <div className="max-w-7xl mx-auto pt-24 md:pt-48 pb-24 md:pb-48 flex flex-col md:flex-row justify-between">
        <div
          className="bg-gray-300 rounded-xl p-5 mb-10 md:mb-0 mx-4 flex flex-col items-center shadow-xl"
          data-aos="zoom-in-up"
        >
          <Image
            src="/images/mk1.webp"
            width={300}
            height={300}
            alt="mk1"
            className="rounded-xl"
          />
          <p className="pt-3 text-center">
            With our advanced carbon emissions tracking feature, users can
            effortlessly monitor their environmental impact in real-time,
            gaining valuable insights into their carbon footprint and empowering
            them to make informed decisions towards a more sustainable
            lifestyle. By providing intuitive visualizations and personalized
            recommendations, we aim to create a community of conscious consumers
            committed to reducing their carbon footprint for the betterment of
            our planet.
          </p>
        </div>

        <div
          className="bg-gray-300 rounded-xl p-5 mb-10 md:mb-0 mx-4 flex flex-col items-center shadow-xl"
          data-aos="zoom-in-up"
          data-aos-delay="150"
        >
          <Image
            src="/images/mk2.jpg"
            width={200}
            height={200}
            alt="mk2"
            className="rounded-xl"
          />
          <p className="pt-3 text-center">
            Become a part of our eco-conscious community and contribute to the
            fight against climate change through our innovative reward system.
            As you take environmentally friendly actions, such as reducing
            energy consumption or opting for sustainable transportation, earn
            redeemable rewards that not only recognize your efforts but also
            encourage ongoing participation in our mission to build a greener,
            more sustainable future for generations to come.
          </p>
        </div>

        <div
          className="bg-gray-300 rounded-xl p-5 mx-4 flex flex-col items-center shadow-xl"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <Image
            src="/images/mk3.png"
            width={200}
            height={200}
            alt="mk3"
            className="rounded-xl"
          />
          <p className="pt-3 text-center">
            Join us in pioneering the future of environmental responsibility
            with our comprehensive carbon offsetting solution. By leveraging
            blockchain technology and partnerships with verified carbon offset
            projects, we offer users the opportunity to neutralize their carbon
            footprint by investing in impactful initiatives worldwide. Together,
            we can make a tangible difference in mitigating climate change and
            preserving our planet for future generations.
          </p>
        </div>
      </div>
    </section>
  )
}
