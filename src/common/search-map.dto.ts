export class SearchMap {
  value: string | unknown;
  field: string;

  constructor(value: string | unknown, field: string) {
    this.value = value;
    this.field = field;
  }
}
