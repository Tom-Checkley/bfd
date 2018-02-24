export class Blog {
  constructor(
    public title: string,
    public content: string,
    public location: string,
    public imgTitle: string,
    public img?: any,
    public id?: string
  ) {}
}
