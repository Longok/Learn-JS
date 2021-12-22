
var courseApi = 'http://localhost:3000/courses';
var editBtn = document.querySelector('#editBtn'); 
    editBtn.style.display ='none';

function start() {
    // getCourses(function (courses) {
    //     renderCourses(courses );
    // });
    getCourses(renderCourses);
    handleCreateForm();
}
start();

function getCourses(callback) {
    fetch(courseApi)
        .then(function (respone) {
            return respone.json();
        })
        .then(callback);
}

function renderCourses(courses) {
    var listCoursersBlock =  document.querySelector('#list-courses');
    var htmls = courses.map(function(course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.title}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                <button class="editBtn"onclick="handleEditCourse(${course.id})">Sửa</button>
            </li>
        `;
    });

    listCoursersBlock.innerHTML = htmls.join('');
}

function createCourse(data, callback) {
    var option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, option)
        .then(function (respone) {
            return respone.json();
        })
        .then(callback);
}

function  handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function () {
        // alert('ok')
        var title = document.querySelector('input[name="title"]').value;
        var description = document.querySelector('input[name="description"]').value;
        // console.log(title, description);
        var formData = {
            title: title,
            description: description
        };
        
        createCourse(formData, function () {
            getCourses(renderCourses);      
        });
    }

}

function handleDeleteCourse(id) {
    var option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(courseApi + '/' + id, option)
        .then(function (respone) {
            return respone.json();
        })
        .then(function() {
            // getCourses(renderCourses);
            var courseItem = document.querySelector('.course-item-' + id);
            if(courseItem) {
                courseItem.remove();
            }
        });
}

function editCourse(id, data, callback) {
    var option = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi + '/' + id, option)
        .then(function (respone) {
            return respone.json();
        })
        .then(callback);
}



function handleEditCourse(id) {
    var editBtn = document.getElementById('editBtn');
    editBtn.style.display ='block';

    // lấy nội dung edit
    var getIdItem = document.querySelector('.course-item-' + id);  
    var getTitle = getIdItem.querySelector('h4').textContent;
    var getDescription = getIdItem.querySelector('p').textContent;
    // console.log(getTitle)

    // gán nội dung edit vào input
    document.querySelector('input[name="title"]').value = getTitle;
    document.querySelector('input[name="description"]').value = getDescription;
    document.querySelector('#create').style.display = 'none';
    // console.log(getTitle);

    editBtn.onclick = function () {
        var editTitle = document.querySelector('input[name="title"]').value;
        var editDescription = document.querySelector('input[name="description"]').value;

        var formEdit = {
            title: editTitle,
            description: editDescription,

        }
        editCourse(id, formEdit, function () {
            getCourses(renderCourses);      
        });
    }
   
}

