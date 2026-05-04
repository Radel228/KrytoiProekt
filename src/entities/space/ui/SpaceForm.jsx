import { useEffect, useState } from 'react'
import SpaceApi from '../api/SpaceApi'
import { Link } from 'react-router'
import "./Space.css"
function SpaceForm() {
    const [space, setSpace] = useState([])

    useEffect(() => {
        SpaceApi.getSpace().then(data => {
            (setSpace(data.data || []))
        })
    }, [])
    return (
        <div className='spaces'>
            {space.map((el) =>
                <div className='space'>
                    <h1>Title: {el.title}</h1>
                    <h3>Capacity: {el.capacity}</h3>
                    <h3>Description: {el.description}</h3>
                    <h3>Id: {el.id}</h3>
                    <h3>PricePerHour: {el.pricePerHour}</h3>
                    <h3>Rating: {el.rating}</h3>
                    <h3>ZoneType: {el.zoneType}</h3>
                    <div className="space_images">
                        {el.images.map((url, idx) => (
                            <img key={idx} src={url} alt={el.title} />
                        ))}
                    </div>
                    <Link to={"/"}>Подробнее...</Link>
                </div>
            )}
        </div>
    )
}

export default SpaceForm
