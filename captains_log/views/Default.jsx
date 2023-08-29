const React = require('react');


class Default extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Log Form</title>
          <style>
            {`
              body {
                font-family: Arial, sans-serif;
              }

              h1 {
                color: #333;
              }

              label {
                font-weight: bold;
              }

              select, input {
                padding: 5px;
                margin-bottom: 10px;
                border: 1px solid #ccc;
                border-radius: 3px;
              }

              input[type="submit"] {
                background-color: #007bff;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
              }
            `}
          </style>
        </head>
        <body>
          <h1>The Logs App</h1>
          <form action="/submit-log" method="post">
            {/* ... your form elements */}
          </form>
          <main>
            {this.props.children}
          </main>
        </body>
      </html>
    );
  }
}

module.exports = Default;
