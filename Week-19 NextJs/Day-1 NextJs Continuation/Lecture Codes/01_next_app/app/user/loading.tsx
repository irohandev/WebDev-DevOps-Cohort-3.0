export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-lg font-semibold text-gray-600">
                    Loading<span className="animate-pulse">...</span>
                </p>
            </div>
        </div>
    );
}
