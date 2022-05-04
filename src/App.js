import React from 'react';
import { ListOfCategories } from '@ListOfCategories';
import { ListOfPhotoCard } from '@ListOfPhotoCard';
import { Logo } from '@Logo';
import { GlobalStyle } from '@GlobalStyles/GlobalStyles';

export const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Logo/>
      <ListOfCategories/>
      <ListOfPhotoCard/>
    </div>
  )
}