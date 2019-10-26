import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);

    // 初期値の設定
    this.state = {
      todos: [
        {id: "1", text: "todo1"},
        {id: "2", text: "todo2"},
        {id: "3", text: "todo3"}
      ]
    };
  }

    deleteTodo(id){
      let todos = this.state.todos;
      // filterを使って情報を削除
      todos = todos.filter((todo) => todo.id !== id);

      this.setState({todos: todos});
    };

    render(){
      return(
        <ul>
          {/* Array objectをmapで処理 */}
          {this.state.todos.map(
              (todo) => {
                return (
                  // リスト表示するには keyが必要
                  <li key={todo.id}>{todo.text}
                    <button onClick={this.deleteTodo.bind(this,todo.id)}>×</button>
                  </li>
                );
              }
            )
          }
        </ul>
      );
    }
  }

export default App;
