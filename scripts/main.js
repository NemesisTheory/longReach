/* TODO: Make a 3 option slider that goes from default value, to specific number (e.g 100), to max value.
TODO 2: Make a 'stop moving' button that locks movement. Perhaps will be handy for mobile users.
*/
Events.on(ClientLoadEvent, b => {
  UnitTypes.alpha.buildRange = Number.MAX_VALUE;
  UnitTypes.beta.buildRange = Number.MAX_VALUE;
  UnitTypes.gamma.buildRange = Number.MAX_VALUE;
  
  UnitTypes.evoke.buildRange = Number.MAX_VALUE;
  UnitTypes.incite.buildRange = Number.MAX_VALUE;
  UnitTypes.emanate.buildRange = Number.MAX_VALUE;
});
