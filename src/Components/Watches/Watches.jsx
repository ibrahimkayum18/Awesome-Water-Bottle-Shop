import './Watches.css'

const Watches = ({ watch }) => {
    console.log(watch);
    const {brand, model, price} = watch;
    return (
        <div className='watch-container'>
            <h2>Watch Brand: {brand} </h2>
            <p>Watch Model: {model} </p>
            <p>Watch Price: {price} </p>
        </div>
    );
};

export {Watches};