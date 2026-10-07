interface EmptyStateProps {
  onAddLead?: () => void;
}

export function EmptyState({ onAddLead }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 py-24 text-center">
      <h2 className="text-lg font-semibold text-gray-900">
        You don't have any leads yet
      </h2>
      <p className="max-w-sm text-sm text-gray-500">
        New leads assigned to you will show up here.
      </p>
      {onAddLead && (
        <button
          onClick={onAddLead}
          className="mt-4 rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800"
        >
          Add a Lead
        </button>
      )}
    </div>
  );
}