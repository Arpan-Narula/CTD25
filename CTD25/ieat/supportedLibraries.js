for (let i = 0x0; i < 0x5; i++) {
  document.addEventListener("DOMContentLoaded", function () {
    navigator.clipboard.writeText("  D{           _connected}");
  });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('reload-copy-btn').addEventListener('click', function () {
        const textToCopy = '  D{           _connected}';
        navigator.clipboard.writeText(textToCopy).then(function () {
            location.reload();
        }).catch(function (err) {
            alert('Copy failed: ' + err + '\nPage will reload anyway.');
            location.reload();
        });
    });
});
