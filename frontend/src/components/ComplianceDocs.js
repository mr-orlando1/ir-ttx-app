
import React from 'react';

const ComplianceDocs = () => (
  <div style={{ flex: 1, padding: '20px' }}>
    <h2>Compliance & Framework Mapping</h2>
    <p>This platform aligns tabletop execution with:</p>
    <ul>
      <li><strong>NIST SP 800-84</strong>: Guide to Test, Training, and Exercise Programs</li>
      <li><strong>CIS Controls v8.1</strong>: Implementation Group Mapping</li>
      <li><strong>NIST Cybersecurity Framework</strong> (CSWP-29)</li>
      <li><strong>Agio TTX Requirements</strong></li>
    </ul>

    <h3>Reference Documents</h3>
    <ul>
      <li><a href="/compliance-docs/NIST SP 800-84.pdf" target="_blank">📄 NIST SP 800-84</a></li>
      <li><a href="/compliance-docs/cis_controls__v8.1_guide__2024_0801.pdf" target="_blank">📄 CIS Controls v8.1</a></li>
      <li><a href="/compliance-docs/NIST.CSWP.29.pdf" target="_blank">📄 NIST Cybersecurity Framework</a></li>
      <li><a href="/compliance-docs/TTX Requirement V1.pdf" target="_blank">📄 Agio TTX Requirement V1</a></li>
    </ul>
  </div>
);

export default ComplianceDocs;
