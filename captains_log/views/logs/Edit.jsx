const React = require('react');
const DefaultLayout = require('../Default');

class Edit extends React.Component {
  render() {
    const log = this.props.log;
    return (
      <DefaultLayout>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
            <fieldset>
            <legend>Edit --{log.title}-- </legend>

            <input type="hidden" name="_id" value={log._id} />
            <input type="hidden" name="createdAt" value={log.createdAt} />
            <input type="hidden" name="updatedAt" value={log.updatedAt} />

            <label style={{marginLeft:'5px', minWidth:'120px'}}  htmlFor="title">
              Title:<input type="text" name="title" placeholder="enter title"  value={log.title}/>
            </label>
            <br/>
            <br/>
            
            <label style={{verticalAlign: 'top'}}  htmlFor="entry">Entry:
            <textarea id="entry" name="entry" value={log.entry}></textarea> 
            </label>
            <br/>

            <label htmlFor="shipIsBroken">
            <input type="checkbox" name="shipIsBroken" value="true" />
             Ship is broken
            </label>
            <br/>

          </fieldset>
          <input type="submit" value="Submit changes to LOG" />
          {/* <a href="/logs/"><button>Back to Main</button></a> */}
        </form>
      </DefaultLayout>
    )
  }
};

module.exports = Edit;