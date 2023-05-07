
import { useRecipeContext } from "../../contexts/RecipeContext";
const RecipeFilters = ({ recipe }) => {

    const {     recipes,
        selectedRecipe,
        selectRecipe,
        addRecipe,
        updateRecipe,
        deleteRecipe } = useRecipeContext();



    return (
        <div className="filters">
            <h2>Filtros:</h2>
            <button>
                0 Lactose
            </button>
            <button>
                Sem Glúten
            </button>
            <button>
                Todas
            </button>
        </div>
    )
    
    }
    
    export default RecipeFilters;
