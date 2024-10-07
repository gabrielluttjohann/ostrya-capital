declare module "rellax" {
  export default class Rellax {
    constructor(selector: string, options?: any);
    destroy(): void;
    refresh(): void;
  }
}
