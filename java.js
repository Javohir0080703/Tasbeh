const elSelect = document.querySelector('#select');
const elReset = document.querySelector('#reset');
const elZikr = document.querySelector('#zikr');
const elCount = document.querySelector('#count');
const elCounter = document.querySelector('#counter');

elSelect.addEventListener('change', function(){
    elZikr.textContent = elSelect.value
    elCounter.disabled = false
    elCount.textContent = 0
})

elCounter.addEventListener('click', function(){
    elCount.textContent++

})

elReset.addEventListener('click', function(){
    elCount.textContent = 0;
    elZikr.textContent = "Iltimos aytmoqchi bo'lgan zikrni tanlang :("
    elCounter. disabled = true
    elSelect.value = 'Zikrlar'
})