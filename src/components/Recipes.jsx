import Recipe from "./Recipe"

export default function Recipes(props) {
    if (props.done === true)
        return (
            <div className="float-container">
                <h2>Recipes Done: {props.recipesDone.length}</h2>
                {props.recipesDone.map((recipe) => <Recipe key={recipe.name} name={recipe.name}
                    cookingMethod={recipe.cookingMethod} imgSrc={recipe.imgSrc} done={true} eatDish={props.eatDish} />)}
            </div>
        );

    return (
        <div className="float-container">
            <h2>Recipes</h2>
            <h3>Recipes Made:</h3>
            {props.recipes.map((recipe) => <Recipe key={recipe.name} name={recipe.name}
                cookingMethod={recipe.cookingMethod} imgSrc={recipe.imgSrc} prepareDish={props.prepareDish} />)}
        </div>
    );
}