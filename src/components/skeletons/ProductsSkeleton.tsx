export default function ProductsSkeleton() {
    return (
        <div className="margin-main-x">
            <div className="mt-[50px] pb-10 border-b border-[#0000001A]">
                <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-12 animate-pulse" />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex flex-col gap-3">
                            <div className="w-full h-[200px] sm:h-[240px] lg:h-[298px] bg-gray-200 rounded-2xl animate-pulse" />
                            <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse" />
                            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                            <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-10 pb-[50px]">
                <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-12 animate-pulse" />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex flex-col gap-3">
                            <div className="w-full h-[200px] sm:h-[240px] lg:h-[298px] bg-gray-200 rounded-2xl animate-pulse" />
                            <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse" />
                            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                            <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}