const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        for(let panel of panels){
            if(panel.classList.contains('active')){
                panel.classList.remove('active')
            }
        }
        panel.classList.add('active');
    })
})