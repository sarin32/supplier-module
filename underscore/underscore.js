// var numbers = [100, 50, 400, 66, 7900];
// console.log(_.max(numbers));
// console.log(_.min(numbers))
var stateRegion = [
    { State: 'Madhya Pradesh', Region: 'Central' },
    { State: 'Assam', Region: 'Eastern' },
    { State: 'Gujarat', Region: 'West' },
    { State: 'Bihar', Region: 'Eastern' },
    { State: 'West Bengal', Region: 'Eastern' }
];
var getRegionOfState = function (state) {
    return _.chain(stateRegion).where({ State: state }).pluck('Region').first().value();
}
// console.log(getRegionOfState('Gujarat'));

var indianCities = [
    { City: 'Kolkata', State: 'West Bengal' },
    { City: 'Patna', State: 'Bihar' },
    { City: 'Indore', State: 'Madhya Pradesh' },
    { City: 'Darjeeling', State: 'Assam' }];
var indianCitiesWithRegion = _.map(indianCities, function (nc) {
    return { City: nc.City, State: nc.State, Region: getRegionOfState(nc.State) };
});
// console.log(indianCitiesWithRegion);


// reduce
var stateRegion = [
    { State: 'South-Trondelag', Region: 'Central' },
    { State: 'Oslo', Region: 'Eastern' },
    { State: 'Hordaland', Region: 'West' },
    { State: 'Akershus', Region: 'Eastern' },
    { State: 'Oppland', Region: 'Eastern' }
];



var getRegionOfState = function (state) {
    return _.chain(stateRegion).where({ State: state }).pluck('Region').first().value();
}
var norwegianCities = [
    { City: 'Trondheim', State: 'South-Trondelag' },
    { City: 'Oslo', State: 'Oslo' },
    { City: 'Lillehammer', State: 'Oppland' },
    { City: 'Bergen', State: 'Hordaland' }];

var norwegianCitiesWithRegion = _.map(norwegianCities, function (nc) {
    return { City: nc.City, State: nc.State, Region: getRegionOfState(nc.State) };
});
// console.log(norwegianCitiesWithRegion);
var norwegianCitiesInEasterRegion = _.reduce(norwegianCitiesWithRegion,
    function (memo, ncr) {

        return memo + ((ncr.Region == "Eastern") ? 1 : 0);

    }, 0);
// console.log(norwegianCitiesInEasterRegion);


// filter
// console.log(_.filter([1,3,11,9,12,21,29,28], function(n) { return (n % 3) === 0;
// }));

// set operation
// console.log('union'+_.union([2,4,3,6,1],[7,8,2,4]));

// console.log('intersection'+_.intersection([2,4,3,6,1],[7,8,2,4]));

// console.log('intersection'+_.difference([2,4,3,6,1],[7,8,2,4]));


//_.defer(function(){ console.log("This will execute when idle"); });
// //function Once
// var onceFunc= _.once(function(){ console.log("Listen very carefully, I shall say this only once."); });
// onceFunc();
// onceFunc();
// //bind bindAll
// var greeting = function(greeting) { return greeting + this.name +' who is a '+this.profession; }
// greeting = _.bind(greeting, { name: "Savitri", profession: "Home maker" });
// console.log(greeting("It is I, "));
// //memoize caching
//0,1,1,2,3,5,8.....
// var fibonacci = _.memoize(function(n) {    
//    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);//0,1,1,2,3,5,8,13
//  })      
//  console.log(fibonacci(5));
//console.log(_.delay(function(){ console.log("hi") }, 1000));
// //indexOf
//console.log("Item at: " + _.indexOf([1,2,3,5,11,17], 11));
//lastindexOf
//console.log("Item at: " + _.lastIndexOf([1,2,3,5,11,11,17], 11));
// //keys & values
//console.log(_.keys({ "City": "Kolkata", "State": "West Bengal" }));
// //["City", "State"]
//console.log(_.values({ "City": "Darjeeling", "State": "Assam" }));
 
//console.log(_.isEqual([1,2,3,4,17], [1,2,3,4,17]));
//console.log("Object is DOM element: " + _.isElement(jQuery('body')[0]));
//console.log( _.some([1,2,7,10,13,15], function(n) { return n % 2 == 0; }));//at least one value is a multiple of 2
// //true
//console.log(_.every([2,4,9,8,10], function(n) { return n % 2 == 0; }));//every value is a multiple of 2
// //false
 
