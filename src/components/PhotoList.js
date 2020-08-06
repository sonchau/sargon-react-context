import React, {useContext} from 'react'
import { Context as PhotoContext } from '../context/PhotoContext'
import PhotoListItem from './PhotoListItem'

const PhotoList = () => {
    const {state} = useContext(PhotoContext)
    //console.log('state in photo list', state)
    return  (
        <ul>
            {state.map((item, index) => {
                return <PhotoListItem key={index} props={item}/>
            })}
        </ul>
    )
}

export default PhotoList


