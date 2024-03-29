import { Skeleton } from '#components/ui/skeleton'

export default function Loading() {
  return (
    <section className="relative">
      <Skeleton className="absolute h-full z-[-1] rounded-2xl" />
    </section>
  )
}
