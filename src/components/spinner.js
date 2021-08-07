const Spinner = () => {
    return (
        <div className="list py-10 w-full">
            <div class="border border-gray-300 bg-white shadow rounded-md p-4 w-full mx-auto my-3">
                <div class="animate-pulse flex space-x-4 justify-between">
                    <div class="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div class="h-4 bg-gray-200 rounded w-20"></div>
                    <div class="h-4 bg-gray-200 rounded w-20"></div>
                    <div class="h-4 bg-gray-200 rounded w-10"></div>
                </div>
            </div>

            <div class="border border-gray-300 bg-white shadow rounded-md p-4 w-full mx-auto  my-3">
                <div class="animate-pulse flex space-x-4 justify-between">
                    <div class="h-4 bg-gray-300 rounded w-1/4"></div>
                    <div class="h-4 bg-gray-300 rounded w-20"></div>
                    <div class="h-4 bg-gray-300 rounded w-20"></div>
                    <div class="h-4 bg-gray-300 rounded w-10"></div>
                </div>
            </div>

            <div class="border border-gray-300 bg-white shadow rounded-md p-4 w-full mx-auto my-3">
                <div class="animate-pulse flex space-x-4 justify-between">
                    <div class="h-4 bg-gray-400 rounded w-1/4"></div>
                    <div class="h-4 bg-gray-400 rounded w-20"></div>
                    <div class="h-4 bg-gray-400 rounded w-20"></div>
                    <div class="h-4 bg-gray-400 rounded w-10"></div>
                </div>
            </div>
        </div>
    )
}

export default Spinner;