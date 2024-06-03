const ls = new LS();
const generateId = new GenerateId();
const todoList = document.getElementById("todo-list");
const getAllTodo = () => {
  const data = ls.find("todo");

  let dataList = "";

  if (data) {
    data.reverse().forEach((item, index) => {
      dataList += `
            <li class="list-group-item justify-content-between d-flex">${
              index + 1
            }. ${item.todo} <button onclick="deleteTodo('${
        item.id
      }')" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i></button></li>
            `;
    });
    todoList.innerHTML = dataList;
  } else {
    todoList.innerHTML = `
        <li class="list-group-item justify-content-between d-flex">No Data Found</li>        
        `;
  }
};
getAllTodo();
const deleteTodo = (id) => {
  const conf = confirm("are you sure");
  if (conf) {
    ls.delete("todo", id);
    getAllTodo();
  }
};
document.getElementById("todoForm").onsubmit = (e) => {
  e.preventDefault();
  // get form data from formData object

  let formData = new FormData(e.target);

  // let studentData = Object.fromEntries(formData.entries());
  let { todo } = Object.fromEntries(formData.entries());

  if (!todo) {
    return alert("Invalid Credential");
  } else {
    ls.create("todo", {
      id: generateId.generate(),
      todo,
      createdAt: Date.now(),
    });
    e.target.reset();
    getAllTodo();
  }
};
