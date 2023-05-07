import { useRecipeContext } from '../../contexts/RecipeContext';
const ModalSelecionar = ({ children,recipe }) => {

    const {handleRecipeSelect,selectedRecipe } = useRecipeContext();

    return (
        <>
            <button type="button" className="modal-selecionar" data-bs-toggle="modal" data-bs-target="#selecionarModal" title="Editar receita" onClick={() => handleRecipeSelect(recipe)} >
            !
            </button>
            <div className="modal fade" id="selecionarModal" tabIndex="-1" aria-labelledby="selecionarModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="selecionarModalLabel">Detalhes Receita</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalSelecionar;
