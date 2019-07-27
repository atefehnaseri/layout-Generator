import React, {Component} from 'react';

export default function LayoutView({layoutTypes, layoutCounts}){

    let layouts = [];
    return (
        <div className="container">

            {
                layoutTypes.map((layout, index) => {
                    for (let i = 0; i < layoutCounts[index]; i++) {
                        layouts.push(
                            <div key={`${layout}-${i}`} className={`${layout.toLowerCase()}-layout`}>
                                <div className="slot-text">Slot-{index + 1}</div>
                            </div>)
                    }
                })
            }
            {layouts}
        </div>
    )

}