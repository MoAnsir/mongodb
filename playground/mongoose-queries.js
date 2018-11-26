const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bfafb243fab4c1b4c4ceebd';

// if(!ObjectID.isValid(id)){
// 	console.log('ID not valid')
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

 
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

var userId = '5bfc63e1be79221825179e0c';

if(!ObjectID.isValid(userId)){
	console.log('ID not valid');
}

User.findById(userId).then((user) => {
	if(!user){
		return console.log('User not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
});