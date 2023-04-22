d3.csv('ue_industry.csv', data => {

    // Define your scales and generator here.
    var x = d3.scaleLinear()
        .domain(d3.extent(data, function (d) { return d.index; }))
        .range([0, width]);

    var y = d3.scaleLinear()
        .domain(d3.extent(data, function (d) { return d.Agriculture; }))
        .range([height, 0]);

    let line3 = d3.line()
        .x(d => xScale(d.index))
        .y(d => yScale(d.Agriculture));

    d3.select('#answer1')
        // append more elements here
        .append('path')
        .attr('d', line3(data))
        .attr('stroke', '#2e2928')

});
