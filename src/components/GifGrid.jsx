import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <div
                className='card-grid'
            >
                {isLoading && <h2>Cargando...</h2>}

                <h3>{category}</h3>
                {
                    images.map((image) => {
                        return (
                            <GifItem
                                key={image.id}
                                {...image}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}


