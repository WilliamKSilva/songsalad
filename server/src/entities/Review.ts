export class Review {
  public readonly id: string;

  public type: string;
  public description: string;
  public rate: number;
  public reviewed_item_id: string;

  constructor(props: Omit<Review, 'id'>, id?: string) {
    Object.assign(this, props);
  }
}