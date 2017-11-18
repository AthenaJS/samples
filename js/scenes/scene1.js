import { Scene, Text } from 'athenajs';
import { Smiley, MySprite, MyFont } from '../objects/sample_objects';

// create a new scene
const myScene = new class objectsScene extends Scene {
    /**
     * Load anny need resources here
     *
     */
    setup() {
        this.loadImage('img/bitmapFont.png', 'myFont');
        this.loadImage('img/sprites.png', 'mySheet');
        this.loadImage('img/sballer_sprites.png', 'sballer');
    }
    start() {
        console.log('scene1');
        this.addObject(new MyFont({
            text: 'AthenaJS\nRulez'
        }));

        // add a new circle object
        this.addObject(new Smiley({
            width: 40,
            height: 40,
            y: 100,
            x: 10
        }));

        this.addObject(new MySprite({
            x: 50,
            y: 100
        }));

        this.addObject(new Text("nextString", {
            text: "Canvas text",
            x: 150,
            y: 120,
            color: 'black'
        }));
    }
}();

export default myScene;