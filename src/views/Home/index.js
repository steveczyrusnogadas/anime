import React, { useState } from 'react';
import AnimeSearch from '../../components/Anime/search';
import Breadcrumbs from '../../components/Anime/breadcrumbs';
import BreadcrumbItem from '../../components/Anime/breadcrumbItem';

/**
 * Created a home page to make the app more readable
 */
const Home = () => {
  const [breadcrumbs, setBreadcrumbs] = useState(['Home', 'Category', 'Subcategory']);

  const addBreadcrumb = () => {
    setBreadcrumbs(b => [...b, `Item ${b.length + 1}`]);
    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');

  };

  const removeBreadcrumb = () => {
    setBreadcrumbs(b => b.slice(0, -1));
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

  };

  return (
    <>
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center pb-5">
        <h1 className="text-5xl font-extrabold">Anime Searcher</h1>
        <p className="text-lg font-bold italic">
          Explore the epicness of your favorite anime!
        </p>
      </div>

      <AnimeSearch className="py-5" />
      
    </div>
    <Breadcrumbs items={breadcrumbs} />
      <button onClick={addBreadcrumb}>Add Breadcrumb</button>
      <button onClick={removeBreadcrumb}>Remove Breadcrumb</button>
{/* 
      <Breadcrumbs>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Category</BreadcrumbItem>
        <BreadcrumbItem>Subcategory</BreadcrumbItem>
        <BreadcrumbItem>Item</BreadcrumbItem>
        <BreadcrumbItem>Item</BreadcrumbItem>
        <BreadcrumbItem>Item</BreadcrumbItem>
        <BreadcrumbItem>Item</BreadcrumbItem>
        <BreadcrumbItem>Item</BreadcrumbItem>
      </Breadcrumbs> */}
    </>
  );
};

export default Home;
