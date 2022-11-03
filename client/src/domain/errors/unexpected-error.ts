export class UnexpectedError extends Error {
    constructor(){
        super("Something Went Wrong")
        this.name = "UnexpectedError"
    }
}