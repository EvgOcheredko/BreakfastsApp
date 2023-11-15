import * as React from 'react';

import RecipeCard, { Recipe } from './RecipeCard';

import classNames from './recipesBlock.module.css';

const RecipesBlock = () => {
  const recipes: Recipe[] = [
    {
      id: 1,
      title: 'Рецепт 1',
      description: 'Описание рецепта 1',
      imageUrl: '../../../resources/img/mainPage/main1.jpeg',
    },
    // Другие объекты рецептов
  ];

  return (
    <>
      <div className={classNames.recipesBlock}>
        <div className={classNames.recipesBlockTitle}> Favorite recipes </div>
      </div>
      <div className={classNames.recipesList}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default RecipesBlock;
