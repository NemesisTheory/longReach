Events.on(ClientLoadEvent, b => {
  UnitTypes.alpha.buildRange = Number.MAX_VALUE;
  UnitTypes.beta.buildRange = Number.MAX_VALUE;
  UnitTypes.gamma.buildRange = Number.MAX_VALUE;
  
  UnitTypes.evoke.buildRange = Number.MAX_VALUE;
  UnitTypes.incite.buildRange = Number.MAX_VALUE;
  UnitTypes.emanate.buildRange = Number.MAX_VALUE;
});
