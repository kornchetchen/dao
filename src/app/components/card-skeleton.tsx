export function ProjectCardSkeleton() {
    return (
      <div className="p-6 bg-gray-900 rounded-lg animate-pulse">
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-gray-800 rounded-lg" />
          <div className="flex-1 space-y-4">
            <div className="h-4 bg-gray-800 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-3 bg-gray-800 rounded" />
              <div className="h-3 bg-gray-800 rounded w-5/6" />
            </div>
          </div>
          <div className="w-24">
            <div className="h-8 bg-gray-800 rounded" />
          </div>
        </div>
      </div>
    )
  }