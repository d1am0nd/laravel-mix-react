import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.handleStorageChange = this.handleStorageChange.bind(this);
  }

  writeToStorage() {
    localStorage.setItem('test', Math.random().toString(6));
  }

  handleStorageChange() {
    alert('Storage changed');
  }

  componentDidMount() {
    window.addEventListener('storage', this.handleStorageChange);
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.handleStorageChange);
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.writeToStorage(e)}>
          Write to storage
        </button>
      </div>
    );
  }
}

export default App;
