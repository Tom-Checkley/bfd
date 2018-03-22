export class Blog {
  constructor(
    public postTitle: string,
    public postContent: string,
    public postLocation: string,
    public posted,
    public imgTitle: string,
    public img?: any,
    public id?: string
  ) {}
}
