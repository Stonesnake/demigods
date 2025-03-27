import CONFIG from "./module.mjs";

Hooks.on("renderJournalSheet", (app, html, data) => {
  const journal = app.document;
  if ( journal.getFlag(CONFIG.moduleId, CONFIG.journalFlag)) {
    if (game.system.id === "pf2e") {
      html[0].classList.add(CONFIG.cssClassPF2e);
      }
    else {
      html[0].classList.add(CONFIG.cssClass5e);
    }
  }
});

Hooks.on("renderJournalPageSheet", (app, html, data) => {
  const journal = app.document.parent;
  if ( journal.getFlag(CONFIG.moduleId, CONFIG.journalFlag) ) {
    if (game.system.id === "pf2e") {
      html[0].classList.add(CONFIG.cssClassPF2e);
      }
    else {
      html[0].classList.add(CONFIG.cssClass5e);
    }
  }
});
