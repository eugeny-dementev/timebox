/**
 * Draw Brain Dump section
 *
 * @param {jsPDF} doc - jsPDF library's doc instance
 * @param {number} x - starting X coordinate
 * @param {number} y - starting Y coordinate
 * @param {number} w - section width
 * @param {number} h - section height
 */
export function drawBrainDump(doc, x, y, w, h) {
  doc.text(x, y, "Brain dump:");
  const bdSectionY = y + 3;
  doc.rect(x, bdSectionY, w, h);
}
