import React from 'react';
import SearchCard from 'components/layout/Search/SearchDayMenuPublish'
import './styles.css'



const PagesAppCards = () => {
  const id = 2
  return (
        <div className="layout_margin">
        <SearchCard id={id}></SearchCard>
        </div>
  )

}
export default PagesAppCards;