import React from 'react';
import { Anchor, Image} from './styles';

const DEFAULT_IMAGE = 'https://samherbert.net/svg-loaders/svg-loaders/oval.svg';

export const Category = ({
    cover,
    path, 
    emoji = ' ',
    loading
}) => (
    <Anchor href={path} target='_blank'>
        <Image src={loading==="false" ? cover : DEFAULT_IMAGE} loading={loading}/>
        {emoji}
    </Anchor>
)