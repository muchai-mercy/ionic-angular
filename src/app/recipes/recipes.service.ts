import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "recipe1",
      title: "Chicken Wings",
      imageUrl: "https://img.taste.com.au/Xyf96oGw/w720-h480-cfill-q80/taste/2016/11/sticky-fanta-chicken-wings-104369-1.jpeg",
      ingredients: ["wings", "pepper", "cayenne", "honey"],
    },
    {
      id: "recipe2",
      title: "Pork Ribs",
      imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5095084.jpg&w=550&h=550&c=sc&poi=face&q=85",
      ingredients: ["pork", "tomatoes", "cayenne", "barbecue sauce"],
    }
  ];
  constructor() { }
  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {...this.recipes.find((recipe: any) => {
      return recipe.id === recipe.id;
    })
  };
  }
}
