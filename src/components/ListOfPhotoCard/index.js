import React from 'react';
import { useQuery,  gql } from '@apollo/client';
import { PhotoCard } from '../PhotoCard';

const withPhotos = gql`
  query getPhotos {
      photos {
      id
      categoryId
      src
      likes
      userId
      liked
      }
  }
`

export const ListOfPhotoCard = ({id}) => {
  const { loading, error, data } = useQuery(withPhotos)
  if (loading) return 'Loading...' 
  if (error) return <pre>{error.message}</pre>
  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo}/>)}
    </ul>
  )
}