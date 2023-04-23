d3.csv('ue_industry.csv', data => {

     // Define your scales and generator here.

    let xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => +d.index))
        .range([20, 1180]);

    let yScale = d3.scaleLinear()
        .domain(d3.extent(data, d => +d.Agriculture))
        .range([580, 20]);


    let line_q1 = d3.line()
        .x(d => xScale(d.index))
        .y(d => yScale(d.Agriculture))

    d3.select('#answer1')
    // append more elements here
    //    .selectAll('circle')
        .data(data)
        .enter()
        .append('path')
        .attr('d', line_q1(data))
        .attr('stroke', '#2e2928')


    /*    .attr('r', d => 5)
        .attr('cx', d => xScale(d.index))
        .attr('cy', d => yScale(d.Agriculture));
    */

});