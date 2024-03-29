import { Skeleton } from '#components/ui/skeleton'

export default function LoadingFeature() {
  return (
    <section className="relative">
      <Skeleton className="absolute left-0 right-0 m-auto w-px p-px h-20 rounded-2xl" />
    </section>
  )
}
