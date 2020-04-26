import React from 'react';
import './App.css';
import CreateAnItem from './CreateAnItem';
import DeleteLastItem from './DeleteLastItem';
import Header from './Header';
import Title from './Title';

class App extends React.Component {
  state = {
    items: [],
    title: "Shopping List"
  };

  handleAddItem = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }));
  };

  handleDeleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        
       <Header />
       
        <Title title={this.state.title} />
       
    	<CreateAnItem onAddItem={this.handleAddItem}/>

        <DeleteLastItem onDeleteItem={this.handleDeleteLastItem}/>

        <p className="items">Items</p>
        <ol className="item-list">
          {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </div>
    );
  }
}

export default App;
