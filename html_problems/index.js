// Function to append the same amount of td elements previously added

function appendRow() {
    const totalTDs = document.querySelectorAll('tbody td')
    const tbodyElement = document.querySelector('tbody')
    const trElement = document.createElement('tr')
    tbodyElement.append(trElement)
    totalTDs.forEach((item) => {
        const tdElement = document.createElement('td')
        trElement.append(tdElement)
    })
  }

  // Example case.
//   document.body.innerHTML = `
//   <table id="tbl" border="1">
//     <tbody>
//       <tr>
//         <td></td>
//         <td></td>
//       </tr>
//     </tbody>
//   </table>`;

  appendRow();

  console.log(document.body.innerHTML);
