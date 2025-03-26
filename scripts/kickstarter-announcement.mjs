import CONFIG from "./module.mjs";

function registerSettings() {
  game.settings.register(CONFIG.moduleId, "releaseAnnouncement", {
    name: "Release Announcement",
    scope: "client",
    config: true,
    type: Boolean,
    default: true
  })
};

Hooks.once("init", () => {
  registerSettings();
});

Hooks.once('ready', async function() {
  if (game.user.isGM) {
    if (game.settings.get(CONFIG.moduleId, "releaseAnnouncement")) {
      const journalUUID = game.system.id === "pf2e" ? "Compendium.battlezoo-ancestries-demigods.journals-pf2e.JournalEntry.zZvqop3qs4wZyVcl" : "Compendium.battlezoo-ancestries-demigods.journals-dnd5e.JournalEntry.GKz54IjSQWeo8tUg"
      const journal = await fromUuid(journalUUID)
      journal.sheet.render(true)
      await game.settings.set(CONFIG.moduleId, "releaseAnnouncement", false)
    }
  }
})