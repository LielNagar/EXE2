import { Component } from "react";
import Recipes from "./Recipes";

export let recipes = [
    {
        name: 'Chop Suey',
        cookingMethod: '5 minute stir fry,add each vegetable in the order in which they cook.',
        imgSrc: 'https://kirbiecravings.com/wp-content/uploads/2020/04/chop-suey-5.jpg'
    }, {
        name: 'Pad Thai',
        cookingMethod: 'stir-fry dish, mix all ingredients together',
        imgSrc: 'https://glebekitchen.com/wp-content/uploads/2016/11/easypadthaibowltop-1-500x500.jpg'
    }, {
        name: 'Pho',
        cookingMethod: 'slow-cooked soup',
        imgSrc: 'https://www.fodmapeveryday.com/wp-content/uploads/2017/06/Pho-closeup-copy-855x570.jpg'
    }, {
        name: 'Hamburger',
        cookingMethod: 'Grill for 7 minutes',
        imgSrc: 'https://www.allrecipes.com/thmb/9-DRrZRmNtyPNVjL-3BKQLMOMrc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/49404-Juiciest-Hamburgers-Ever-mfs-052-4ee37878e27b4e409b54f2a8f7313f99.jpg'
    }, {
        name: 'Pizza',
        cookingMethod: 'Put tomato sauce on a dough and bake with cheese for 15 minuets',
        imgSrc: 'https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg'
    }]

export default class MyKitchen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes,
            done: []
        }
    }
    render() {
        return (
            <div className="MyKitchen">
                <Recipes recipes={this.state.recipes} prepareDish={this.prepareDish} />
                {this.state.done.length > 0 ? <Recipes done={true} recipesDone={this.state.done} eatDish={this.eatDish} /> : null}
            </div>
        );
    }

    prepareDish = (name, cookingMethod, imgSrc) => {
        const recipeDone = {
            name,
            cookingMethod,
            imgSrc
        }

        const newRecipes = this.state.recipes.filter((recipe) => recipe.name !== name)
        this.state.done.push(recipeDone)
        this.setState({ recipes: newRecipes })
    }

    eatDish = (name, cookingMethod, imgSrc) => {
        const recipeToReturn = {
            name,
            cookingMethod,
            imgSrc
        }
        const newRecipes = [...this.state.recipes, recipeToReturn]
        const newDone = this.state.done.filter((recipe) => recipe.name !== name)
        this.setState({ recipes: newRecipes, done: newDone })
    }
}