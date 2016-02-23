export class HelloWorld{
    constructor(){
        this.name = '';
    }
    setName(name){ 
        this.name = name;
    }
    printPhrase(){ 
        return 'Hello ' + this.name;
    }
}
