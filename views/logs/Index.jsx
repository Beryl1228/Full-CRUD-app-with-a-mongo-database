const React = require('react');
const DefaultLayout = require('../Default');

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div>
          <ul>
          {
            this.props.logs.map((log) => (
              <li key={log._id}>
                  <div>
                  <a href={`/logs/${log._id}`}>
                   <h2>Title: {log.title} </h2>
                   </a>            
                 </div>
              </li>           
            ))
          }
          </ul>
          <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '20px 0' ,fontSize: "25px"}}>
          <a href="/logs/new/" >Create More Logs</a>
        </div>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index;
