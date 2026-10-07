interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
     return (
         <div
      role="alert"
      className="flex flex-col items-center justify-center gap-2 py-24 text-center"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600">
        !
      </div>
      <h2 className="text-lg font-semibold text-gray-900">
        Couldn't load your leads
      </h2>
      <p className="max-w-sm text-sm text-gray-500">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800"
        >
          Retry
        </button>
      )}
    </div>
    )
}