const React = require('react');
const DefaultLayout = require('../Default');

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div>
          {
            this.props.logs.map((log) => (
              <article>
                <a href={`/logs/${log._id}`}>
                  <h2>
                    { log.name } costs { `$${log.cost}` } and is { log.calories } Calories!
                  </h2>
                </a>
              </article>
            ))
          }
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index;