class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    detail() {
        document.writeln(this.id + " " + this.name + "<br>")
    }
}