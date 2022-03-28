var viewController = (function(){

    // Вывод таблицы
    function renderTable(){
        document.querySelector(".popup-content").innerHTML = "";
        const markup = `
            <table>
                <tr>
                <th>User ID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
                </tr> 
            </table>
        `;
        document.querySelector(".popup-content").insertAdjacentHTML('afterbegin', markup);
    };


    // Вывод данных с сервера на странницу
    function renderItem(item){
        const markup = `
            <tr>
                <td>${item.userId}</td>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.completed}</td>
            </tr>
        `;

        document.querySelector('tr').insertAdjacentHTML('afterend', markup);
    };

     // Отрисовка всей разметки
     function renderMarkup(items){
        renderTable();
        items.forEach(item => {
            renderItem(item);
        });
    };

    // Спинер
    function renderSpiner(){
        document.querySelector('.popup-content').innerHTML = "";
        const markup = `
            <img style="width: 50px; height: 50px; margin: auto 0" src="./img/popup/spiner.gif" alt="spiner">
        `;
        document.querySelector('.popup-content').insertAdjacentHTML('afterbegin', markup);
    }

    return{
        renderMarkup: renderMarkup,
        renderSpiner: renderSpiner
    };
})();