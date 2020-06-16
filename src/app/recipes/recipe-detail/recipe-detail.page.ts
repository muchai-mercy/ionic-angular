import {Component, OnInit} from "@angular/core";
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController
    ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("recipeId")) {
        this.router.navigate(["/recipes"]);
        return;
      }
      const recipeId: string = paramMap.get("recipeId");
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe = async () => {
    this.alertCtrl.create({
      header: "Are you sure?",
      message: "Do you really wanna delete this recipe?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
      }, {
        text: "Delete",
        handler: async () => {
          await this.recipesService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(["/recipes"]);
        }
      }
    ]
    }).then((alertElement: any) => {
      alertElement.present();
    });
  }
}
