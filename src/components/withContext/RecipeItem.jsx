import { useRecipeContext } from '../../contexts/RecipeContext';
import ModalAdicionar from './ModalAdicionar';
import ModalSelecionar from './ModalSelecionar';
import RecipeDetails from './RecipeDetails';
import RecipeForm from './RecipeForm';

const RecipeItem = ({ recipe }) => {
  const { deleteRecipe, selectRecipe, handleRecipeSelect } = useRecipeContext();

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    selectRecipe(null);
  };

  return (
    <div className='recipe-item'>
      <h4>{recipe.title}</h4>
      {}
      <button id="botao_deletar" onClick={handleDelete}>Deletar</button>
      {}
        <ModalSelecionar>
          <RecipeDetails/>
          <ModalAdicionar/>
        <button onClick={() => handleRecipeSelect(recipe)}>	&#33; Selecionar 2</button>
        </ModalSelecionar>
    </div>
  );
};

export default RecipeItem;
