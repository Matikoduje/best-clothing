import './category-item.styles.scss';

const CategoryItem = ({ categoryTitle, categoryImageUrl }) => {
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${categoryImageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{categoryTitle}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
