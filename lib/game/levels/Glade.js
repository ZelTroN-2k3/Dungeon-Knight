ig.module( 'game.levels.Glade' )
.requires( 'impact.image','game.entities.player','game.entities.zombie','game.entities.skeleton','game.entities.levelexit','game.entities.water','game.entities.rope','game.entities.ladder' )
.defines(function(){
LevelGlade=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 64,
			"y": 112
		},
		{
			"type": "EntityZombie",
			"x": 408,
			"y": 112
		},
		{
			"type": "EntityZombie",
			"x": 596,
			"y": 16
		},
		{
			"type": "EntityZombie",
			"x": 788,
			"y": 16
		},
		{
			"type": "EntitySkeleton",
			"x": 1008,
			"y": 144
		},
		{
			"type": "EntityLevelexit",
			"x": 1216,
			"y": 176,
			"settings": {
				"size": {
					"x": 32,
					"y": 32
				},
				"level": "overworld2"
			}
		},
		{
			"type": "EntityWater",
			"x": 112,
			"y": 160,
			"settings": {
				"size": {
					"x": 176,
					"y": 64
				}
			}
		},
		{
			"type": "EntityRope",
			"x": 576,
			"y": 64,
			"settings": {
				"size": {
					"x": 48,
					"y": 80
				}
			}
		},
		{
			"type": "EntityRope",
			"x": 672,
			"y": 64,
			"settings": {
				"size": {
					"x": 48,
					"y": 92
				}
			}
		},
		{
			"type": "EntityRope",
			"x": 768,
			"y": 64,
			"settings": {
				"size": {
					"x": 48,
					"y": 100
				}
			}
		},
		{
			"type": "EntityRope",
			"x": 864,
			"y": 64,
			"settings": {
				"size": {
					"x": 48,
					"y": 112
				}
			}
		},
		{
			"type": "EntityRope",
			"x": 1120,
			"y": 128,
			"settings": {
				"size": {
					"x": 16,
					"y": 56
				}
			}
		},
		{
			"type": "EntityLadder",
			"x": 528,
			"y": 32,
			"settings": {
				"size": {
					"x": 16,
					"y": 112
				}
			}
		}
	],
	"layer": [
		{
			"name": "Sky",
			"width": 8,
			"height": 4,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/EveningSky.png",
			"repeat": true,
			"preRender": false,
			"distance": "10",
			"tilesize": 64,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1],
				[2,2,2,2,2,2,2,2],
				[3,3,3,3,3,3,3,3],
				[3,3,3,3,3,3,3,3]
			]
		},
		{
			"name": "Clouds",
			"width": 4,
			"height": 1,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/Clouds.png",
			"repeat": true,
			"preRender": false,
			"distance": "12",
			"tilesize": 128,
			"foreground": false,
			"data": [
				[1,1,1,1]
			]
		},
		{
			"name": "Mountains",
			"width": 8,
			"height": 3,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/Mountains.png",
			"repeat": true,
			"preRender": false,
			"distance": "10",
			"tilesize": 128,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1],
				[2,2,2,2,2,2,2,2]
			]
		},
		{
			"name": "Sun",
			"width": 4,
			"height": 3,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/Sun.png",
			"repeat": false,
			"preRender": false,
			"distance": "15",
			"tilesize": 128,
			"foreground": false,
			"data": [
				[1,0,0,0],
				[0,0,0,0],
				[0,0,0,0]
			]
		},
		{
			"name": "main2",
			"width": 80,
			"height": 15,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/OutdoorTiles.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,51,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,18,18,18,18,18,18,18,18,31,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,39,40,41,0,0,0,0],
				[0,0,18,18,18,18,0,18,18,0,0,0,0,0,0,0,0,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,31,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,0,0,0,0,0],
				[0,18,18,18,18,18,18,18,18,0,0,0,0,0,0,0,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,31,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0],
				[0,18,18,18,18,18,18,18,18,18,18,0,0,0,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,31,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,50,51,0,0,6,0,0,0,57,0],
				[0,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,31,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,2,2,3,0],
				[0,0,0,0,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,0,0,0,0,0,18,18,18,18,18,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,17,18,18,19,0],
				[0,0,0,0,0,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,0,0,0,0,0,0,0,0,0,0,0,0,0,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,57,0,4,0,0,0,0,20,0,0,0,0,0,0,0,1,18,18,18,19,0],
				[0,0,0,0,0,0,0,18,18,18,18,18,18,18,18,18,18,18,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,18,43,44,19,0],
				[0,0,0,0,0,0,18,18,18,18,18,18,18,18,18,18,18,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,57,17,18,59,60,19,57],
				[0,0,0,0,0,0,18,18,18,18,18,18,18,18,18,18,18,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,18,18,18,18,18,18,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "main",
			"width": 80,
			"height": 15,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/OutdoorTiles.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": true,
			"data": [
				[17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,0,0,0,0,0,0,0,0,0,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,34,34,34,34,34,34,34,34,35,0,0,0,49,50,51,0,0,0,49,50,51,0,0,0,49,50,51,0,0,0,49,50,51,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,34,34,34,34,34,34,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,18,34,34,34,34,34,34,18,18,18,18,18,18,18,18,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,19,12,0,0,0,0,0,33,34,18,18,18,18,18,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,39,40,41,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,19,12,0,0,0,0,0,0,0,33,34,34,34,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,19,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,18,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,12,12,1,2,2,2,2,2,2,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,18,18,18,18,18,19,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,18,18,18,18,18,18,18,18,18,18,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,18,18,18,18,18,19,0,0,0,0,0,0,0,0,0,0,0,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,18,18,18,18,18,19,0,0,0,0,0,0,0,0,0,0,12,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,18,18,18,18,18,18,18,19,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,18,18,18,18,18,19,0,0,0,0,0,0,0,0,0,28,12,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,18,18,18,18,18,18,18,19,0,0,0,0,0,1,2,2,2,2,2,3],
				[33,34,34,34,34,34,34,2,2,2,2,2,2,2,2,2,2,2,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,18,18,18,18,18,18,18,19,0,0,0,0,0,17,18,18,18,18,18,19]
			]
		},
		{
			"name": "collision",
			"width": 80,
			"height": 15,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": true,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,12,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,12,0,12,12,12,0,0,0,12,12,12,0,0,0,12,12,12,0,0,0,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,12,12,0,0,0,0,0,0,0,0],
				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,12,12,12,0],
				[0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,12,12,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1],
				[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1]
			]
		}
	]
}/*]JSON*/;
LevelGladeResources=[new ig.Image('media/EveningSky.png'), new ig.Image('media/Clouds.png'), new ig.Image('media/Mountains.png'), new ig.Image('media/Sun.png'), new ig.Image('media/OutdoorTiles.png'), new ig.Image('media/OutdoorTiles.png')];
});