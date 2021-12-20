// var courseApi = 'http://localhost:3000/courses';

// fetch(courseApi)
//     .then(function (respone) {
//         return respone.json();
//     })
//     .then(function (cousres) {
//         console.log(cousres);
//     });



var courseApi = 'http://localhost:3000/courses';

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

        createCourse(formData);

    }
}