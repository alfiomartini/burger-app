export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  description: string;
}

export interface WeakIngredient {
  name: string;
  quantity: number;
  description: string;
}

interface BurgerIngredient {
  name: string;
  quantity: number;
}

export interface Burger {
  id: string;
  name: string;
  description: string;
  ingredients: BurgerIngredient[];
}
