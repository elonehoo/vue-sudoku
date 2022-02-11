export class SudokuContent{
    content:string
    isLocked:boolean

    constructor(content:string ,isLocked:boolean) { 
        this.content = content
        this.isLocked = isLocked 
    }
}

export function SudokuArray(array:string[]):SudokuContent[] {
    var sudokuContentArray:SudokuContent[] = new Array(array.length)

    for(var i = 0 ; i < array.length ; i++ ){
        sudokuContentArray[i] = new SudokuContent(array[i], array[i] === "0" ? true : false)
    }

    return sudokuContentArray
}

export function ArraySudoku(array:SudokuContent[]):string[]{
    var value:string[] = new Array(array.length)
    for(var i = 0 ; i < array.length ; i++ ){
        value[i] = array[i].content
    }
    return value
}