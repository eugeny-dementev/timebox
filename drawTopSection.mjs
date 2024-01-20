
/**
 * Draw Top Priorities section 
 *
 * @param {jsPDF} doc - jsPDF library's doc instance
 * @param {number} x - starting X coordinate for first column, first row
 * @param {number} y - starting Y coordinate for first column, first row
 * @param {number} w - drawing section width
 * @param {number} h - drawing section height
 * @param {number} cellSize - dots always split single cellSize by 2
 *
 * @returns {number} tpBottomY - bottom Y coordinate for the section
 */
export function drawTopSection(doc, x, y, w, cellSize) {
  const tpSectionY = y + 3;
  doc.text(x, y, "Top priorities:");
  const h = cellSize * 3;
  doc.rect(x, tpSectionY, w, h);
  const tpFirstLineY = tpSectionY + cellSize;
  doc.line(x, tpFirstLineY, w + x, tpFirstLineY);
  const tpSecondLineY = tpFirstLineY + cellSize;
  doc.line(x, tpSecondLineY, w + x, tpSecondLineY);

  return tpSectionY + h;
}
