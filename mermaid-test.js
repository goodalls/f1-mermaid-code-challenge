var assert = require('chai').assert;
var Mermaid = require('./mermaid');

describe('Mermaid', function () {

  it('should have a name', function () {
    var mermaid = new Mermaid({name: 'Louisa'});
    assert.equal(mermaid.name, 'Louisa');
  });

  it('should possess three trinkets by default', function()  {
    var mermaid = new Mermaid({name: 'Robbie'});
    assert.deepEqual(mermaid.trinkets, ['ring', 'necklace', 'diamond']);
  });

  it('should change its name by shouting a new name', function() {
    var mermaid = new Mermaid({name: 'Beatrice'});
    mermaid.shout('Persimmon');
    assert.equal(mermaid.name, 'Persimmon')
    mermaid.shout('Taylor');
    assert.equal(mermaid.name, 'Taylor')
  });
  
  it('should sort trinkets in alphabetical order', function() {
    var mermaid = new Mermaid({name: 'Beatrice', trinkets: ['gold', 'silver', 'platinum', 'bronze']});
    assert.deepEqual(mermaid.organize(), ['bronze', 'gold', 'platinum', 'silver'])
  });
  
  it('should clean out any trinkets that are not strings', function() {
    var mermaid = new Mermaid({name: 'Beatrice', trinkets: ['gold', 55, 'platinum', true]});
    assert.deepEqual(mermaid.cleanTrinkets(), ['gold', 'platinum']);
  });

  it('should show a love for trinkets', function() {
    var mermaid = new Mermaid({name: 'Beatrice', trinkets: ['gold', 'silver', 'platinum', 'bronze']});
    assert.equal(mermaid.buildSong(),'I love bronze,I love platinum,I love silver,I love gold')
  });

});

