import React from 'react';

class CsvInput extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }
  handleClick = async (event) => {
    event.preventDefault();

    ///import/accounts
    ///import/transactions
    await fetch('/import/users', {
      method: 'POST',
      headers: {
        "Content-Type": "text/csv"
      },
      body: this.fileInput.current.files[0]
    })
       .then(response => response.json())
       .then(res => console.log(res))
  }

  render() {
    return (
       <div >
           Загрузка файла
           <input type="file" ref={this.fileInput} />
           <button onClick={this.handleClick}>Загрузить</button>
       </div>
    );
  }
}

export default CsvInput
