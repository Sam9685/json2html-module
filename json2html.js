

export default function json2html(data) {
    const headers = Array.from(
      data.reduce((acc, obj) => {
        Object.keys(obj).forEach((key) => acc.add(key));
        return acc;
      }, new Set())
    );
  
    const headerHTML = headers.map((header) => <th>${header}</th>).join('');
    const rowsHTML = data
      .map((row) => {
        const cells = headers.map((header) => <td>${row[header] || ''}</td>).join('');
        return <tr>${cells}</tr>;
      })
      .join('');
  
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