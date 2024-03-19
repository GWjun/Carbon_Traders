const AutoVideo = ({ src, width }: { src: string; width: number }) => {
  return (
    <video width={width} autoPlay muted loop className="rounded-lg">
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default AutoVideo
