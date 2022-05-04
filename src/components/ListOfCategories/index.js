import React from 'react';
import { Category } from '../Category';
import { List, Item } from './styles'
import data from '../../../api/db.json';

function useCategoriesData() {
  const [categories, setCategories] = React.useState(Array(5).fill({}));
  const [loading, setLoading] = React.useState(false);

  React.useEffect(function(){
    setLoading(true);
    setTimeout(() => {
      fetch('https://petgram-server-alejandroverita-alejandroverita.vercel.app/categories')
      .then(res => res.json())
      .then(response =>{
        setCategories(response);
        setLoading(false);
      })
      .catch(error => ( 
        console.log('ERROR: ' + error)))
    }, 2000)
  }, []);

  return {categories, loading};

}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData([]);
  const [showFixed, setShowFixed] = React.useState(false);

  React.useEffect(function () {
    const onScroll = e =>{
      const newShowFixed = window.scrollY > 200
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed, loading) => (
    <List fixed={fixed}>
      {
        data.categories.map((category, i) => {
          return (
            <Item key={category.id || i}>
              <Category {...category} loading={loading.toString()} />
            </Item>
          )
        })
      }
    </List>
  )

  return (
    <>
      {renderList(false, loading)}
      {showFixed && renderList(true, loading)}
    </>
  )
}