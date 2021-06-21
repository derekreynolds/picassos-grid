import * as d3 from 'd3';
import React from 'react'
import { useFileImage } from '../../context/file/FileContext';
import { useD3 } from '../../hooks/useD3';
import './Grid.scss';

const Grid = (props: any) => {

  const { imageFile } = useFileImage();

  const ref = useD3(
      (svg) => {

        const height = props.config.grid.height + 100;
        const width = props.config.grid.width + 100;
        const margin = { top: 50, right: 50, bottom: 50, left: 50 };
        const INNER_WIDTH  = width - margin.left - margin.right;
        const INNER_HEIGHT = height - margin.top - margin.bottom;

        const xDomain = (INNER_WIDTH / props.config.grid.pixels);
        const yDomain = (INNER_HEIGHT / props.config.grid.pixels);
        const x         = d3.scaleLinear().domain([0, xDomain]).range([0, INNER_WIDTH]);
        const y         = d3.scaleLinear().domain([0, yDomain]).range([INNER_HEIGHT, 0]);
        const xAxisGrid = d3.axisBottom(x).tickSize(-INNER_HEIGHT).ticks(xDomain);
        const yAxisGrid = d3.axisLeft(y).tickSize(-INNER_WIDTH).ticks(yDomain);   
  
        svg.selectAll("*").remove();
        
        svg.attr('height', height - 50)
          .attr('width', width);

        svg.append('image')
          .attr('xlink:href', imageFile?.file)
          .attr('height', INNER_HEIGHT)
          .attr('width', INNER_WIDTH)
          .attr('x', margin.right)
          .attr('y', 0);

        const xAxis = svg.append('g')
          .attr('class', 'x axis-grid')
          .attr('transform', 'translate(50,' + INNER_HEIGHT + ')')
          .style("color", props.config.grid.color)
          .call(xAxisGrid);
          
        xAxis.selectAll('text')
            .style('text-anchor', 'end')
            .attr("dx", "1.5em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(90)");

        xAxis.selectAll('line')
            .style('opacity', props.config.grid.opacity)
          ;

      const yAxis =svg.append('g')
          .attr('class', 'y axis-grid')
          .attr('transform', 'translate(' + margin.left + ', 0)')
          .style("color", props.config.grid.color)
          .call(yAxisGrid)
          .selectAll("line")
            .style('opacity', props.config.grid.opacity);

      yAxis.selectAll("text")
            .style("text-anchor", "end");   
      
      },
      [props]
    );

    return (
        <div>
            <svg ref={ref}>
            </svg>
        </div>
    )
}

export default Grid