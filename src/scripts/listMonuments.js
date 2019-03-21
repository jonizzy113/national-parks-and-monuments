const listMonuments = () => {
    getAllMonuments().then(monumentsArray => {
        console.log(monumentsArray)
        let monumentFragment = document.createDocumentFragment();

        monumentsArray.forEach(monument => {
            let monumentHtml = buildMonumenttHtml(monument)
            monumentFragment.appendChild(monumentHtml)
        });

        const monumentSection = document.querySelector("#monuments");
        clearElement(monumentSection)
        monumentSection.appendChild(monumentFragment)
    })
}