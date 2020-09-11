
import * as d3 from 'd3';

export const nodeColor = d3.scaleLinear()
                        .range(["#E3008C", "#001D3F"]) //#001D3F #4B003F
                        .domain([0.1,60])
