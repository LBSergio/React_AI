import React from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage'; 
import { useNearScreen } from '@hooks/useNearScreen'; 
import { ImgWrapper, Img, Button, Article } from './styles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({
    id, 
    likes = 0, 
    src = DEFAULT_IMAGE
}) => {

    const key = `like-${id}`;
    const [liked, setLiked] = useLocalStorage(key, false);    
    const [show, element] = useNearScreen();
    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return (
    <Article ref={element}>
        {
            show && <>
                        <a href={`/detail/${id}`}>
                            <ImgWrapper>
                                <Img src={src}/>
                            </ImgWrapper>
                        </a>
                        <Button type='button' onClick={() => setLiked(!liked)}>
                            <Icon  size='32px'/> {likes} likes!
                        </Button>
                    </>
        }        
    </Article>
    )
}