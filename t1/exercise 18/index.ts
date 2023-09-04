let fav_places: string[]=['KSA', 'England', 'Norway', 'Dubai', 'USA'];
for (let place of fav_places) {
   console.log(place)
}
let sortedCopy_2ndcopied_array = [...fav_places];
sortedCopy_2ndcopied_array.sort();
for (let place of sortedCopy_2ndcopied_array) {
    console.log(place);
}
console.log(fav_places)
let sortedCopy_3rdcopied_array = [...fav_places];
sortedCopy_3rdcopied_array.sort().reverse();
for (let place of sortedCopy_3rdcopied_array) {
    console.log(place);
}
console.log(fav_places)
fav_places.reverse();
console.log(fav_places)
fav_places.reverse();
console.log(fav_places)
fav_places.sort();
console.log(fav_places)
fav_places.reverse();
console.log(fav_places)