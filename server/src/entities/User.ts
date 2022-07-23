export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public profile_pic: string;
  public bio: string | null;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);
  }
}