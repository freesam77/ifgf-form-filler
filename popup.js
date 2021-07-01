document.addEventListener('DOMContentLoaded', function () {
    var executeBtn = document.getElementById('execute');
    executeBtn.addEventListener('click', function () {
        const allBoolean = [...document.querySelectorAll('[class*="freebirdFormviewerComponentsQuestionRadioRoot"]')].map(el => el.parentElement)
        const pressAllNoAndSelectNearestDate = (domElems) => {
            window.alert('I am executed')
            const selectRadioBtn = (domElem, bool) => {
                const radioYes = domElem.querySelectorAll('.exportToggleEl')[0]
                const radioNo = domElem.querySelectorAll('.exportToggleEl')[1]
                if (bool) { radioYes.click() } else { radioNo.click() }
            }
            console.log("eh")

            const selectClosestDate = (domElem) => {

                var parseableDate = (dateText) => {
                    return '20' + dateText.split("/").reverse().join("-")
                }
                var allDateOptions = [...domElem.querySelectorAll('.exportToggleEl')]

                for (i = 0; i < allDateOptions.length; i++) {
                    if (Date.now() < Date.parse(parseableDate(allDateOptions[i].ariaLabel))) {
                        allDateOptions[i].click()
                        break;
                    }
                }
            }
            domElems.forEach(domElem => {
                if (domElem.querySelectorAll('.exportToggleEl').length > 2) {
                    selectClosestDate(domElem)
                } else {
                    selectRadioBtn(domElem, false)
                }
            })
        }
        pressAllNoAndSelectNearestDate(allBoolean)
    })
})