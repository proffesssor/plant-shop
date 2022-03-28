var controller = (function(budgetCtrl, uiCtrl){
    const popupBtn = document.querySelector(".btn");
    const popupCloseBtn = document.querySelector(".btn-close");
    const popupCancelBtn = document.querySelector("#btn-cancel");
    const popupGetBtn = document.querySelector("#btn-get");
    const popup = document.querySelector(".popup");

    const setupEventListener = function(){
        // Появление модального окна
        popupBtn.addEventListener("click", function(e){
            e.preventDefault();
            popup.classList.add('active');
            document.body.classList.add('no-scroll');

        });

        // Закрытие модального окна через иконку крестика
        popupCloseBtn.addEventListener("click", function(e){
            closeFunc(e);
        });

        // Закрытие модального окна через кнопку отменить
        popupCancelBtn.addEventListener("click", function(e){
            closeFunc(e);
        });

        // Закрытие модального окна через overlay
        popup.addEventListener("click", (e)=>{
            if (e.target.firstElementChild === document.querySelector(".popup-content")){
                closeFunc(e);
            }
        });


        // Вывод данных по кнопке отправить
        popupGetBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            uiCtrl.renderSpiner();
            // Таймер для загрузки данных с сервера
            setTimeout( ()=>{
                const itemsProm = budgetCtrl.getItem();
                itemsProm.then((items)=>{
                    uiCtrl.renderMarkup(items);
                })}, 500);
        });

    };
    // Закрытие модального окна  
        function closeFunc(e){
            e.preventDefault();
            popup.classList.remove('active');
            document.body.classList.remove('no-scroll');
        };

    return {
        init: function(){
            setupEventListener();
        }
    };
})(modelController, viewController);

controller.init();