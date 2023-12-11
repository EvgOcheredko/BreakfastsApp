import * as React from 'react';

import RecipeCard, { Recipe } from './RecipeCard';

import classNames from './recipesBlock.module.css';

import main1 from '../../../resources/img/mainPage/main1.jpeg';

const RecipesBlock = () => {
  const recipes: Recipe[] = [
    {
      id: 1,
      title: 'Тортилья с авокадо и лососем',
      description: 'Ингредиенты:' + '1. ',
      imageUrl: main1,
    },
    {
      id: 2,
      title: 'Тортилья с авокадо и лососем',
      description: 'Ингредиенты:' + '1. ',
      imageUrl: main1,
    },
    {
      id: 3,
      title: 'Тортилья с авокадо и лососем',
      description: 'Ингредиенты:' + '1. ',
      imageUrl: main1,
    },
    {
      id: 4,
      title: 'Тортилья с авокадо и лососем',
      description: 'Ингредиенты:' + '1. ',
      imageUrl: main1,
    },
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
