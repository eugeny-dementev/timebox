/*
 * Simple code made inside http://raw.githack.com/MrRio/jsPDF/master/
 * to generate clean pdf file for timebox daily planning 
 * 
 * - Copy all the code
 * - Go to jsPDF Live Demo http://raw.githack.com/MrRio/jsPDF/master/ page
 * - Replace everything with copied code
 *
 * Adjust the variables if you need different day starting hour
 */

var doc = new jsPDF({
    format: 'a5',
});
doc.setFontSize(10);

const ch = 9.25; // Cell size
const tpby = 15; // Top priorities block Y starting coordinate 
let sh = 8; // Starting hour;


let nh = sh; // Next hour;
function getHour() {
    sh = nh;
    
    if (sh == 23) {
        nh = 0;
    } else {
        nh = sh + 1;
    }
    
    return sh;
}

function getHourStr(hour) {
  if (hour == 0) return '00';
  if (hour < 10) return `0${hour}`;
  return `${hour}`;
}

doc.text(10, 12, 'Top priorities:');
doc.rect(10, tpby, 59, ch * 3);
doc.line(10, tpby + ch, 69, tpby + ch);
doc.line(10, tpby + ch * 2, 69, tpby + ch * 2);

doc.text(10, 49, 'Brain dump:');
doc.rect(10, tpby + ch * 4, 59, ch * 16);

doc.text(79, 12, 'Date:');
doc.line(89, 15, 138, 15);

// Actions table
doc.text(100, 21, ':00');
doc.text(124, 21, ':30');

doc.rect(79, tpby + ch, 59, ch * 19); // Table rectangle
doc.line(79 + ch, tpby + ch, 79 + ch, tpby + ch * 20); // Vertical line for hours
const aw = (59 - ch) / 2; // Action textarea width
doc.line(79 + ch + aw, tpby + ch, 79 + ch + aw, tpby + ch * 20); // Vertical line between :00 and :30 section

const tx = 79 + ch/2 - 2; // Hour text X coordinate
doc.text(tx, tpby + ch + ch/2 + 1, getHourStr(getHour()));

// Draw cells in the actions table
for (let i = 1; i <= 18; i++) {
    const y = tpby + ch * (1 + i);
    doc.line(79, y, 79 + 59 ,y);
    
    const ty = y + ch/2 + 1;
    doc.text(tx, ty, getHourStr(getHour()));
}

// Draw dots in brain dump area
doc.setDrawColor(200, 200, 200);
const bdcolumns = Math.ceil(59 / (ch / 2));
const bdcolw = 59 / bdcolumns;
console.log('columns:', bdcolumns);
const bdrows = Math.ceil(ch * 16 / (ch / 2));
console.log('rows:', bdrows);
for (let i = 1; i < bdcolumns; i++) {
    for (let j = 1; j < bdrows; j++) {
        doc.rect(10 + i*bdcolw, (tpby + ch * 4) + j*ch/2, 0.2, 0.2);
    }
}

