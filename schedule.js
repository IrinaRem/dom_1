document.addEventListener("DOMContentLoaded", function () {
    // Заглушка данных о занятиях
    const classes = [
        { id: 1, name: "Йога", time: "10:00", maxParticipants: 15, currentParticipants: 5 },
        { id: 2, name: "Бокс", time: "12:00", maxParticipants: 10, currentParticipants: 10 }
    ];

    const scheduleDiv = document.getElementById("schedule");

    // Функция для отображения занятий
    function displayClasses() {
        scheduleDiv.innerHTML = '';
        classes.forEach(cls => {
            const classElement = document.createElement("div");
            classElement.className = "col-md-4 mb-3";
            classElement.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${cls.name}</h5>
                        <p class="card-text">Время: ${cls.time}</p>
                        <p class="card-text">Мест: ${cls.currentParticipants}/${cls.maxParticipants}</p>
                        <button class="btn btn-primary ${cls.currentParticipants >= cls.maxParticipants ? 'disabled' : ''}"
                                onclick="register(${cls.id})">Записаться</button>
                        <button class="btn btn-secondary" onclick="unregister(${cls.id})">Отменить запись</button>
                    </div>
                </div>`;
            scheduleDiv.appendChild(classElement);
        });
    }

    window.register = function (classId) {
        const cls = classes.find(c => c.id === classId);
        if (cls.currentParticipants < cls.maxParticipants) {
            cls.currentParticipants++;
            displayClasses();
        }
    };

    window.unregister = function (classId) {
        const cls = classes.find(c => c.id === classId);
        if (cls.currentParticipants > 0) {
            cls.currentParticipants--;
            displayClasses();
        }
    };

    displayClasses();
});
