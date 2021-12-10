export function handleGenerateBg(type){
    const types = {
        grass: '#00FF00',
        fire: '#FF0000',
        water: '#0000FF'
    }

    return types[type] || '#CCC';

}