const addCards = (data) => {
    // initialize empty card array
    let cards = [];

    for (i = 0; i < data.length; i++) {
        if (data[i].role === 'Manager') {
            cards.push(`
                <div class="card border-info mb-3" style="width: 18rem;">
                        <div class="card-header">Manager</div>
                        <div class="card-body">
                            <h5 class="card-title">${data[i].name}</h5>
                            <p class="card-text">ID: ${data[i].id}</p>
                            <p class="card-text">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></p>
                            <p class="card-text">Office Number: ${data[i].officeNumber}</p>
                        </div>
                </div>
                `)
        } else if (data[i].role === 'Engineer') {
            cards.push(`
                <div class="card border-info mb-3" style="width: 18rem;">
                    <div class="card-header">Engineer</div>
                    <div class="card-body">
                        <h5 class="card-title">${data[i].name}</h5>
                        <p class="card-text">ID: ${data[i].id}</p>
                        <p class="card-text">Email: 
                            <a href="mailto:${data[i].email}">${data[i].email}</a>
                        </p>
                        <p class="card-text">github: 
                            <a href="https://github.com/${data[i].gitHub}" target="_blank">${data[i].gitHub}</a>
                        </p>
                    </div>
                </div>
                `)
        } else if (data[i].role === 'Intern') {
            cards.push(`
                <div class="card border-info mb-3" style="width: 18rem;">
                    <div class="card-header">Intern</div>
                    <div class="card-body">
                        <h5 class="card-title">${data[i].name}</h5>
                        <p class="card-text">ID: ${data[i].id}</p>
                        <p class="card-text">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></p>
                        <p class="card-text">School: ${data[i].school}</p>
                    </div>
                </div>
                `)
        }
    }

    return cards
}

const generateHTML = (data) => {
    return `
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The Squad</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    </head>
    <body>
    <header class="bg-dark">
      <h1>My Team</h1>
    </header>
    <main class="container">
    <div class="row justify-content-center">
        ${addCards(data)}
    </div>
    </main>
    </body>
    </html>`;

}

module.exports = generateHTML;