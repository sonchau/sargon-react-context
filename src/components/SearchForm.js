import React, {useState, useContext} from 'react'
import { Context as PhotoContext } from '../context/PhotoContext';

const SearchForm = () => {
    const {fetchPhotos} = useContext(PhotoContext)
    const [tags, setTags] = useState('')
    const onTagsChange = (e) => {
        setTags(e.target.value)
        fetchPhotos(e.target.value)
    }

    return  (
    <div>
        <input
            type="text"
            placeholder="Tags"
            autoFocus
            className="text-input"
            value={tags}
            onChange={onTagsChange}
        />
    </div>
    )
}

export default SearchForm


