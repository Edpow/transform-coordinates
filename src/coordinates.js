import transformation  from 'transform-coordinates';

export function ConvertCoordinates(line){
    const transform  = transformation('EPSG:31981', 'EPSG:4326')
    const result = transform.forward({x: parseFloat(line[0]), y: parseFloat(line[1])})
    const {x, y} = result
    return ([y, x].join(";"))
}