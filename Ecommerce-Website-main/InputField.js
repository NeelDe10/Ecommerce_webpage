'use strict';

const element = React.createElement;

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  render() {
    return element('input', {
      onChange: e => this.setState({ name: e.target.value }),
      value: this.state.name,
      type: 'text'
    });
  }
}

const domContainer = document.querySelector('#input-field');
ReactDOM.render(element(InputField), domContainer);
