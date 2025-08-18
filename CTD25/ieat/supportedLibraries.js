document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('reload-btn').addEventListener('click', function () {
        const textToCopy = '  D{           _connected}';
        navigator.clipboard.writeText(textToCopy).then(function () {
            location.reload();
        }).catch(function (err) {
            //alert('Copy failed: ' + err + '\nPage will reload anyway.');
            location.reload();
        });
    });
});
