import React from 'react';
import { useSelector } from 'react-redux';
import { groupPlantsByCategory } from '../redux/reducers';
import PlantCard from './PlantCard';

const ProductListing = () => {
  const plants = useSelector(state => state.plants);
  const groupedPlants = groupPlantsByCategory(plants);

  return (
    <div className="product-listing">
      <h1 className="page-title">Our Houseplants Collection</h1>
      
      {Object.keys(groupedPlants).map(category => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category} Plants</h2>
          <div className="plants-grid">
            {groupedPlants[category].map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;