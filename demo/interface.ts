

interface Editable {}


interface Styled {
    className?: string;
}

interface Button extends Styled {}


interface Project {
    name: string;
}

interface Builder<T> {
    build(): T;
}

interface ProjectBuilder extends Builder<Project> {}
