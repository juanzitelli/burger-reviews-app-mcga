export type Review = {
  _id: string;
  name: string;
  description: string;
  burger_score: number;
  bread_score: number;
  fries_score: number;
  place: string;
  is_vegan_friendly: boolean;
};
