import React from "react";
import moment from "moment";

const ListItem = (props) => {
    // console.log(props);

    const deleteItemHandler = (id) => {
        props.getId(id);
    };

    const renderLabel = (expiry) => {

        var now = moment(new Date()),
            end = moment(expiry),
            days = end.diff(now, 'days');
        if (days <= 0) {
            return (
                <div className="List__item__label List__item__label--exp font-semibold text-xs text-center p-1 px-3 w-32">Expired</div>
            )
        } else if (days <= 30) {
            return (
                <div className="List__item__label List__item__label--expsoon font-semibold text-xs text-center p-1 px-3 w-32">Expiring soon</div>
            )
        } else {
            return (
                <div className="List__item__label List__item__label--healthy font-semibold text-xs text-center p-1 px-3 w-32">Healthy</div>
            )
        }

    }

    const renderList = props.data.map((item) => {
        return (
            <div className="List__item grid grid-cols-8 gap-4 bg-white p-4 w-full mx-auto my-3 items-center cursor-pointer" key={item._id} onClick={() => props.updateListItem(item)}>
                <div className="List__item__name col-span-2 font-semibold capitalize sm:col-span-1">{item.title}</div>
                <div className="List__item__exp col-span-4 font-semibold text-xs p-1 pr-2 sm:col-span-5">Expiry date —  {moment(item.expiry).format('D/M/YYYY')}</div>
                <div className="col-span-2 flex justify-end">
                {renderLabel(item.expiry)}
                    <div className="List__item__button flex justify-end pl-2">
                        <button
                            onClick={(e) => window.confirm(`Do you want to remove ${item.title} ?`) && deleteItemHandler(item._id)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        );
    });


    return (
        <div className="List">
            <div className="List__count text-right font-semibold">Total items &#8212; {(props.data.length.toString().length < 2) ? "0" + props.data.length : props.data.length }</div>
            {renderList}
        </div>
    );
}

export default ListItem;