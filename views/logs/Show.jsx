const React = require('react');
const DefaultLayout = require('../Default');

class Show extends React.Component {
  render() {
    const log = this.props.log; // 从属性中获取日志对象

    // Format the createdAt timestamp
    const formattedCreatedAt = new Date(log.createdAt).toLocaleString();

    return (
      <DefaultLayout>
        <div>
          <article>
            <ul>
              <li key={log._id}>
                <div>
                  <p>Entry: {log.entry}</p>
                  <p>Ship status: {log.shipIsBroken ? 'Damaged' : 'OK'}</p>
                  <small>Logged at {formattedCreatedAt}</small>
                </div>
              </li>
            </ul>
            <br /> 

            <a href={`/logs/${log._id}/Edit`}><button>Edit</button></a>

            <div style={{ textAlign: 'justify' }}> {/* 右对齐按钮 */}
              <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete" />
              </form>
              <a href="/logs/"><button>Back to Main</button></a>
            </div>
          </article>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Show;
