import { path } from 'ramda'
import buildings from '../data/buildings.json'

export default (svg, pathCreator) => {

    const university = ['university']
    const hospital = ['hospital']
  
    const getBuildingColor = feature => {
        const type = path(['properties', 'building'], feature)
        if (university.includes(type)) {
            return 'red'
        }
        if (hospital.includes(type)) {
            return 'Green'
        }
        return 'black'
    }

     const getBuildingFillColor = feature => {
        const type = path(['properties', 'building'], feature)
        if (university.includes(type)) {
            return 'LightSalmon'
        }
        if (hospital.includes(type)) {
            return 'LightGreen '
        }
        return 'Gainsboro'
    }

    svg.selectAll('path.building')
        .data(buildings.features)
        .enter()
        .append('path')
            .attr('class', 'building')
            .attr('d', pathCreator)
            .attr('fill', getBuildingFillColor)
            .attr('stroke', getBuildingColor)
            .attr('stroke-width', 2)
            .attr('stroke-linecap', 'round')
}