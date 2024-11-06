export default function json2html(data) {
    // Extract unique headers from the data array
    const headers = Array.from(
      data.reduce((acc, obj) => {
        Object.keys(obj).forEach((key) => acc.add(key));
        return acc;
      }, new Set())
    );

    // Generate HTML for the table headers
    const headerHTML = headers.map((header) => `<th>${header}</th>`).join('');
    
    // Generate HTML for the table rows
    const rowsHTML = data
      .map((row) => {
        const cells = headers.map((header) => `<td>${row[header] || ''}</td>`).join('');
        return `<tr>${cells}</tr>`;
      })
      .join('');

    // Return the final HTML string for the table
    return `
      <table data-user="jainsam9685@gmail.com">
        <thead>
          <tr>${headerHTML}</tr>
        </thead>
        <tbody>
          ${rowsHTML}
        </tbody>
      </table>
    `;
}
