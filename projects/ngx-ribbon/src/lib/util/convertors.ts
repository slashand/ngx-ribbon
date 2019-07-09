/**
 * https://github.com/NG-ZORRO/ng-zorro-antd/blob/9d63c57bde340d85c33073a30569f078ce6b9fc0/components/core/util/convert.ts
 */
import {
    coerceBooleanProperty, coerceCssPixelValue, coerceNumberProperty
} from '@angular/cdk/coercion';

type FunctionProp<T> = (...args: any[]) => T; // tslint:disable-line:no-any

export function toBoolean(value: boolean | string): boolean {
  return coerceBooleanProperty(value);
}

/**
 * Get the function-property type's value
 */
export function valueFunctionProp<T>(prop: FunctionProp<T>, ...args: any[]): T {
  return typeof prop === 'function' ? prop(...args) : prop;
}

function propDecoratorFactory<T, D>(
  name: string,
  fallback: (v: T) => D
): (target: any, propName: string) => void {
  function propDecorator(target: any, propName: string): void {
    const privatePropName = `$$__${propName}`;

    if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
      console.warn(
        `The prop "${privatePropName}" already exist, it will be overrided by ${name} decorator.`
      );
    }

    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true
    });

    Object.defineProperty(target, propName, {
      get(): string {
        return this[privatePropName]; // tslint:disable-line:no-invalid-this
      },
      set(value: T): void {
        this[privatePropName] = fallback(value); // tslint:disable-line:no-invalid-this
      }
    });
  }

  return propDecorator;
}

/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * Why not using @InputBoolean alone without @Input? AOT needs @Input to be visible
 *
 * Write as follows:
 *
 * :@Input() @InputBoolean() visible: boolean = false;
 *
 * Instead of as below:
 *
 * _visible = false;
 * :@Input()
 * get visible() { return this.__visibile; }
 *
 * set visible(value) { this.__visible = value; }
 *
 */
export function InputBoolean(): any {
  // tslint:disable-line: no-any
  return propDecoratorFactory('InputBoolean', toBoolean);
}
