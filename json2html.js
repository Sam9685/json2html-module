// json2html.js
export default function json2html(data) {
    // If no data, return empty table with headers
    if (!data || data.length === 0) {
        return `<table data-user="jainsam9685@gmail.com">
            <thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>
            <tbody></tbody>
        </table>`;
    }

    // Get all possible columns from the data
    const columns = ['Name', 'Age', 'Gender']; // Fixed columns in specified order

    // Build table header
    const headerRow = columns
        .map(col => <th>${col}</th>)
        .join('');

    // Build table body
    const bodyRows = data
        .map(row => {
            const cells = columns
                .map(col => {
                    const value = row[col];
                    return value !== undefined ? <td>${value}</td> : '';
                })
                .join('');
            return <tr>${cells}</tr>;
        })
        .join('\n          ');

    // Construct and return the complete table
    return `<table data-user="jainsam9685@gmail.com">
        <thead>
          <tr>${headerRow}</tr>
        </thead>
        <tbody>
          ${bodyRows}
        </tbody>
      </table>`;
}
