const React = require('react');
const DefaultLayout = require('../Default');




class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <form action="/logs" method="POST">
          <fieldset>
            <legend>Create a New Log</legend>
            <label style={{marginLeft:'5px'}}  htmlFor="title">
              Title:<input type="text" name="title" placeholder="enter title" />
            </label>
            <br/>
            <br/>
            
            <label style={{verticalAlign: 'top'}}  htmlFor="entry">Entry:
            <textarea id="entry" name="entry"></textarea> 
            </label>
            <br/>

            <label htmlFor="shipIsBroken">
            <input type="checkbox" name="shipIsBroken" value="true" />
             Ship is broken
            </label>
            <br/>

          </fieldset>
          <input type="submit" name="Submit" /> 
        </form>
        </DefaultLayout>
    )
  }
}

module.exports = New;