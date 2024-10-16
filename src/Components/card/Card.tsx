import './card.css'
import star from '../../assets/star.png'

interface Stats {
    rating: number;
    reviewCount: number;
}

interface CardProps {
    title: string;
    description: string;
    price: number;
    coverImg: string;
    stats: Stats;
    location: string;
    openSpots: number;
}

export default function Card(
    {   
        title,
        description,
        price,
        coverImg,
        stats,
        location,
        openSpots,
    }: CardProps
) {

    let status;
    if (openSpots === 0) {
        status = 'SOLD OUT';
    } else if (location == 'Online') {
        status = 'ONLINE';
    }

    return (
        <div className='card'>
            {status && <div className="card--badge">{status}</div>}
            <img className='card--img' src={`../../images/${coverImg}`} alt={description} />
            <div className='card--info'>
                <div className='info1'>
                    <img src={star} alt="star rating" />
                    <span className='info1--rating'>{stats.rating.toFixed(1)}</span>
                    <span className='info1--rest'>({stats.reviewCount}) • {location}</span>
                </div>
                <span className='card--title'>{title}</span>
                <div className='info2'>
                    <span className='info2--price'>From ${price > 0 ? price : 'N/A'}</span>
                    <span className='info2--rest'> / person</span>
                </div>
            </div>
        </div>
    );
}
