const React = require('react');


class New extends React.Component {
  render() {
    return (
        <form action="/logs" method="POST">
          <fieldset>
            {/* <legend>Create a New Snack</legend> */}
            <label>
              NAME:<input type="text" name="title" placeholder="enter name" />
            </label>
            
            <label for="entry">Entry:
            <textarea id="entry" name="entry"></textarea> 
            </label>

            <label>
            <input type="checkbox" name="shipIsBroken" value="true" />
             Ship is broken
           </label>

          </fieldset>
          <input type="submit" name="Submit" /> 
        </form>
    )
  }
}

module.exports = New;