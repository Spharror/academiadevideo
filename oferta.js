// ─── LOCURI LA PREȚUL DE LANSARE ───
// Actualizează manual numărul de mai jos pe măsură ce intră membri noi.
// Când ajunge la 100, cardul trece singur pe prețul standard.
var LOCURI_OCUPATE = 50;
(function () {
    var TOTAL = 100;
    var ocupate = Math.max(0, Math.min(TOTAL, LOCURI_OCUPATE));
    var ramase = TOTAL - ocupate;
    var el = function (id) { return document.getElementById(id); };
    if (ramase > 0) {
        el('locuri-ramase').textContent = ramase;
        el('locuri-bar').style.width = (ocupate / TOTAL * 100) + '%';
    } else {
        el('oferta-eyebrow').textContent = 'ABONAMENT';
        el('oferta-titlu').innerHTML = 'Intră în comunitate și fă-ți <span class="text-primary-fixed-dim">prima reclamă cu AI.</span>';
        el('oferta-banner').textContent = 'Acces complet la cursuri și comunitate';
        el('pret-mare').textContent = '147 lei';
        el('pret-nota').textContent = 'Aprox., TVA inclus · 32,67 $/lună la plată';
        el('pret-anual').innerHTML = 'sau aprox. 1.470 lei/an — 2 luni gratis <span class="text-on-surface-variant text-sm font-normal">· 326,70 $/an la plată</span>';
        el('locuri-box').style.display = 'none';
    }
})();
