import PropsTypes from 'prop-types';

export default function MovieForm ({submit, movie, buttonTitle}) {
    function handleSubmit(event){
        event.preventDefault();
        const formElement = event.target;
        const {titleElement, urlElement, yearElement, categoryElement, pgElement} = formElement;
        const movie = {
            title: titleElement.value,
            url: urlElement.value,
            year: yearElement.value,
            category: categoryElement.value,
            pg: pgElement.value
        }
        
       event.target.reset();
       submit(movie);
    }


    return(
        <form onSubmit={handleSubmit} >
                <fieldset className='form-fieldset'>  
                    <label htmlFor="title" className='form-label'>Title</label>
                    <input type="text" id="title" name="titleElement" className='form-input' required maxLength={50} defaultValue={movie?.title}/>
                </fieldset >
                <fieldset className='form-fieldset'>
                    <label htmlFor="url" className='form-label'>Url</label>
                    <input type="url" id="url"  className='form-input' name="urlElement" defaultValue={movie?.imageUrl}/>
                </fieldset>
                <fieldset className='form-fieldset'>
                    <label htmlFor="year" className='form-label'>Year</label>
                    <input  className='form-input' type="number" id="year" required maxLength={4} name="yearElement" defaultValue={movie?.year}/>
                </fieldset>
                <fieldset className='form-fieldset'>
                    <label htmlFor="category" className='form-label'>Category</label>
                    <select  className='form-input' id="category" name="categoryElement" defaultValue={movie?.category}>
                        <option value="Movie">Movie</option>
                        <option value="Series">Series</option>
                    </select>
                </fieldset>
                <fieldset className='form-fieldset'>
                <label htmlFor="pg" className='form-label'>PG</label>
                    <select  className='form-input' name="pgElement" id="pg" defaultValue={movie?.pg}>
                        <option value="PG">PG</option>
                        <option value="18+">18+</option>
                        <option value="13+">13+</option>
                        <option value="16+">16+</option>
                    </select>
                </fieldset>
                <button className='form-button' type="submit">{buttonTitle}</button>
            </form>
    );
}

MovieForm.propTypes = {
    submit: PropsTypes.func,
    movie: PropsTypes.shape({
        title: PropsTypes.string,
        imageUrl: PropsTypes.string,
        year: PropsTypes.string,
        category: PropsTypes.string,
        pg: PropsTypes.string,
    }),
    id: PropsTypes.string,
    buttonTitle: PropsTypes.string,
}