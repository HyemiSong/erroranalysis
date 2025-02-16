
import * as d3 from 'd3';

export const nodeColor = d3.scaleLinear()
                        .range(["#B2B7BD", "#E3008C", "#001D3F"]) //#001D3F #4B003F
                        .domain([0.5,60])

export const nodeColor1 = d3.scaleLinear()
                        .range(["#F4D2DC","#EBAEBF","#D76787","#C52E59","#BC1948","#AA1640","#8F1336","#6A0E28"])
                        .domain([0.4,10])
export const nodeHighlight = "#0078D4";
export const treeBg = "#FFFFFF" //"#F4F4F4" "#FFFFFF"
export const pill = {txtPaddingX:16, txtPaddingY:10, stroke: "#0078D4"}
export const metrixColor = {black: "#000000", unknown: "#949494"}