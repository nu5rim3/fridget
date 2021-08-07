const Spinner = () => {
    return (
        <div className="Dlist py-10 w-full">
            <div className="Dlist__item__1 border border-gray-300 bg-white shadow rounded-md p-4 w-full mx-auto my-3">
                <div className="animate-pulse flex space-x-4 justify-between">
                    <div className="Dlist__item__1__holder__1 h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="Dlist__item__1__holder__2 h-4 bg-gray-200 rounded w-20"></div>
                    <div className="Dlist__item__1__holder__3 h-4 bg-gray-200 rounded w-20"></div>
                    <div className="Dlist__item__1__holder__4 h-4 bg-gray-200 rounded w-10"></div>
                </div>
            </div>

            <div className="Dlist__item__2 border border-gray-300 bg-white shadow rounded-md p-4 w-full mx-auto  my-3">
                <div className="animate-pulse flex space-x-4 justify-between">
                    <div className="Dlist__item__2__holder__1 h-4 bg-gray-300 rounded w-1/4"></div>
                    <div className="Dlist__item__2__holder__2 h-4 bg-gray-300 rounded w-20"></div>
                    <div className="Dlist__item__2__holder__3 h-4 bg-gray-300 rounded w-20"></div>
                    <div className="Dlist__item__2__holder__4 h-4 bg-gray-300 rounded w-10"></div>
                </div>
            </div>

            <div className="Dlist__item__3 border border-gray-300 bg-white shadow rounded-md p-4 w-full mx-auto my-3">
                <div className="animate-pulse flex space-x-4 justify-between">
                    <div className="Dlist__item__3__holder__1 h-4 bg-gray-400 rounded w-1/4"></div>
                    <div className="Dlist__item__3__holder__2 h-4 bg-gray-400 rounded w-20"></div>
                    <div className="Dlist__item__3__holder__3 h-4 bg-gray-400 rounded w-20"></div>
                    <div className="Dlist__item__holder__4 h-4 bg-gray-400 rounded w-10"></div>
                </div>
            </div>
        </div>
    )
}

export default Spinner;