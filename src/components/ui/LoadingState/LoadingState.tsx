export function LoadingState() {
     return (
        <div
      role="status" 
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-3 py-24 text-center"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-brand-700" />
      <p className="text-sm text-gray-500">Loading your leads...</p>
    </div>
    )
}