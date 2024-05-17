import PropTypes from 'prop-types';

export default function PaintingCard(props) {
    const {image, name, author} = props.painting;
    return (
        <div className="w-full h-full">
            <img className='w-full h-full object-cover' src={image} alt={name} />
            <div className="absolute inset-0 bg-gray-800 opacity-60 hover:opacity-0 transition-all duration-500"></div>
            <h2 className='font-marcellus text-white font-bold absolute bottom-10 text-2xl px-4'>{name}</h2>
            <p className='font-marcellus text-white font-bold absolute bottom-3 text-lg px-4'>{author}</p>
        </div>
    )
}

PaintingCard.propTypes = {
    painting: PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        name: PropTypes.string,
        author: PropTypes.string,
})}