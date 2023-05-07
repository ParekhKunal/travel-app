import React from 'react'
const TourSingle = (props) => {
    const { img, date, place, description, countries, days, price } = props
    return (
        <>
            <article className="tour-card">
                <div className="tour-img-container">
                    <img src={img} className="tour-img" alt="" />
                    <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                    <div className="tour-title">
                        <h4>{place}</h4>
                    </div>
                    <p>
                        {description}
                    </p>
                    <div className="tour-footer">
                        <p>
                            <span><i className="fas fa-map"></i></span> {countries}
                        </p>
                        <p>{`${days} days`}</p>
                        <p>{`from $${price}`}</p>
                    </div>
                </div>
            </article>

        </>
    )
}

export default TourSingle
