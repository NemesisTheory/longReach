Events.on(ClientLoadEvent, b => {
  UnitTypes.alpha.buildRange = Number.MAX_VALUE;
  UnitTypes.beta.buildRange = Number.MAX_VALUE;
  UnitTypes.gamma.buildRange = Number.MAX_VALUE;
});
