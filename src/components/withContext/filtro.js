<div>
<h2>Lista de Receitas</h2>
<div className="recipe-list">
  {recipes.map((recipe) => (
    <RecipeItem
      key={recipe.restrictionLactose}
      recipe={recipe}
    />
  ))}
</div>
</div>