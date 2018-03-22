export class Blog {
  constructor(
    public postTitle: string,
    public postContent: string,
    public postLocation: string,
    public posted,
    public imgTitle: string,
    public date: Date,
    public img?: any,
    public id?: string
  ) {}
}
