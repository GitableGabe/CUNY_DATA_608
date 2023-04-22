d3.csv('ue_industry.csv', data => {

    let line = d3.line()
        .x(d => d.x)
        .y(d => d.y)

    d3.select('#answer1')
        .append('path')
        .attr('d', line(data))
        .attr('stroke', '#2e2928')

});
