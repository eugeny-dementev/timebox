/**
  * @returns object: jsPDF doc instance 
  */
export function prepareDoc() {
  let JSPDF = null;

  try {
    JSPDF = jsPDF; // global
  } catch (e) {
    JSPDF = jspdf.jsPDF; // global
  }

  var doc = new JSPDF({
    format: "a5",
  });

  doc.setFontSize(10);

  return doc;
}
