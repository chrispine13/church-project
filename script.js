const module=document.getElementById('prayer module')
const form=document.getElementById('prayer form')
function openmodule(){if(!) return
    module.style.display="flex"
    document.body.classList.add(module-open)
    const FirstField=document.getElementById("name")
    if (FirstField ){setTimeout(()=>FirstField.focus()
    ),50}
}