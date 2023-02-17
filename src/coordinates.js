import transformation  from 'transform-coordinates';

export function ConvertCoordinates(line,fromMap, toMap){
    try{
    const transform  = transformation(fromMap,toMap)
    const result = transform.forward({x: parseFloat(line[1]), y: parseFloat(line[0])})
    console.log(result)
    const {x, y} = result
    return ([x,y].join(","))
    }
    catch(err){
        return ("Erro")
    }
}