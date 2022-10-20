import CategoryItem from '../category-item/category-item.component';
import './category-menu.styles.scss';

const CategoryMenu = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map(({ id, title, imageUrl }) => {
        return (
          <CategoryItem
            key={id}
            categoryTitle={title}
            categoryImageUrl={imageUrl}
          />
        );
      })}
    </div>
  );
};

export default CategoryMenu;
