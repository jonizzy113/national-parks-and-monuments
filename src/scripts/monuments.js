const buildMonumenttHtml = monumentObject => {
    const monumentArticle = buildElement("article");
    monumentArticle.appendChild(buildElement("h3", undefined, monumentObject.name));
    monumentArticle.appendChild(buildElement("p", undefined, monumentObject.state));

    let deleteMonumentButton = buildElement("button", `delete-monument--${monumentObject.id}`, "Delete Monument")
    monumentArticle.appendChild(deleteMonumentButton);
    deleteMonumentButton.addEventListener("click", handleDelete)
    return monumentArticle
}