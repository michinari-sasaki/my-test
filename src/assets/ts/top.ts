const $del = document.getElementsByClassName('del');
const $form = document.getElementById('form');
const $input: HTMLInputElement = <HTMLInputElement>(
  document.getElementById('input')
);
const $ul = document.getElementById('ul');
// interface todos {
//   text: string;
//   complete: false;
// }
const todos: object[] = [];
const loadData = JSON.parse(localStorage.getItem('items') as string);

//削除ボタン
$del[0].addEventListener('click', () => {
  localStorage.removeItem('items');
  location.reload();
});

/*
liをクリックしたら
該当のliのobjectの
クラスをコンテインしていなければ
compleated を　falseにする
*/

//すでにローカルストレージに保存データがあれば
if (loadData) {
  loadData.forEach((value: any) => {
    let $li = document.createElement('li');
    $li.innerText = value.text;
    //表示するときに統合配列に追加していく
    todos.push({
      text: value.text,
      complete: false,
    });
    $ul?.appendChild($li);
  });
}

//フォームサブミットでinputの内容を一覧表示に追加
$form?.addEventListener('submit', (event) => {
  event.preventDefault();
  add();
});

const add = () => {
  let $li = document.createElement('li');
  $li.innerText = $input.value;
  saveData($input.value);
  $ul?.appendChild($li);
  $input.value = '';
};

//配列に追加してから配列をlocalStorageに保存
const saveData = (value: string) => {
  todos.push({
    text: value,
    complete: false,
  });
  localStorage.setItem('items', JSON.stringify(todos));
};

// const $del = document.getElementsByClassName('del');
// const $form = document.getElementById('form');
// const $input: HTMLInputElement = <HTMLInputElement>(
//   document.getElementById('input')
// );
// const $ul = document.getElementById('ul');
// interface todos {
//   text: string;
// }
// const todos: todos[] = [];
// const loadData = JSON.parse(localStorage.getItem('items'));
// console.log(loadData);

// //削除ボタン
// $del[0].addEventListener('click', () => {
//   localStorage.removeItem('items');
//   location.reload();
// });

// /*
// liをクリックしたら
// 該当のliのobjectの
// クラスをコンテインしていなければ
// compleated を　falseにする
// */

// //すでにローカルストレージに保存データがあれば
// if (loadData) {
//   loadData.forEach((value: any) => {
//     let $li = document.createElement('li');
//     $li.innerText = value;
//     //表示するときに統合配列に追加していく
//     todos.push(value);
//     $ul?.appendChild($li);
//     $li.addEventListener('click', () => {
//       $li.remove();
//     });
//   });
// }

// //フォームサブミットでinputの内容を一覧表示に追加
// $form?.addEventListener('submit', (event) => {
//   event.preventDefault();
//   add();
// });

// const add = () => {
//   let $li = document.createElement('li');
//   $li.innerText = $input.value;
//   saveData($input.value);
//   $ul?.appendChild($li);
//   $input.value = '';
// };

// //配列に追加してから配列をlocalStorageに保存
// const saveData = (value: string) => {
//   const liAll = document.querySelectorAll('li');
//   liAll.forEach((value) => {
//     todos.push({
//       text: value.innerText,
//     });
//     console.log(todos);
//   });
//   localStorage.setItem('items', JSON.stringify(todos));
// };

//下　古いやつ

// const $form: HTMLElement | null = document.getElementById('form');
// const $input: HTMLInputElement = <HTMLInputElement>(
//   document.getElementById('input')
// );
// const $list = document.getElementById('list');
// const $del = document.getElementsByClassName('del');
// const saveTodos = JSON.parse(localStorage.getItem('item'));
// console.log(saveTodos);

// $form?.addEventListener('submit', function (event) {
//   event.preventDefault();
//   add();
// });

// const add = () => {
//   let todoText = $input.value;
//   if (saveTodos) {
//     const li = document.createElement('li');
//     li.innerText = saveTodos.text;
//     $list?.appendChild(li);
//     saveData();
//     // ulを取得して
//     // liを作って
//     // ulにapendchilする
//     // ulの中のliを取得
//     // forEachでまわす
//     // innnerTextにsaveTodoのTextを入れる、
//     // falseならclassを付与しない
//   } else if (todoText) {
//     const $li = document.createElement('li');
//     $li.innerText = todoText;
//     $li.classList.add('active');
//     $list?.appendChild($li);
//     $input.value = '';
//     saveData();
//   }
// };

// const saveData = () => {
//   const todos = document.querySelectorAll('li');
//   const todoItems: object[] = [];
//   // interface todoObj {
//   //   text: string;
//   //   flag: boolean;
//   // }
//   // const todoObj: todoObj = {
//   //   text: 'テキスト',
//   //   flag: false,
//   // };
//   todos.forEach((item) => {
//     todoItems.push({
//       text: item.innerText,
//       flag: false,
//     });
//     localStorage.setItem('item', JSON.stringify(todoItems));
//   });
// };

// const saveDestory = () => {
//   localStorage.removeItem('item');
// };

// $del[0].addEventListener('click', () => {
//   saveDestory();
// });
