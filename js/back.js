document.addEventListener('plusready', function() {
    plus.key.addEventListener('backbutton', function() {
        localStorage.setItem('cmts',"1");
    });
})