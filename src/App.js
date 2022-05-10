import React from 'react';
import { ListOfCategories } from '@ListOfCategories';
import { ListOfPhotoCard } from '@ListOfPhotoCard';
import { PhotoCard } from './components/PhotoCard';
import { Logo } from '@Logo';
import { GlobalStyle } from '@GlobalStyles/GlobalStyles';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <div>
      <GlobalStyle/> 
      <Logo/>
      {
        detailId
          ? <PhotoCard/>
          :
          <>
            <ListOfCategories/>
            <ListOfPhotoCard/>
          </>
      }      
    </div>
  )
}