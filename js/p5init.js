let p;
let height;
const s = pi => {
    p = pi;

    pi.setup = function () {
        pi.createCanvas(p.windowWidth, p.windowHeight);
        $("canvas").contextmenu(e => {
            e.preventDefault();

        });
    height = p.windowHeight / 100;
   
    /** this program is meant to be an example of the Z3 computer. its a project for school
 :) **/
    var paperWidth = 800;
    var paperHeight = 500;
    var paperX = 30;
    var paperY = 30;
    var borderX = 25;
    var borderY = 30;

    // var myFont = p.createFont("Serif", 14);

    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var shiftPressed = false;

    var special_chars = {
        10: "\n", 32: " ", 48: '0', 49: '1', 50: '2', 51: '3',
        52: '4', 53: '5', 54: '6', 55: '7', 56: '8',  57: '9',
        186: ';', 187: '=', 188: ',', 189: '-', 190: '.',
        191: '/', 220: '\\', 222: "'"
    };

    var special_chars_shift = {
        48: ')', 49: '!', 50: '@', 51: '£',  52: '$',
        53: '%', 54: '^', 55: '&', 56: '*',  57: '(',
        186: ':', 187: '+', 188: '<', 189: '_', 190: '>',
        191: '?', 220: '|', 222: '"'
    };

    var words = "";

    p.keyPressed = function() {
        //println(keyCode);
        var keyCode = p.keyCode;
        if(keyCode === 8){
            words = words.substring(0, words.length - 1);
        }
        else if (keyCode > 64 && keyCode < 91) {
            if (shiftPressed){
                words += uppercaseLetters[keyCode-65];
            } else {
                words += lowercaseLetters[keyCode-65];
            }
        } else if (keyCode in special_chars) {
            if (shiftPressed && special_chars_shift[keyCode]){
                words += special_chars_shift[keyCode];
            } else {
                words += special_chars[keyCode];
            }
        } else if (keyCode === 37) {
            words = words.slice(0, words.length-1);
        } else if (keyCode === 16){
            shiftPressed = true;
        }
        if (words.length > 64){
            alert("Memomry limit reached");
            words = words.substring(0, 64);
        }
    };

    p.keyReleased = function() {
        if (p.keyCode === 16) {
            shiftPressed = false;
        }
    };

    var drawPaper = function() {
    // image(backgroundImage, 0, 0, 400, 400);

        // Shadow
        p.noStroke();
        p.fill(0, 0, 0, 40);
        p.rect(paperX-2, paperY-2, paperWidth+5, paperHeight+5,2);
        
        // Paper
        p.stroke(0, 0, 0);
        p.fill(255, 255, 255);
        p.rect(paperX, paperY, paperWidth, paperHeight);
        
    };

    var blinkingCursor = function (x, y) {
        if (p.frameCount % 25 > 12) {
            var w = p.textWidth(words);
            var pw = paperWidth - borderX * 2;
            var lineX = x + 3 + w % pw;
            var lineY = y - 2 + p.floor(w / pw) * 16;
            p.line(lineX, lineY, lineX, lineY+12);
        }
    };
    p.background(17, 37, 61); 
    p.noStroke(); 
    p.fill(0, 41, 99); 
    p.ellipse(207, 195, 451, 481); 
    p.fill(7, 115, 237, 85); 
    p.ellipse(212, 205, 350, 397); 
    p.filter(p.BLUR, 9);
    p.draw =function() {
        
        drawPaper();
        blinkingCursor(paperX + borderX, paperY + borderY);

        // p.textFont(myFont, 14);
        p.fill(27, 28, 31);
        p.text(words,
            paperX + borderX, paperY + borderY,
            paperWidth - borderX*2, paperHeight + borderY*2);
    };
    
};
};