describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title',function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

 it('finds profiles', function() {

   searchBox.sendKeys('spike');

   var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
   expect(profiles.last().getText()).toEqual('SciSpike');
 });
});


// describe('GitHub profile finder', function() {

//   var searchBox = element(by.model('searchCtrl.searchTerm'))
//   var searchButton = element(by.className('btn'))

//   beforeEach(function() {
//     browser.get('http://localhost:8080');
//   })

//   it('has a title', function() {
//     expect(browser.getTitle()).toEqual('Github user search');
//   });

//   it('finds profiles', function() {
//     searchBox.sendKeys('spike01');
//     //Complete this test using the variables above!
//     expect(element(by.binding('user.login')).getText()).toEqual('spike01');
//   });

// });