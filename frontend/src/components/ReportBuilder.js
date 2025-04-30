
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import React from "react";

const ReportBuilder = () => {
  const generatePDF = () => {
    const input = document.getElementById("report-content");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 10, 210, 0);
      pdf.save("IR_TTX_Report.pdf");
    });
  };

  return (
    <div>
      <div id="report-content" className="p-4 bg-white text-black">
        <h2>📄 IR TTX Post-Exercise Report</h2>
        <p>Scenario: [Phishing Attack]</p>
        <p>Time Taken: 12:45</p>
        <p>Decisions: Accurate 6 / Missed 2</p>
        <p>Badges: Fastest Decision ⚡</p>
      </div>
      <button onClick={generatePDF} className="comic-button mt-4">📄 Generate PDF Report</button>
    </div>
  );
};

export default ReportBuilder;
