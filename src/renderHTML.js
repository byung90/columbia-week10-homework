const fs = require('fs');
const path = require('path');

function renderHTML(teamMembers) {
  let HTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    </head>
  
    <body>
      <div class="container">
        <header>
          <h1>The Team</h1>
        </header>
        <div class="row">
          <div class="col-12">`;

  teamMembers.forEach(teamMember => {
    HTML += `<div class="card col-3">
      <div class="card-header">
        <h1>${teamMember.name}<h1>
        <h1>${teamMember.constructor.name}</h1>
      </div>
      <div class="card-body">
        <p class="card-text">ID: ${teamMember.id}</p>
        <p class="card-text">Email: <a href="mailto:${teamMember.email}">${teamMember.email}</a></p>
        ${roleSpecificData(teamMember)}
      </div>
    </div>
    `
  });

  HTML += `</div>
  </div>
  </div>
  </body>
  </html>`


  fs.writeFile('dist/team.html', HTML, err => {
    err ? console.error(err) : console.log('team.html successfully created.');
  })
}

function roleSpecificData(teamMember) {
  switch (teamMember.constructor.name) {
    case 'Manager':
      return `<p class="card-text">Office Number: ${teamMember.officeNumber}</p>`
      break;
    case 'Engineer':
      return `<p class="card-text">Github: <a href="https://github.com/${teamMember.github}">${teamMember.github}</a>`
      break;
    case 'Intern':
      return `<p class="card-text">School: ${teamMember.school}</p>`
  }
}

module.exports = renderHTML;