import { Skeleton } from '#components/ui/skeleton'

export default function LoadingMethod() {
  return (
    <section className="relative">
      <Skeleton className="absolute inset-0 pointer-events-none -z-10 rounded-2xl" />
    </section>
  )
}
