var modelController = (function(){
    // Получение данных с сервера
    async function getItem(){
        try {
            const queryString = (`https://jsonplaceholder.typicode.com/todos`);
            const response = await fetch(queryString);
            const data = await response.json();
            const dataItems = await data;
            const currentItem = [];
            dataItems.forEach(item => {
                if(item.userId === 5 && item.completed === false){
                    currentItem.push(item);
                }
            });
            return currentItem;
        } catch(error){
            alert(error);
        };
    };


    return {
        getItem: getItem,
    };
})();