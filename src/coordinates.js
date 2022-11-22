import transformation  from 'transform-coordinates';

export function ConvertCoordinates(line){
    const transform  = transformation('EPSG:4326','EPSG:31981')
    const result = transform.forward({x: parseFloat(line[1]), y: parseFloat(line[0])})
    console.log(result)
    const {x, y} = result
    return ([x, y].join(","))
}