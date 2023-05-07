import { useRecipeContext } from '../../contexts/RecipeContext';
const ModalAdicionar = ({ children }) => {

    const {handleRecipeSelect,selectedRecipe } = useRecipeContext();
    return (
        <>
            <button type="button" className="modal-criar" data-bs-toggle="modal" data-bs-target="#exampleModal" title="Adicionar receita" >
                {selectedRecipe ? "Atualizar Receita" : "+"}
                {}
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Adicionar Nova Receita</h1>
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

export default ModalAdicionar;