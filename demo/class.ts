

class User {

    // TSLINT: member-ordering (public-static-field)
    // public static ADMIN_NAME: string = 'admin';

    // TSLINT: member-ordering (protected-static-field)
    // protected static COUNTER: number = 0;

    // TSLINT: member-ordering (private-static-field)
    // private static BLACKLIST_NAMES: string[] = ['foo', 'bar'];

    private static NAME_FORMAT: RegExp = /^[a-zA-Z][a-zA-Z0-9-_.]{4,}$/;
    protected static NAME_MAX_LENGTH: number = 20;
    public static NAME_MIN_LENGTH: number = 5;

    // TSLINT: member-ordering (public-field)
    // public valid: boolean;

    // TSLINT: member-ordering (protected-field)
    // protected admin: boolean;

    // TSLINT: member-ordering (private-field)
    // private tester: boolean;

    private _name: string;
    private _email: string;

    // TSLINT: member-access (constructor)
    // constructor();

    // TSLINT: member-ordering (private-constructor)
    // private constructor() {}

    // TSLINT: member-ordering (protected-constructor)
    // protected constructor() {}

    // TSLINT: member-ordering (public-constructor)
    // public constructor() {}

    public constructor(name?: string, email?: string) {
        this._name = name;
        this._email = email;
    }

    // TSLINT: member-access (check-accessor)
    // get name(): string {
    //     return this._name;
    // }
    //
    // set name(name: string) {
    //     this._name = name;
    // }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    // TSLINT: member-access
    // someMethod(): void {}

    // TSLINT: member-ordering (private-instance-method)
    // private isTester(): boolean {
    //     return false;
    // }

    // TSLINT: member-ordering (protected-instance-method)
    // protected isAdmin(): boolean {
    //     return false;
    // }

    // TSLINT: member-ordering (public-instance-method)
    // public isValid(): boolean {
    //     return false;
    // }

    // public greet(): void;
    public greet(target: string): void;

    // TSLINT: adjacent-overload-signatures
    // public someMethod(): void {}

    public greet(target: string = 'World'): void {
        console.log(`Hello ${target}!`);
    }

    protected hasName(): boolean {
        return !!this._name;
    }

    private hasEmail(): boolean {
        return !!this._email;
    }

    // TSLINT: member-ordering (private-static-method)
    // private static factory(): User {
    //     return null;
    // }

    // TSLINT: member-ordering (protected-static-method)
    // protected static create(): User {
    //     return null;
    // }

    // TSLINT: member-ordering (public-static-method)
    // public static build(): User {
    //     return null;
    // }

    public static isNameMinLength(name: string): boolean {
        return name.length >= this.NAME_MIN_LENGTH;
    }
    
    protected static isNameMaxLength(name: string): boolean {
        return name.length <= this.NAME_MAX_LENGTH;
    }
    
    private static isNameCorrect(name: string): boolean {
        return this.NAME_FORMAT.test(name);
    }

}
