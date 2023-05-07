import React from 'react'
import TourSingle from './TourSingle'
import tours from '../data/tours'
const Tours = () => {
    return (
        <>
            <section className="section" id="tours">
                <div className="section-title">
                    <h2>featured <span>tours</span></h2>
                </div>

                <div className="section-center featured-center">
                    {
                        tours.map((tour) => {
                            return (
                                <TourSingle {...tour} key={tour.id} />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Tours
