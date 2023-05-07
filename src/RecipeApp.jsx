import { RecipeForm, RecipeList, RecipeDetails, RecipeFilters, Header } from "./components/withContext";

const RecipeApp = () => {
  return (
    <div>
      <Header/>
      <RecipeFilters/>
      <RecipeForm />
      <RecipeList />
      {}
    </div>
  );
};

export default RecipeApp;
