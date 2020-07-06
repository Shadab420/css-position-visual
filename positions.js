let positions = {};

positions[0] = {
    style: ".child { \n\tposition: relative; \n\ttop: -30px;\n}",
    description: "Dear child! Please move 30px up from your current position."
}

positions[1] = {
    style: ".parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: absolute; \n\ttop: -30px;\n}",
    description: "Dear child! Please move 30px up from your parent's top edge."
}

positions[2] = {
    style: ".parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: absolute; \n\ttop: 0;\n}",
    description: "Dear child! Please move to the top edge of your parent."
}

positions[3] = {
    style: ".parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: relative; \n\tright: 0;\n}",
    description: "Dear child! Please move to the right edge of your parent"
}

positions[4] = {
    style: ".parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: absolute; \n\tbottom: 0;\n}",
    description: "Dear child! Please move to the bottom edge of your parent"
}

positions[5] = {
    style: ".parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: absolute; \n\tleft: 0;\n}",
    description: "Dear child! Please move to the left edge of your parent"
}

positions[6] = {
    style: ".parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: relative; \n\tleft: 0; \n\tright: 0;\n}",
    description: "Dear child! Please span from left to right inside your parent."
}

positions[7] = {
    style: ".parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: absolute; \n\ttop: 0; \n\tbottom: 0;\n}",
    description: "Dear child! Please span from top to bottom inside your parent."
}

positions[8] = {
    style: ".parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: absolute; \n\ttop: 0; \n\tleft: 0; \n\tright: 0; \n\tbottom: 0;\n}",
    description: "Dear child! Please cover the whole area inside your parent."
}

positions[9] = {
    style: ".child { \n\tposition: absolute; \n\ttop: 0;\n}",
    description: "Dear child! Please move to the top edge of the screen."
}

positions[10] = {
    style: ".child { \n\tposition: absolute; \n\tright: 0;\n}",
    description: "Dear child! Please move to the right edge of the screen."
}

positions[11] = {
    style: ".child { \n\tposition: absolute; \n\tbottom: 0;\n}",
    description: "Dear child! Please move to the bottom edge of the screen."
}

positions[12] = {
    style: ".child { \n\tposition: absolute; \n\tleft: 0;\n}",
    description: "Dear child! Please move to the left edge of the screen."
}

positions[13] = {
    style: ".child { \n\tposition: absolute; \n\ttop: 50%; \n\tleft: 0; \n\tright: 0;\n}",
    description: "Dear child! Please span from left to right of the screen."
}

positions[14] = {
    style: ".child { \n\tposition: absolute; \n\ttop: 0; \n\tbottom: 0;\n}",
    description: "Dear child! Please span from top to bottom of the screen."
}

positions[15] = {
    style: ".child { \n\tposition: absolute; \n\ttop: 0; \n\tleft: 0; \n\tright: 0; \n\tbottom: 0;\n}",
    description: "Dear child! Please cover the whole area of the screen."
}

positions[16] = {
    style: ".parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: absolute; \n\ttop: 0; \n\tleft: 0;\n}",
    description: "Dear child! Please move to the the upper left corner of your parent."
}

positions[17] = {
    style: ".parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: absolute; \n\ttop: 0; \n\tright: 0;\n}",
    description: "Dear child! Please move to the upper right corner of your parent."
}

positions[18] = {
    style: ".parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: absolute; \n\tbottom: 0; \n\tright: 0;\n}",
    description: "Dear child! Please move to the lower right corner of your parent."
}

positions[19] = {
    style: ".parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: absolute; \n\tbottom: 0; \n\tleft: 0;\n}",
    description: "Dear child! Please move to the lower left corner of your parent."
}

positions[20] = {
    style: ".parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: absolute; \n\ttop: 0; \n\tmargin-top: -50px \n\tleft: 0; \n\tmargin-left: -50px;\n}",
    description: "Dear child! Please move to the center of your parent."
}

positions[21] = {
    style: ".child { \n\tposition: absolute; \n\ttop: 0; \n\tleft: 0;\n}",
    description: "Dear child! Please move to the upper left corner of the screen."
}

positions[22] = {
    style: ".child { \n\tposition: absolute; \n\ttop: 0; \n\tright: 0;\n}",
    description: "Dear child! Please move to the upper right corner of the screen."
}

positions[23] = {
    style: ".child { \n\tposition: absolute; \n\tbottom: 0; \n\tright: 0;\n}",
    description: "Dear child! Please move to the lower right corner of the screen."
}

positions[24] = {
    style: ".child { \n\tposition: absolute; \n\tbottom: 0; \n\tleft: 0;\n}",
    description: "Dear child! Please move to the lower left corner of the screent."
}

positions[25] = {
    style: ".child { \n\tposition: absolute; \n\ttop: 0; \n\tmargin-top: -50px \n\tleft: 0; \n\tmargin-left: -50px;\n}",
    description: "Dear child! Please move to the center of the screen."
}

positions[26] = {
    style: "body{ \n\theight: 280vh; \n} \n.parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: sticky; \n\ttop: 0;\n}",
    description: "Dear child! Please be sticky relative to your parent."
}

positions[27] = {
    style: "body{ \n\theight: 250vh; \n} \n.parent{ \n\tpostion: relative; \n} \n.child { \n\tposition: fixed; \n\ttop: 0;\n}",
    description: "Dear child! Please stay fixed relative to the screen.",
}

export default positions;