ig.module( 'game.levels.overworld2' )
.requires( 'impact.image','game.entities.levelexit','game.entities.wizard','game.entities.player3d' )
.defines(function(){
LevelOverworld2=/*JSON[*/{
	"entities": [
		{
			"type": "EntityLevelexit",
			"x": 144,
			"y": 0,
			"settings": {
				"size": {
					"x": 32,
					"y": 8
				},
				"level": "Dark"
			}
		},
		{
			"type": "EntityWizard",
			"x": 240,
			"y": 104
		},
		{
			"type": "EntityPlayer3d",
			"x": 152,
			"y": 212
		}
	],
	"layer": [
		{
			"name": "main",
			"width": 20,
			"height": 15,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/3DOutdoorTiles.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[55,56,56,56,56,56,56,56,56,71,71,56,56,56,56,56,56,56,56,57],
				[70,23,23,23,23,23,23,23,23,38,38,23,23,23,23,23,23,23,23,72],
				[70,23,23,23,23,23,23,23,24,29,29,22,23,23,23,23,23,23,23,72],
				[70,23,23,23,23,23,23,23,24,29,29,22,23,23,23,23,23,23,23,72],
				[70,23,23,23,23,23,23,23,24,29,29,22,23,23,23,23,23,23,23,72],
				[70,23,23,38,38,38,38,38,39,29,29,37,38,38,38,38,38,23,23,72],
				[70,23,24,29,29,29,29,29,29,29,29,29,29,29,29,29,29,22,23,72],
				[70,23,24,29,29,29,29,29,29,29,29,29,29,29,29,29,29,22,23,72],
				[70,23,23,8,8,8,8,8,9,29,29,7,23,23,23,23,23,23,23,72],
				[70,23,23,23,23,23,23,23,24,29,29,22,23,23,23,23,23,23,23,72],
				[70,23,23,23,23,23,23,23,24,29,29,22,23,23,23,23,23,23,23,72],
				[70,23,23,23,23,23,23,23,24,29,29,22,23,23,23,23,23,23,23,72],
				[70,23,23,23,23,23,23,23,24,29,29,22,23,23,23,23,23,23,23,72],
				[70,23,23,23,23,23,23,23,24,29,29,22,23,23,23,23,23,23,23,72],
				[85,86,86,86,86,86,86,86,86,29,29,86,86,86,86,86,86,86,86,87]
			]
		},
		{
			"name": "collision",
			"width": 40,
			"height": 30,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 8,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
				[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
				[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
				[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "main2",
			"width": 20,
			"height": 15,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/3DOutdoorTiles.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,101,0,0,101,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,66,0,0,66,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,66,0,0,66,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,101,0,101,0,0,0,0,101,0,101,0,0,0,0,0],
				[0,0,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,0,0],
				[0,0,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,0,0],
				[0,0,0,0,0,0,0,0,101,0,0,101,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,101,0,0,101,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,101,0,0,101,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
LevelOverworld2Resources=[new ig.Image('media/3DOutdoorTiles.png'), new ig.Image('media/3DOutdoorTiles.png')];
});