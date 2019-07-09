export class Guid {
  private value: string;
  static blank = () => '00000000-0000-0000-0000-000000000000';

  static isValid(value: string) {
    const regex = RegExp(
      '^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$',
      'i'
    );
    return value.match(regex);
  }

  static create(): Guid {
    return new Guid(
      [
        Guid.generate(2),
        Guid.generate(1),
        Guid.generate(1),
        Guid.generate(1),
        Guid.generate(3)
      ].join('-')
    );
  }

  static isGuid(guid: any) {
    const value: string = guid.toString();
    return guid && (guid instanceof Guid || Guid.isValid(value));
  }

  private static generate(count: number) {
    let out = '';
    for (let i = 0; i < count; i++) {
      // tslint:disable-next-line:no-bitwise
      out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return out;
  }

  public constructor(guid: string) {
    if (!guid) {
      throw new TypeError('Invalid argument; `value` has no value.');
    }

    this.value = Guid.blank();

    if (guid && Guid.isGuid(guid)) {
      this.value = guid;
    }
  }

  public toString(): string {
    return this.value;
  }

  public toJSON(): any {
    return {
      value: this.value
    };
  }
}
