/*
const object = {
    Style: ,
    Type: ,
    Size: ,
    State: ,
    Environment: ,
    Biome: ,
    Collection: ,
    Color: ,
}
*/

const assetMap = new Map();

assetMap.set("SmallRiverRock", {
    Style: "Hand Painted" ,
    Type: "3D Assets",
    Size: "Size: < 0.5 M",
    State: "Any" ,//New" , & "Old" & "Damaged" ,
    Environment: "Natural",
    Biome: "Grassland",
    Collection: "Hand Painted Grassland",
    Color: "Gray",
})
assetMap.set("MediumRiverRock", {
    Style: "Hand Painted" ,
    Type: "3D Assets",
    Size: "Size: 1 - 2 M",
    State: "Any" ,// "Old" & "Damaged" ,
    Environment: "Natural",
    Biome: "Grassland",
    Collection: "Hand Painted Grassland",
    Color: "Gray",
})
assetMap.set("LargeRiverRock", {
    Style: "Hand Painted" ,
    Type: "3D Assets",
    Size: "Size: 4 - 8 M",
    State: "Any" ,//& "Old" & "Damaged" ,
    Environment: "Natural",
    Biome: "Grassland",
    Collection: "Hand Painted Grassland",
    Color: "Gray",
})
assetMap.set("SmallTree", {
    Style: "Hand Painted" ,
    Type: "3D Plants",
    Size: "Size: 4 - 8 M",
    State: "Any" ,//& "Old" & "Damaged" ,
    Environment: "Natural",
    Biome: "Grassland",
    Collection: "Hand Painted Grassland",
    Color: "Green",
})
assetMap.set("Door", {
    Style: "Hand Painted" ,
    Type: "3D Assets",
    Size: "Size: 4 - 8 M",
    State: "Old" ,//& "Old" & "Damaged" ,
    Environment: "Medieval",
    Biome: "Any",
    Collection: "Hand Painted Village",
    Color: "Brown",
})
assetMap.set("StoneWall", {
    Style: "Hand Painted" ,
    Type: "Surfaces",
    Size: "Size: 4 - 8 M",
    State: "Any" ,//& "Old" & "Damaged" ,
    Environment: "Medieval",
    Biome: "Any",
    Collection: "Hand Painted Village",
    Color: "Gray",
})

assetMap.set("Cactus", {
    Style: "Hand Painted" ,
    Type: "3D Assets",
    Size: "Size: 4 - 8 M",
    State: "Any" ,//& "Old" & "Damaged" ,
    Environment: "Natural",
    Biome: "Desert",
    Collection: "Hand Painted Desert",
    Color: "Green",
})
assetMap.set("BrickWall", {
    Style: "Hand Painted" ,
    Type: "Surfaces",
    Size: "Size: 4 - 8 M",
    State: "Any" ,//& "Old" & "Damaged" ,
    Environment: "City",
    Biome: "Any",
    Collection: "Hand Painted City",
    Color: "Red",
})