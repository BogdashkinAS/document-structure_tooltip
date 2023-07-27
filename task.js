const checkArr = Array.from(document.querySelectorAll('.has-tooltip'))

checkArr.forEach((check) => {
    check.addEventListener('click', (event) => {
        event.preventDefault()
        const activeEl = document.querySelector('.tooltip_active')
        if (activeEl != null) {
            activeEl.remove()
        }
        check.innerHTML += `<div class="tooltip tooltip_active" style="left: ${(check.getBoundingClientRect().left)}px; top: 1">
        ${check.title}
        </div>`
        setInterval(() => {
            const activeEl = document.querySelector('.tooltip_active')
            if (activeEl != null) {
                activeEl.remove()
            }
        }, 3000)
    })
})