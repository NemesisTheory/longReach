let cols = [Pal.lancerLaser, Pal.accent, Color.valueOf("cc6eaf")];

function addTable(table) {
  table.table(Tex.pane, t => {
    let s = new Slider(0, 4, 1, false);
    s.setValue(0);
    let l = t.label(() => {
      let v = s.getValue();
      if (v === 0) {
        return "Infinite"; // infinite
      } else if (v === 1) {
        return "50"; // 50 tiles
      } else if (v === 2) {
        return "100"; // 100 tiles
      } else if (v === 3) {
        return "250"; // 250 tiles
      } else {
        return "Default"; // default
      }
    }).growX().width(8.5 * 8).color(Pal.accent);
    let b = t.button(new TextureRegionDrawable(Icon.refresh), 24, () => s.setValue(0)).padLeft(6).get();
    b.getStyle().imageUpColor = Pal.accent;
    t.add(s).padLeft(6).minWidth(200);
    s.moved(v => {
      let buildRange;
      if (v === 0) {
        buildRange = Number.MAX_VALUE; // infinite
      } else if (v === 1) {
        buildRange = 400; // 50 tiles
      } else if (v === 2) {
        buildRange = 800; // 100 tiles
      } else if (v === 3) {
        buildRange = 2000; // 250 tiles
      } else {
        buildRange = Vars.buildingRange; // default
      }

      UnitTypes.alpha.buildRange = buildRange;
      UnitTypes.beta.buildRange = buildRange;
      UnitTypes.gamma.buildRange = buildRange;
      UnitTypes.evoke.buildRange = buildRange;
      UnitTypes.incite.buildRange = buildRange;
      UnitTypes.emanate.buildRange = buildRange;

      l.color(Tmp.c1.lerp(cols, (s.getValue() + 1) / 5));
    });
  });
  table.visibility = () => {
    return true;
  };
}

if (!Vars.headless) {
  Events.on(EventType.ClientLoadEvent, () => {
    const settings = Vars.ui.settings.graphics;
    settings.row();

    const lrSettings = new BaseDialog(Core.bundle.get("Build Range Slider"));
    lrSettings.addCloseButton();
    lrSettings.buttons.defaults().size(240, 60);

    lrSettings.cont.pane((() => {
      let contentTable;
      if (Version.number < 7) {
        contentTable = new Packages.arc.scene.ui.SettingsDialog.SettingsTable();
      } else {
        contentTable = new SettingsMenuDialog.SettingsTable();
      }

      addTable(contentTable);

      return contentTable;
    })());

    settings.button("Build Range Slider", Styles.defaultt, () => lrSettings.show()).width(240).height(50);
  });
}

Events.on(ClientLoadEvent, () => {
    const lrStartup = new BaseDialog("longReach info");
  // yes i do realize the hell i just typed out below
    lrStartup.cont.add("To access the [orange]longReach mod[white]'s build range slider, go to: [orange]Settings -> Graphics [white]and [orange]scroll down. \n\n                                                        [red]Infinite build range is on by default. \n\n\n\n                      [white](it's like that because I don't know how to put it in a new settings category)").row();
    lrStartup.cont.button("Close", () => lrStartup.hide()).size(100, 50);
    lrStartup.show();
});

/* 
TODO: add "lock movement" button to ease players, maybe one similar to scheme size's lock movement (because it's panning system is pro)
nts: whats the point of big numbers (e.g. 2000, 4000, 8000) when Number.MAX_VALUE exist
     besides, 250 tile reach on a 500x500 map just sounds awkward
*/
