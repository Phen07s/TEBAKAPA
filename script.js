(function() {
    var musikId = 'birthdayAudio'; 
    var tombolId = 'musicControl';
    var svgIconId = 'musicIcon';
    
    // Lapisan Transparan untuk memicu sentuhan pertama di iPhone 13 (Fake Autoplay)
    var transLayer = document.createElement('div');
    transLayer.style.position = 'fixed';
    transLayer.style.top = '0';
    transLayer.style.left = '0';
    transLayer.style.width = '100%';
    transLayer.style.height = '100%';
    transLayer.style.zIndex = '9999998'; // Berada persis di bawah tombol play
    transLayer.style.background = 'transparent';
    transLayer.style.cursor = 'pointer';
    document.documentElement.appendChild(transLayer);

    function triggerMusik() {
        var musik = document.getElementById(musikId);
        if (musik) {
            musik.muted = false;
            musik.play().then(function() {
                console.log("Autoplay sukses lewat interaksi pertama!");
                updateIkonTombol(true);
                hapusPelatukGlobal();
            }).catch(function(err) {
                console.log("Menunggu sentuhan fisik user...", err);
            });
        }
    }

    function hapusPelatukGlobal() {
        window.removeEventListener('click', triggerMusik, true);
        window.removeEventListener('touchstart', triggerMusik, true);
        window.removeEventListener('touchend', triggerMusik, true);
        if (transLayer && transLayer.parentNode) {
            transLayer.parentNode.removeChild(transLayer);
        }
    }

    function updateIkonTombol(isPlaying) {
        var svgIcon = document.getElementById(svgIconId);
        if (svgIcon) {
            if (isPlaying) {
                // Ubah lambang jadi Pause (dua balok)
                svgIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
            } else {
                // Ubah lambang jadi Play (segitiga)
                svgIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
            }
        }
    }

    // Tangkap ketukan jari pertama kali di layar iPhone 13
    window.addEventListener('click', triggerMusik, true);
    window.addEventListener('touchstart', triggerMusik, true);
    window.addEventListener('touchend', triggerMusik, true);

    // Fungsi Klik Manual buat Tombol Play/Pause asli di web
    document.addEventListener('DOMContentLoaded', function() {
        var btnPlay = document.getElementById(tombolId);
        var musik = document.getElementById(musikId);

        if (btnPlay) {
            btnPlay.addEventListener('click', function(e) {
                e.stopPropagation(); // Biar gak bentrok sama layer transparan
                if (musik) {
                    if (musik.paused) {
                        musik.play();
                        updateIkonTombol(true);
                    } else {
                        musik.pause();
                        updateIkonTombol(false);
                    }
                }
            });
        }
        // Coba putar langsung pas kelar load (untuk PC/Android yang dukung murni autoplay)
        triggerMusik();
    });
})();
