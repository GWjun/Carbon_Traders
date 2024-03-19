import AutoVideo from '../../public/videos/AutoVideo'

export default function Feature() {
  return (
    <section className="relative">
      <div className="flex justify-center mt-12" data-aos="zoom-in">
        <AutoVideo src="/videos/raptil.mp4" width={420} />
      </div>
    </section>
  )
}
