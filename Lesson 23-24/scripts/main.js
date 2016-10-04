var TodoList;
TodoList = (function () {
  var _toggleAllButton, _newTodo, _checkBoxesArr, _checkBoxes, _checkBoxesArr, _countElement, count;

  _toggleAllButton = document.getElementsByClassName('toggle-all')[0];
  _newTodo = document.getElementsByClassName('new-todo')[0];
  _allTasks = document.getElementsByClassName('todo-list')[0];
  _deleteItemElement = document.getElementsByClassName('close-item');
  _todoItem = document.getElementsByClassName('todo-list__item');
  _allItems = document.getElementsByClassName('all-items')[0];
  _activeButton = document.getElementsByClassName('active-item')[0];
  _completedButton = document.getElementsByClassName('completed-item')[0];
  _clearButton = document.getElementsByClassName('clear')[0];
  _app = document.getElementsByClassName('todo-app')[0];
  _countElement = document.getElementsByClassName('counter')[0];

  function TodoList () {
    this.init();
    this.initEvent();
  }

  TodoList.prototype.getItems = function () {
    _checkBoxes = document.getElementsByClassName('todo-list__cb');
    _checkBoxesArr = [].slice.apply(_checkBoxes);
    return _checkBoxesArr;
  }

  TodoList.prototype.init = function () {
    _newTodo.addEventListener('keydown', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });

    _newTodo.addEventListener('keyup', function (event) {
      event = event || window.event;
      if (event.keyCode == 13) {
        this.addTask();
        
      }
    }.bind(this));
  }

  TodoList.prototype.addTask = function () {
    var newTodoTask = (_newTodo.value).trim(),
        newTaskElement = document.createElement('label');
        console.log('start', newTodoTask, 'end')

    if (newTodoTask != '') {
      newTaskElement.className = 'todo-list__item';
      newTaskElement.innerHTML = getTemplate(newTodoTask);
      _allTasks.appendChild(newTaskElement);
    };
   _newTodo.value = '';
   _countElement.innerHTML = counter();
  }

  function getTemplate (text) {
    return  '<input type="checkbox" class="todo-list__cb">' +
            '<span class="todo-list__mark"></span>' +
            '<span class="todo-list__desc">' + text + '</span>' +
            '<span class="close-item">×</span>'

  };

  function counter () {
    count = 0;
    _checkBoxesArr = TodoList.prototype.getItems();

    var checkedItems = _checkBoxesArr.filter(function(item) {
      if (!item.checked) {
        count++;
      };
    });

   return count;
  }

  TodoList.prototype.initEvent = function () {
    var self = this;

    _toggleAllButton.addEventListener('click', function () {

      _checkBoxesArr = self.getItems();
      if (this.classList.contains('active')) {
        this.classList.remove('active');
        
        _checkBoxesArr.forEach(function(item) {
          item.checked = false;
        });

      } else {
        this.classList.add('active');

        _checkBoxesArr.forEach(function(item) {
          item.checked = true;
        });
      };
    });

    _allTasks.addEventListener('click', function (event) {
      var target = event.target;

      if (target.className != 'close-item') {
        return;
      }
      var item = target.closest('.todo-list__item');
      _allTasks.removeChild(item);
    });

    _activeButton.addEventListener('click', function (event) {
      _checkBoxesArr = self.getItems();
      var checkedItems = _checkBoxesArr.filter(function(item) {
        item.parentElement.style.display = 'block';
        if (item.checked) {
          item.parentElement.style.display = 'none';
        };
     });
    })

    _completedButton.addEventListener('click', function (event) {
      _checkBoxesArr = self.getItems();
      var checkedItems = _checkBoxesArr.filter(function(item) {
        item.parentElement.style.display = 'block';
        if (!item.checked) {
          item.parentElement.style.display = 'none';
        };
     });
    })

    _allItems.addEventListener('click', function (event) {
      _checkBoxesArr = self.getItems();
      var checkedItems = _checkBoxesArr.filter(function(item) {
        item.parentElement.style.display = 'block';
     });
    });

    _clearButton.addEventListener('click', function (event) {
      _checkBoxesArr = self.getItems();
      var checkedItems = _checkBoxesArr.filter(function(item) {
        if (item.checked) {
          item.parentNode.remove();
        };
     });
    })

    _app.addEventListener('change', function () {
      console.log(counter());
      _countElement.innerHTML = counter();
    });
  }

  return TodoList;
})();

new TodoList();
