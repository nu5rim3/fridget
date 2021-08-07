const ListItem = ({ name, exp_date, condition }) => {
    return (
        <div className="List">
            <div className="List__item grid grid-cols-8 gap-4 bg-white border border-gray-300 shadow rounded-md p-4 w-full mx-auto my-3 items-center">
                <div className="List__item__name col-span-2 font-semibold">{name}</div>
                <div className="List__item__exp col-span-4 font-semibold text-gray-400 text-xs p-1">Expiry date —  {exp_date}</div>
                {/* <div className="List__item__expsoon col-span-1 font-semibold text-yellow-500 text-xs bg-yellow-200 rounded-xl text-center p-1">Expiring soon</div> */}
                <div className="List__item__healty col-span-1 font-semibold text-green-500 text-xs bg-green-200 rounded-xl text-center p-1">Healty</div>
                {/* <div className="List__item__exp col-span-1 font-semibold text-red-500 text-xs bg-red-200 rounded-xl text-center p-1">Expired</div> */}
                <div className="col-span-1">
                    <div className="List__item__button flex justify-end">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ListItem;