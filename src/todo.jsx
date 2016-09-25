const React = require('react');
const ReactDOM = require('react-dom');

// 一時保存する箇所
// サーバーアクセス可能な場合、ここではなくサーバーに保存する
const todoItems = []

// 入力値一時保存箇所
// タイトル
let title = ''
// 詳細
let detail = ''

// タイトルを保存する関数
const setTitleData = (event) => {
  title = event.target.value;
  render();
};

// 内容を保存する関数
const setDetailData = (event) => {
  detail = event.target.value;
  render();
};

// 削除用の関数
const deleteItem = (index) => {
  todoItems.splice(index, 1);
  render();
};

// 入力欄を表示するビュー部分
const TodoForm = () => (
  <div>
    TO:<input type="text" value={title} onChange={setTitleData} />
    DO:<input type="text" value={detail} onChange={setDetailData} />
    <button onClick={addData}>登録</button>
  </div>
);

// リスト全体を表示させているビュー部分
const Todo = () => (
  <div>
    <TodoForm />
    <table id="todoList">
     <tr>
      <th>タイトル</th>
      <th>詳細</th>
     </tr>
     {todoItems.map((item, index) => (
       <TodoList title={item.title}　detail={item.detail} onDelete={() => deleteItem(index)} />
     ))}
    </table>
  </div>
);

// TODOリストを表示させているビュー部分
const TodoList = ({ title, detail, onDelete }) => (
    <th>
     <td>{title}</td>
     <td>{detail}</td>
     <td>
      <button onClick={() => onDelete()}>完了</button>
     </td>
    </th>
);

// 登録ボタンクリック時の関数
const addData = () => {
  todoItems.push({ title: title, detail: detail });
  title = '';
  detail = '';
  render();
};

const render = () => ReactDOM.render(<Todo />, document.getElementById('todo'));
setTimeout(render, 0);
