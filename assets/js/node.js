new TypeWriter(`#head`, {
  loop: true,
  cursor: {
    speed: 700,
    size: 'larger',
    id: 'Some_TypeWriter_CSS',
    enabled: true
  },
  timeout: 50
})
.write(`Appstate To Facebook Bot`)
.wait(2000)
.removeAll()
.write(`Paste your appstate inside the Textarea`)
.wait(2000)
.removeAll(6)
.start();

new TypeWriter(`#credit`, {
  loop: true,
  cursor: {
    speed: 700,
    size: 'larger',
    id: 'Some_TypeWriter_CSS',
    enabled: true
  },
  timeout: 50
})
.write(`Credit: Ivan/kenlie/shiki`)
.wait(2000)
.removeAll()
.write(`Credit: Ivan/kenlie/shiki`)
.wait(2000)
.removeAll(6)
.start();

function clearconsole() {
  document.getElementById("sessionData").value = "";
}