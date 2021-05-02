Функция async и оператор await
Для написания асинхронного кода в JavaScript появился синтаксис async/await. Цель нововведения — упростить использование промисов и расширить рамки действий с ними. Для лучшего понимания этого синтаксиса, рекомендуем сначала ознакомиться с промисами. await может использоваться только внутри асинхронной функции.

async function getGithubUser(username) { // ключевое слово async позволяет использовать await в функции, которая возвращает промис
  const response = await fetch(`https://api.github.com/users/${username}`); // выполнение приостановлено до момента получения ответа от переданного промиса
  return response.json();
}

getGithubUser('mbeaudru')
  .then(user => console.log(user)) // ответ пользователя, проходящего авторизацию: синтаксис await невозможно использовать, поскольку код не является асинхронной функцией
  .catch(err => console.log(err)); // в случае ошибки асинхронной функции, мы увидим её
async/await используется с промисами, но предполагают более императивный стиль кода. Оператор async определяет асинхронную функцию и всегда возвращает промис. Оператор await приостанавливает выполнение функции async, пока промис не выполнен или отклонён:

async function myFunc() {
  // допустимо использование await, поскольку функция асинхронная
  return "hello world";
}

myFunc().then(msg => console.log(msg)) // hello world: возвращённое значение myFunc стало промисом из-за асинхронной функции
Если в асинхронной функции достигается значение return, промис приобретает возвращённое значение. При выводе ошибки промис переходит в статус «отклонён». В то же время при отсутствии возвращённого значения асинхронной функции, промис возвращается без значения по завершению выполнения асинхронной функции.

Оператор await ожидает выполнения промиса.

Функция fetch позволяет выполнить AJAX-запрос.

Выберем пользователя GitHub с помощью промисов и функции fetch:

function getGithubUser(username) {
  return fetch(`https://api.github.com/users/${username}`).then(response => response.json());
}

getGithubUser('mbeaudru')
  .then(user => console.log(user))
  .catch(err => console.log(err));
А теперь эквивалент с использованием async/await:

async function getGithubUser(username) { // можем использовать промис с ключевым словом await
  const response = await fetch(`https://api.github.com/users/${username}`); // выполнение останавливается, пока не выполнен промис
  return response.json();
}

getGithubUser('mbeaudru')
  .then(user => console.log(user))
  .catch(err => console.log(err));
Async/await подходят в случае с цепочкой взаимосвязанных промисов. Например можно использовать их для получения токена, чтобы выделить пост блога в базе данных, а также информацию об авторе:

async function fetchPostById(postId) {
  const token = (await fetch('token_url')).json().token;
  const post = (await fetch(`/posts/${postId}?token=${token}`)).json();
  const author = (await fetch(`/users/${post.authorId}`)).json();

  post.author = author;
  return post;
}

fetchPostById('gzIrzeo64')
  .then(post => console.log(post))
  .catch(err => console.log(err));
Обработка ошибок.
Если не добавить блоки try/catch к выражению await, неперехваченные исключения будут отклонять промис, возвращённый асинхронной функцией. При этом неважно, находятся ли они внутри асинхронной функции или возникли во время await. Использование throw внутри асинхронной функции равноценно отклонённому промису.

Вот так можно устранить ошибки при помощи промисов:

function getUser() { // этот промис будет отклонён!
  return new Promise((res, rej) => rej("User not found !"));
}

function getAvatarByUsername(userId) {
  return getUser(userId).then(user => user.avatar);
}

function getUserAvatar(username) {
  return getAvatarByUsername(username).then(avatar => ({ username, avatar }));
}

getUserAvatar('mbeaudru')
  .then(res => console.log(res))
  .catch(err => console.log(err)); // "User not found !"
то же самое, но с async/await:

async function getUser() { // возвращённый промис будет отклонён!
  throw "User not found !";
}

async function getAvatarByUsername(userId) => {
  const user = await getUser(userId);
  return user.avatar;
}

async function getUserAvatar(username) {
  var avatar = await getAvatarByUsername(username);
  return { username, avatar };
}

getUserAvatar('mbeaudru')
  .then(res => console.log(res))
  .catch(err => console.log(err)); // "User not found !"