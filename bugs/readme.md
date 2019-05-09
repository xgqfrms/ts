# bugs


1. 'super' can only be referenced in a derived class.ts(2335)

https://github.com/Microsoft/TypeScript/issues/19068

https://stackoverflow.com/questions/42169596/typescript-class-inheritance-super-can-only-be-referenced-in-members-of-deriv



```ts
// error
module Timers {
    export class App {
        el: HTMLElement;
        span: HTMLElement;
        timer: string;
        constructor(props: Object) {
            super(props);
            this.el = props.el
        }
    }
}

```

```ts
// ok
module Timers {
    export class App {
        el: HTMLElement;
        span: HTMLElement;
        timer: string;
        constructor(props) {
            // super(props);
            this.el = props.el
        }
    }
}

```
