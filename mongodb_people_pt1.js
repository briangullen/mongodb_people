// Question 1
db.people.find()

// Question 2
db.people.find().count()

// Question 3
db.people.find({state: 'Arizona'})

// Question 4
db.people.find({state: 'Arizona', gender: 'Male'})

// Question 5
db.people.find({$or: [{state: 'Arizona'}, {state: 'New Mexxico'}]})

// Question 6
db.people.find({age: {$lt: 40}})

// Question 7
db.people.find({$and: [{gender: 'Female'}, {state: 'Florida'}, {age: {$gte: 40}}, {age: {$lte: 45}}]})

// Question 8
db.people.find({first_name: /^H/})

// Question 9
db.people.find({state: 'Michigan'}).sort({first_name: 1})

// Question 10
db.people.find({$or: [{state: 'Virginia'}, {first_name: 'Virginia'}]})

// Question 11
db.people.find({age: {$lt: 30}}, {first_name: true, last_name: true})

// Question 12
db.people.find({state: 'Montana'}, {age: false})

// Question 13
db.people.find({email: /.edu$/})

// Question 14
db.people.find({"children.age": {$lt: 4}})

