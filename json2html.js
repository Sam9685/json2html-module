// json2html.js

export default function json2html(data) {
  const table = document.createElement('table');
  table.dataset.user = 'jainsam9685@gmail.com';

  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  headerRow.insertCell().textContent = 'Name';
  headerRow.insertCell().textContent = 'Age';
  headerRow.insertCell().textContent = 'Gender';

  const tbody = table.createTBody();
  data.forEach(item => {
    const row = tbody.insertRow();
    row.insertCell().textContent = item.Name;
    row.insertCell().textContent = item.Age;
    row.insertCell().textContent = item.Gender || '';
  });

  return table.outerHTML;
}
