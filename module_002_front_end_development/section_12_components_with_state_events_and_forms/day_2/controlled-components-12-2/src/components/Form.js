import React, { Component } from 'react';
import '../css/Form.css';

class Form extends Component {
  constructor() {
    super();
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.state = {
      messageTextArea: '',
    }
  }

  handleTextAreaChange(e) {
    this.setState({ messageTextArea: e.target.value});
  }

  render() { 
    return (
      <form className="form">
        <div>
          <label>Nome:</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Idade:</label>
          <input type="number"></input>
        </div>
        <div>
          <label>Estado:</label>
          <select name="estado">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
            <option value="">13</option>
            <option value="">14</option>
            <option value="">15</option>
            <option value="">16</option>
            <option value="">17</option>
          </select>
        </div>
        <div>
          <label>Mensagem:</label>
          <textarea value={this.state.messageTextArea} onChange={this.handleTextAreaChange}/>
        </div>
      </form>
    );
  }
}

export default Form;