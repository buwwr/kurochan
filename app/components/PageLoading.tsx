export function PageLoading() {
  return (
    <div className="fixed inset-0 z-50 bg-zinc-100 flex items-center justify-center min-h-screen">
      <div className="w-10 h-10 border-4 border-primary border-t-secondary rounded-full animate-spin" />
    </div>
  )
}