/**
 * Draw dots inside text area section for writing aligement
 *
 * @param {jsPDF} doc - jsPDF library's doc instance
 * @param {number} x - starting X coordinate for first column, first row
 * @param {number} y - starting Y coordinate for first column, first row
 * @param {number} w - drawing section width
 * @param {number} h - drawing section height
 * @param {number} cellSize - dots always split single cellSize by 2
 */
export function drawDots(doc, x, y, w, h, cellSize) {
  const cols = Math.ceil(w / (cellSize / 2));
  const rows = Math.ceil(h / (cellSize / 2));

  const columnWidth = w / cols;
  const rowHeight = h / rows;

  doc.setDrawColor(200, 200, 200); // switch to grey color for dots

  for (let c = 1; c < cols; c++) {
    for (let r = 1; r < rows; r++) {
      doc.rect(
        x + columnWidth * c,
        y + rowHeight * r,
        0.2,
        0.2,
        // 'F' as fifth parameter in "rect" method means fill rectangle inner space
        // but with 0.2 mm size it's small enough for it to be unnecesary.
      );
    }
  }

  doc.setDrawColor(0, 0, 0); // switch back to black color
}
