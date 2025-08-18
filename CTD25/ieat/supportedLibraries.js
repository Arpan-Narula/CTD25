document.addEventListener("DOMContentLoaded", function () {
  navigator.clipboard.writeText("  D{           _connected}")
    .catch(err => {
      // Optional: inform the user to click a button if auto-copy fails
      console.warn('Clipboard copy failed:', err);
    });
});

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
